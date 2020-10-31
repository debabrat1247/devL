import { Component, OnInit } from '@angular/core';
import { Record } from '../record.service';

@Component({
  selector: 'app-showname',
  templateUrl: './showname.component.html',
  styleUrls: ['./showname.component.css']
})
export class ShownameComponent implements OnInit {

  names:any[];
  constructor( private _record:Record){}

  ngOnInit(): void {
    //this.names=this._record.getrecord();
    console.log("Inside showname component");
    this._record.getrecord().subscribe((data)=>this.names=data);

    console.log(this.names);
  }
  

}
