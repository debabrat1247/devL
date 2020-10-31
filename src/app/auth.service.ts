import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  constructor() { }
 
  loggedin()
  {
    return !!localStorage.getItem('token');
  }
  logoutuser()
  {
    localStorage.removeItem('token');
  }
  

}
