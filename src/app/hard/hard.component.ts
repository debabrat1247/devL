import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpClientModule,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Record } from '../record.service';

@Component({
  selector: 'app-hard',
  templateUrl: './hard.component.html',
  styleUrls: ['./hard.component.css']
})
export class HardComponent implements OnInit {

  name=""
  password=""
  showmarks=false;
  marks
  datas=<any>[];
  constructor(public record:Record,private http:HttpClient,private router:Router) { }
  value=""
  dog=<any>[]
  ans=<any>[]
  onItemChange(value){
    console.log(" Value is : ", value );
 }
  ngOnInit(): void {

    this.record.gethard().subscribe(
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
    value.setno=3;
    console.log(value);
    this.http.post('https://frightful-wizard-99727.herokuapp.com/response',value)
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
