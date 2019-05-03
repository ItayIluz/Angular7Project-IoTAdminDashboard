import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Classroom } from './interfaces/classroom';
import { map, flatMap } from 'rxjs/operators';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  private DEVICE_TYPES = [
    "GENERAL_PARENT_ZWAVE", // Temperature/Humidity/Light/Door sensor
    "TYCO_MOTION", // Motion sensor
    "TYCO_CONTACT", // Window sensor
    "GENERAL_BINARY_SWITCH_ZWAVE", // Energy sensor
    "GENERAL_ALARM_V2_ZWAVE" // Door sensor
  ];

  constructor(private http: HttpClient, private authorizationService: AuthorizationService) {}

  getAllClassrooms(): Observable<Classroom[]> {
    //return this.http.get<Classroom[]>('./api/classrooms');
    return this.http.get<Classroom[]>('./assets/classroom-data.json');
  }

  getClassroom(classID: number): Observable<Classroom>{
    
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
                temperature: 0,
                humidity: 0,
                watt: 0,
                light: 0,
                lastMotionDetected: null,
                doorSensors: [],
                windowSensors: []
              };

              // Sort the sensors
              let sensors = {};
              this.DEVICE_TYPES.forEach(a => sensors[a] = []);
              response.result.forEach(device => {
                sensors[device.type.toUpperCase()].push(device);
              });

              // Create the classroom object to return

              // Handle temperature/humidity/light sensors
              sensors["GENERAL_PARENT_ZWAVE"].forEach(parentSensor => {
                parentSensor.children.forEach(childSensor => {
                  let sensorData = childSensor.multiLevelSensorValue;
                  classroomToReturn[sensorData.type] = sensorData.value;
                });
              })

              // Handle energy sensor
              sensors["GENERAL_BINARY_SWITCH_ZWAVE"].forEach(parentSensor => {

              });

              // Handle door sensor
              sensors["GENERAL_ALARM_V2_ZWAVE"].forEach(parentSensor => {

              });

              // Handle window sensor
              sensors["GENERAL_PARENT_ZWAVE"].forEach(parentSensor => {

              });

              // Handle motion sensor
              sensors["TYCO_MOTION"].forEach(parentSensor => {

              });
  
              console.log(sensors);
              /*for(let i = 0; i < response.result.length; i++){
                console.log(response.result[i]);
              }*/
      
              return classroomToReturn;
            })
          );
        })
      );
  }

  insertClassroom(classroom: Classroom): Observable<Classroom> {
    //return this.http.post<Classroom>('./api/classrooms/', classroom);
    return this.http.post<Classroom>('./assets/classroom-data.json', classroom);
  }

  updateClassroom(classroom: Classroom): Observable<void> {
    //return this.http.put<void>('./api/classrooms/' + classroom.id, classroom);
    return this.http.put<void>('./assets/classroom-data.json' + classroom.id, classroom);
  }

  deleteClassroom(id: number) {
    //return this.http.delete('./api/classrooms/' + number);
    return this.http.delete('./assets/classroom-data.json' + id);
  }

 /* test(){

    let data = JSON.stringify({"jsonrpc":"2.0", "method": "authentify", "params": [{"password": "Password1", "username": "orangeDemo"}]});

    this.http.post<{result: {authenticationDetails: {securityToken: string}}}>('/mobile-gateway/jsonrpc/AuthenticationService' , data)
    .subscribe(response => {
        let auth = "Basic " + btoa("orangeDemo:" + response.result.authenticationDetails.securityToken)
    
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'text/plain',
            'Authorization': auth,
          }),
        };
       
        let data2 = JSON.stringify({"jsonrpc":"2.0", "method": "getDevices", "params": ["81004"]});
        this.http.post<{result: []}>('/mobile-gateway/jsonrpc/HomeService', data2, httpOptions).subscribe(
          response => { 
            for(let i = 0; i < response.result.length; i++){
              console.log(response.result[i]);
            }
          });
    });
    
  }*/


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
