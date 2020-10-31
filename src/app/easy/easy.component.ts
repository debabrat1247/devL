import { Component, OnInit } from '@angular/core';
import { Record } from '../record.service';
import { HttpClient,HttpClientModule,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-easy',
  templateUrl: './easy.component.html',
  styleUrls: ['./easy.component.css']
})
export class EasyComponent implements OnInit {

  name=""
  password=""
  showmarks=false;
  marks
  datas=<any>[];
  constructor(public record:Record,private http:HttpClient,private router:Router) { }
  value=""
  ans=<any>[]

  ngOnInit(): void {

    this.record.geteasy().subscribe(
      data => {
        console.log(data);
        this.datas=data;
        
  },(error)=>{
        
    console.log("server error");
  }
    );
    
  }

  myresponse(value:any)
  {
    var d =new Date();
    var size = Object.keys(value).length;
    console.log(size);
    console.log("hello from response");
    value.username=localStorage.getItem('token');
    value.time=d;
    value.size=size;
    value.setno=1;
    console.log(value);
    this.http.post('http://127.0.0.1:3000/response',value)
    .subscribe(data=>{
        console.log("submited");
        console.log(data);
        var x=JSON.stringify(data);
        this.marks=x;
        this.showmarks=true;
        setTimeout(() => {
          this.showmarks=false;
          this.router.navigate(['login/profile/test/info']);
        }, 3000);

        
    },(error)=>{
      console.log("server error");
    });
    
  }

  

}
