import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Token, BodyReq, User, AuthToken, MsgResponse, Error } from './multi';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private token: string;
  private baseUrl = "http://localhost:9090";
  private grantType = 'password';
  private client_id: string;
  public body = "";
  
  constructor(private http: HttpClient) {
    this.token = this.getToken();
    this.client_id = 'my-client-app';
    this.grantType = 'password';
  }
  
  
  login(username: string, password: string) {
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    body.set('grant_type', 'password');
    body.set('client_id', 'my-client-app');
    
    return this.http.post<AuthToken>(`${this.baseUrl}/oauth/token`, body.toString(),{
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    })
      .pipe(
        map((response) => {
          if (response) {
            this.setToken(response.access_token);
            return true;
          } else {
            return false;
          };
        }),
        catchError((error: any) => {
          console.log("Error " + error);
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
    
    getProfile() {
      return this.http.get<User>(`${this.baseUrl}/api/userInfo`,{ 
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.getToken()}`
        }),
        responseType: "json"
      }).pipe(
        map(response => {
          return response;
        }),
        catchError((error: any) => {
          return of(false);
        })
        )
      }
      getPublicHello()  {
        return this.http.get<MsgResponse>(`${this.baseUrl}/api/public/hello`,{ 
          headers: new HttpHeaders({
            Authorization: `Bearer ${this.getToken()}`
          }),
          responseType: 'json'
        })
        .pipe(((response) => {return response})
          ,((error) => {
            return error;
          }));
      }

      getPrivateUserHello() {
        return this.http.get<MsgResponse>(`${this.baseUrl}/api/private/user`,{ 
          headers: new HttpHeaders({
            Authorization: `Bearer ${this.getToken()}`
          }),
          responseType: 'json'
        })
        .pipe(((response) => {return response})
          ,((error) => {
            return error;
          }));
      }
      getPrivateAdminHello() {
        return this.http.get<MsgResponse>(`${this.baseUrl}/api/private/admin`,{ 
          headers: new HttpHeaders({
            Authorization: `Bearer ${this.getToken()}`
          }),
          responseType: 'json'
        })
        .pipe(((response) => {return response})
          ,((error) => {
          return error;
        }));
      }
}
