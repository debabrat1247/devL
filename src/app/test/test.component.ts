import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  
  Routetoinfo()
  {
    console.log("Control came");
    this.router.navigate(['login/profile/test/info']);
  }
  Routetoeasy()
  {
    console.log("Control came");
    this.router.navigate(['login/profile/test/easy']);
  }
  Routetomedium()
  {
    console.log("Control came");
    this.router.navigate(['login/profile/test/medium']);
  }
  Routetohard()
  {
    console.log("Control came");
    this.router.navigate(['login/profile/test/hard']);
  }
  Routetosample()
  {
    console.log("Control came");
    this.router.navigate(['login/profile/test/sample']);
  }

  
  constructor(public router:Router) { }

  ngOnInit(): void {

    
    
  }

}
