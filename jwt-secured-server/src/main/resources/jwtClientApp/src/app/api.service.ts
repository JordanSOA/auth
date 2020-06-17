import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Token } from './multi';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private token: string;
  private baseUrl = "http://localhost:9090";
  private grantType = 'password';
  private client_id: string;

  constructor(private http: HttpClient) {
    this.token = this.getToken();
    this.client_id = 'my-client-app';
    this.grantType = 'password';
  }


  login(username: string, password: string) {

    console.log(username);
    console.log(password);
    console.log(this.grantType);
    console.log(this.client_id);

    return this.http.post<Token>(`${this.baseUrl}/oauth/token`,
    { username: username, password: password, grant_type: this.grantType, client_id: this.client_id},{
      headers: new HttpHeaders({
        "Content-type": 'application/x-www-form-urlencoded; charset=utf-8'
      })
    })
      .pipe(
        map((response) => {
          if (response.token) {
            this.setToken(response.token);
            return true;
          } else {
            return false;
          };
        }),
        catchError((error: any) => {
          return of(false);
        })
      )
  };

  getToken() {
    this.token = localStorage.getItem('token');
    return this.token;
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  clearToken() {
    localStorage.setItem('token', '');
    this.token = '';
  }
}
