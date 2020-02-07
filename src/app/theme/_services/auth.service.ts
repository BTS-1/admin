import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators/map';

@Injectable()
export class AuthService {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.url + 'auth/';
   }
  getUsers(): Promise<any[]> {
    return this.http.get<any[]>(this.baseUrl).toPromise();
  }
  addUser(model: any): Promise<boolean> {
    return this.http.post<boolean>(this.baseUrl + 'add', model).toPromise();
  }
  login(model: any): Promise<any> {
    return this.http.post<any>(this.baseUrl + 'login', model).pipe(map(
      (response: any) => {
       localStorage.setItem('user', JSON.stringify(response));
    })).toPromise();
  }
  logout() {
    localStorage.removeItem('user');
  }
  loggedIn() {
    if (localStorage.getItem('user')) {
      return true;
    } else {
      return false;
    }
  }

}
