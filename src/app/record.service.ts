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
  private _url:string="http://localhost:3000/record";
  private easy="http://localhost:3000/easy";
  private medium="http://localhost:3000/medium";
  private hard="http://localhost:3000/hard";
  private resurl="http://localhost:3000/registration";

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
