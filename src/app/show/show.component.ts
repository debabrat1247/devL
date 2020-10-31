import { Component, EventEmitter, OnInit } from '@angular/core';
import { Record } from '../record.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
  inputs:['parentdata'],
  outputs:['childevent']
})
export class ShowComponent implements OnInit {

  public parentdata: string;
  childevent= new EventEmitter<string>();
  
  names:any[];
  
  
  constructor( private _record:Record){}

  onChange(value:string)
  {
    this.childevent.emit(value);
  }

  ngOnInit(): void {
   //this.names=this._record.getrecord();
   console.log("Inside show component");
   this._record.getrecord().subscribe((data)=>this.names=data);

   // console.log(this.names);   
  }

}
