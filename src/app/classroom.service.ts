import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Classroom } from './interfaces/classroom';
import { map, flatMap } from 'rxjs/operators';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService implements OnInit {

  private DEVICE_TYPES = [
    "GENERAL_PARENT_ZWAVE", // Temperature/Humidity/Light/Door sensor
    "TYCO_MOTION", // Motion sensor
    "TYCO_CONTACT", // Window sensor
    "GENERAL_BINARY_SWITCH_ZWAVE", // Energy sensor
    "GENERAL_ALARM_V2_ZWAVE" // Door sensor
  ];

  private allClassrooms = [];

  constructor(private http: HttpClient, private authorizationService: AuthorizationService) {}

  ngOnInit(){
    this.getClassroomsFromJSON().subscribe(classroomsData => this.allClassrooms = classroomsData as Classroom[]);
    this.getClassroomFromServer(81004).subscribe(classroom => this.allClassrooms.push(classroom));
  }

  getAllClassrooms(): Observable<Classroom[]> {
    if(this.allClassrooms.length == 0){
      return this.getClassroomsFromJSON().pipe(
        flatMap(classroomsData => {
          this.allClassrooms = classroomsData as Classroom[];
          
          return this.getClassroomFromServer(81004).pipe(
            map(classroom => {
              this.allClassrooms.push(classroom); 
              return this.allClassrooms;
          }));
      }));
    } else
      return Observable.of(this.allClassrooms);
  }

  getClassroomsFromJSON(): Observable<Classroom[]> {
    //return this.http.get<Classroom[]>('./api/classrooms');
    return this.http.get<Classroom[]>('./assets/classroom-data.json').pipe(
      map((data: Classroom[]) => {
        data.forEach(classroom => classroom.number = (!classroom.number ? classroom.number = classroom.id : classroom.number));
        return data;
      }));
  }

  getClassroomFromServer(classID: number): Observable<Classroom>{
    
    return this.authorizationService.getToken().pipe( // Get the token whether it already exists or not
      flatMap(token => { 
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'text/plain',
            'Authorization': token,
          }),
        };
       
        // Get all relevant sensors for the classroom 
        let data2 = JSON.stringify({"jsonrpc":"2.0", "method": "getDevicesByType", "params": [classID, this.DEVICE_TYPES]});
        return this.http.post('/mobile-gateway/jsonrpc/HomeService', data2, httpOptions).pipe(
          map((response: any) => {

              const classroomToReturn: Classroom = {
                id: classID,
                number: classID,
                temperature: 0,
                humidity: 0,
                watt: 0,
                light: 0,
                lastMotionDetected: new Date(),
                doorSensors: [],
                windowSensors: []
              };

              // Sort the sensors
              let sensors = {};
              this.DEVICE_TYPES.forEach(a => sensors[a] = []);
              response.result.forEach(device => sensors[device.type.toUpperCase()].push(device));

              // Create the classroom object to return

              // Handle temperature/humidity/light sensors
              sensors["GENERAL_PARENT_ZWAVE"][0].children.forEach(childSensor => {
                let sensorData = childSensor.multiLevelSensorValue;
                classroomToReturn[sensorData.type] = sensorData.value;
              });

              // Handle energy sensor
              let energySensorAttributes = {};
              sensors["GENERAL_BINARY_SWITCH_ZWAVE"][0].attributes.forEach(attribute => energySensorAttributes[attribute.name] = attribute.value);
              classroomToReturn.watt = energySensorAttributes["device.energy.instant.power"];

              // Handle door sensor
              sensors["GENERAL_ALARM_V2_ZWAVE"].forEach(doorSensor => {
                classroomToReturn.doorSensors.push({status: doorSensor.status});
              });

              // Handle window sensor
              sensors["GENERAL_ALARM_V2_ZWAVE"].forEach(windowSensor => {
                classroomToReturn.windowSensors.push({status: windowSensor.status});
              });

              // Handle motion sensor
              //sensors["TYCO_MOTION"][0]
      
              return classroomToReturn;
            })
          );
        })
      );
  }

  saveTextAsFile (data: string, filename: string){
    
    if(!data) {
        console.error('Console.save: No data')
        return;
    }

    if(!filename) filename = 'console.json'

    let blob = new Blob([data], {type: 'text/plain'}),
        e = document.createEvent('MouseEvents'),
        a = document.createElement('a')
    
    if (window.navigator && window.navigator.msSaveOrOpenBlob) { // For Internet Explorer:
      window.navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      let e = document.createEvent('MouseEvents'),
          a = document.createElement('a');

      a.download = filename;
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ['text/plain', a.download, a.href].join(':');
      e.initEvent('click', true, false);
      a.dispatchEvent(e);
    }
  } 
  //this.saveTextAsFile(JSON.stringify(data), "notifications.json")
}
