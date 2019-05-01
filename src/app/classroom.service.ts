import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Classroom } from './interfaces/classroom';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  private encodedSecurityToken: string;

  constructor(private http: HttpClient) {

  /*  let data = JSON.stringify({"jsonrpc":"2.0", "method": "authentify", "params": [{"password": "Password1", "username": "orangeDemo"}]});

    this.http.post<{result: {authenticationDetails: {securityToken: string}}}>('https://sb.ch.amdocs.com//mobile-gateway/jsonrpc/AuthenticationService' , data)
    .subscribe(response => 
      this.encodedSecurityToken = "Basic " + btoa("orangeDemo:" + response.result.authenticationDetails.securityToken)
    );*/

  }

  getAllClassrooms(): Observable<Classroom[]> {
    //return this.http.get<Classroom[]>('./api/classrooms');
    return this.http.get<Classroom[]>('./assets/classroom-data.json');
  }

  getClassroom(id: number): Observable<Classroom> {
    //return this.http.get<Classroom>('./api/classrooms/' + number);
    return this.http.get<Classroom>('./assets/classroom-data.json' + id);
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

  test(){

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
