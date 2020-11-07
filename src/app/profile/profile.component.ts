import { Component, OnInit } from '@angular/core';
import { Record } from '../record.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username="xyz";
  datas=<any>[];
  oldpassword;
  newpassword;
  isclick=false;
  notmatch;
  success=false;
  constructor(private _http: HttpClient,private _record:Record,private _auth:AuthService) { }

  ngOnInit(): void {
   
    this.notmatch=false;
    console.log(this.username);
    this.username=this.getdata();
    console.log(this.username);
    let user=localStorage.getItem('token');
    let obj={id:user};
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');

    this._http.post('https://frightful-wizard-99727.herokuapp.com/profile', obj, {
      headers: headers
    })
    .subscribe(data => {
          console.log(data);
          this.datas=data;
          this.username=data[0].username;
          
    },(error)=>{
          
      console.log("server error");
    });

    //this._record.getinfo().subscribe((data)=>this.datas=data);
  
  }
  getdata():string{
    return this._record.shared;
  }
  clicked()
  {
    console.log("hello from clicked");
    this.isclick=true;
  }

  onupdate(value)
  {
    value.id=localStorage.getItem('token');
    console.log(value);
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');

    this._http.put('https://frightful-wizard-99727.herokuapp.com/registration', value, {
      headers: headers
    })
    .subscribe(data => {
          this.success=true;
          this.isclick=false;
          this.oldpassword="";
          this.newpassword="";
          setTimeout(() => {
            this.success=false;
          }, 3000);

          console.log("updated");
          
    },(error)=>{
      this.notmatch=true;
      setTimeout(() => {
        this.notmatch=false;
      }, 2000);
          
      console.log("server error");
    });
  }

  cancel()
  {
    this.isclick=false;
  }

}
