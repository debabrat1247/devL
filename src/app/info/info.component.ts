import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as CanvasJS from '../canvas/canvasjs.min';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  
  clicked1=false
  clicked2=false
  responses=<any>[];
  scores=<any>[];
  seescore=false;
  seeresponse=false;
  seechart1=false;
  seechart2=false;
  username
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.username=localStorage.getItem('token');
    
  }

  selected()
  {
    this.clicked1=true;
    this.clicked2=true;
    this.seeresponse=false;
    this.seescore=false;
  }
  getresponse()
  {
    this.http.post<any>("http://127.0.0.1:3000/getresponse",{username:this.username})
    .subscribe(data=>{
      this.responses=data;
      this.seeresponse=true;
      this.seescore=false;
      this.seechart1=false;
      this.seechart2=false;
      this.clicked1=false;
      this.clicked2=false;

    },(error)=>{
      console.log("Server error");
    });
  }
  getscore()
  {
    this.http.post<any>("http://127.0.0.1:3000/getscore",{username:this.username})
    .subscribe(data=>{
      this.scores=data;
      this.seescore=true;
      this.seeresponse=false;
      this.seechart1=false;
      this.seechart2=false;
      this.clicked1=false;
      this.clicked2=false;
    },(error)=>{
      console.log("Server error");
    });
  }

  getchart1()
  {
    this.http.post<any>("http://127.0.0.1:3000/getscore",{username:this.username})
    .subscribe(data=>{
      this.scores=data;
      this.seechart1=true;
    },(error)=>{
      console.log("Server error");
    });
    this.seeresponse=false;
    this.seescore=false;
    this.seechart1=true;
    this.seechart2=false;
    
    console.log("hello from chart");
    var dataPoints=[]
    var i;
    var range=20;
    if(this.scores.length<range)
    {
      range=this.scores.length;
    }
    for(i=0;i<range;i++)
    {
      var t=this.scores[i].time;
      var m=parseInt(this.scores[i].marks);
      console.log(m);
      dataPoints.push({y:m,label:t});
    }
    console.log(dataPoints);
    let chart1 = new CanvasJS.Chart("chartContainer1", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "scores in different test"
      },
      data: [{
        type: "spline",
        dataPoints : dataPoints
       
      }]
    });
      
   chart1.render();
      
  }
  getchart2()
  {
    this.http.post<any>("http://127.0.0.1:3000/getscore",{username:this.username})
    .subscribe(data=>{
      this.scores=data;
      this.seechart2=true;
    },(error)=>{
      console.log("Server error");
    });
    this.seeresponse=false;
    this.seescore=false;
    this.seechart2=true;
    this.seechart1=false;
    
    console.log("hello from chart");
    var dataPoints=[]
    var i;
    var range=20;
    if(this.scores.length<range)
    {
      range=this.scores.length;
    }
    for(i=0;i<range;i++)
    {
      var t=this.scores[i].time;
      var m=parseInt(this.scores[i].marks);
      console.log(m);
      dataPoints.push({y:m,label:t});
    }
    
      
    let chart2 = new CanvasJS.Chart("chartContainer2", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "scores in different test"
      },
      data: [{
        type: "column",
        dataPoints : dataPoints
       
      }]
    });
      
    chart2.render();
      
  }

  

}
