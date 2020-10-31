import { Component } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { Record } from './record.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Record,AuthService,AuthGuard]
})
export class AppComponent {

  constructor(public auth:AuthService,public _record:Record){}
 
  public cdata:string;
  

 
}
