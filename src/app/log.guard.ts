import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LogGuard implements CanActivate {
  constructor(private auth:AuthService,private router:Router)
  {

  }
  canActivate():boolean{
    if(this.auth.loggedin())
    {
      console.log("From logguard false");
      this.router.navigate(['login/profile']);
      return false;
      
    }
    else
    {
      console.log("From authauard true");
      return true;
    }

  }
  
}
