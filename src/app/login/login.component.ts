import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Record } from '../record.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name="";
  password="";
  submit=false;
  notfound=false;
  notmatch=false;
  username="abc";
  
 
  
  onSubmit(value:any)
  {
    console.log(value);
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');

    this._http.post('https://frightful-wizard-99727.herokuapp.com/login', JSON.stringify(value), {
      headers: headers
    })
    .subscribe(data => {
          console.log(data);
          if(JSON.stringify(data)===JSON.stringify({"res":"1"}))
          {
            console.log("user not found");
            this.notfound=true;
            setTimeout(() => {
              this.notfound = false;
            }, 2000);
          }
          else if(JSON.stringify(data)===JSON.stringify({"res":"2"}))
          {
            console.log("password match");
            this.username=value.name;
            this.setdata(this.username);
            this.submit=true;
            localStorage.setItem('token',this.username);
            
            
            setTimeout(()=>{
              this.router.navigate(['login/profile']);
            },4000);

            
            
            
          }
          else
          {
            console.log("username and password error");
            this.notmatch=true;
            setTimeout(() => {
              this.notmatch = false;
            }, 3000);
          }
    },(error)=>{
      
      
      console.log("server error");
    });
  }
  getdata():string
  {
    return this._record.shared;
  }
  setdata(value:string)
  {
    this._record.shared=value;
  }
  constructor(private _http: HttpClient,private _record:Record,public router:Router,public _auth:AuthService) { }

  ngOnInit(): void {

    
    
  }

}
