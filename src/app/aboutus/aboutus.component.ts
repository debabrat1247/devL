import { Component, OnInit } from '@angular/core';
import { Record } from '../record.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  user=0
  constructor(private record:Record) { }

  ngOnInit(): void {

    this.record.getuser()
    .subscribe(data=>{
        this.user=data.length;
        
        console.log("successful");
    },(error)=>{
      console.log("server error call from about");
    });
  }

}
