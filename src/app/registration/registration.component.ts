import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  title = 'confusion';
  name="raju";
  email="raju123@gmail.com";
  phone="9134567834";
  state="Bihar";
  password="";
  exist=false;
  submit=false;
  myres=[]
 
  onSubmit(value:any)
  {
    console.log(value);
    
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');

    this._http.post('http://127.0.0.1:3000/registration', JSON.stringify(value), {
      headers: headers
    })
    .subscribe(data => {
      this.submit=true;
          console.log("sucessfully registered");
          this.submit=true;
          setTimeout(() => {
            this.router.navigate(['login']);
          }, 3000);
          console.log(data);
    },(error)=>{
      this.exist=true;
      setTimeout(() => {
        this.exist = false;
      }, 3000);
      console.log("already exist");
    });
    
  }

  constructor(private _http: HttpClient,private router:Router) { }
 

  ngOnInit(): void {
  }

}
