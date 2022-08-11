import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _user: any = null;
  private userSubject = new BehaviorSubject(this._user);
  userObservable = this.userSubject.asObservable();
 

  constructor(private httpClient: HttpClient) {
    this.rehydrate()
  }

  createUserSession(user: any) {
   localStorage.setItem("user",JSON.stringify(user));
    this._user = user;
    this.userSubject.next(this._user);
    
  }
  logout() {
    localStorage.clear();
    this._user = null;
    this.userSubject.next(this._user);
  }

  rehydrate() {
    if (localStorage.getItem('user')) {
      this._user = JSON.parse(localStorage.getItem('user') as any);
      this.userSubject.next(this._user);
    }
  }
  
  login(email: string, password: string) {
    const apiKey = 'AIzaSyA7Oz2KYHDX0kn63LeZB3wOqptUvIVKu7k';
    const url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
      apiKey;
    const data = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    return this.httpClient.post(url, data);
  }
}

