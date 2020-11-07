import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpResponse,HttpErrorResponse } from '@angular/common/http';
import { somedata } from './data';
import { Router,CanActivate } from '@angular/router';

import { basicdata } from './profiledata'
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class Record{
  public shared:string;
  private _url:string="https://frightful-wizard-99727.herokuapp.com/record";
  private easy="https://frightful-wizard-99727.herokuapp.com/easy";
  private medium="https://frightful-wizard-99727.herokuapp.com/medium";
  private hard="https://frightful-wizard-99727.herokuapp.com/hard";
  private resurl="https://frightful-wizard-99727.herokuapp.com/registration";

  //private _url:string="api/data.json";
  constructor(private _http:HttpClient){}
  public headers = new HttpHeaders()
        .set('Authorization', 'my-auth-token')
        .set('Content-Type', 'application/json');
  
  getrecord():Observable<somedata[]>
  {
      
      return this._http.get<somedata[]>(this._url);
                                       
  }
  getinfo()
  {
    return this._http.get<any>(this._url);
  }

  geteasy()
  {
    return this._http.get<any>(this.easy);
  }
  getmedium()
  {
    return this._http.get<any>(this.medium);
  }
  gethard()
  {
    return this._http.get<any>(this.hard);
  }
  getuser()
  {
    return this._http.get<any>(this.resurl);
  }
  
 
}
