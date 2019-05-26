import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private token: string;

  constructor(private http: HttpClient) {}

  // Get the authorization token and store it
  getToken(): Observable<string>{

    if(this.token === undefined){
      let data = JSON.stringify({"jsonrpc":"2.0", "method": "authentify", "params": [{"password": "Password1", "username": "orangeDemo"}]});

      return this.http.post('/mobile-gateway/jsonrpc/AuthenticationService', data)
        .pipe(
          map((response: any) => {
            this.token =  "Basic " + btoa("orangeDemo:" + response.result.authenticationDetails.securityToken);
            return this.token;
          })
        );
    } else {
      return Observable.of(this.token);
    }
  }
}