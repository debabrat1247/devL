import { Routes,CanActivate } from '@angular/router';
import { AppComponent } from './app.component';
import { ShowComponent } from './show/show.component';
import { ShownameComponent } from './showname/showname.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './auth.guard';
import { LogGuard } from './log.guard';
import { TestComponent } from './test/test.component';
import { InfoComponent } from './info/info.component';
import { EasyComponent } from './easy/easy.component';
import { MediumComponent } from './medium/medium.component';
import { HardComponent } from './hard/hard.component';
import { SampleComponent } from './sample/sample.component';



const route: Routes = [
  {
    path:'',
    component:HomeComponent
    
  },
  { path: 'home', 
    component: HomeComponent 
    
  },
  {
    path: 'show',
    component: ShowComponent
    
  },
  { 
    path: 'showname',
    component: ShownameComponent
    
  },
  { path: 'register', 
    component: RegistrationComponent,
    canActivate:[LogGuard]
     
  },
  {
    path: 'aboutus',
    component: AboutusComponent
    
  },
  { path: 'login',
    component: LoginComponent,
    canActivate:[LogGuard]
    
  },
  {
    path:'login/profile',
    component:ProfileComponent,
    canActivate:[AuthGuard]   
  },
  {
    path:'login/profile/test',
    component:InfoComponent,
    canActivate:[AuthGuard] 
    
  }, 
  {
    path:'login/profile/test/info',
    component:InfoComponent,
    canActivate:[AuthGuard] 
    
  },
  {
    path:'login/profile/test/easy',
    component:EasyComponent,
    canActivate:[AuthGuard] 
  },
  {
    path:'login/profile/test/medium',
    component:MediumComponent,
    canActivate:[AuthGuard] 
  },
  {
    path:'login/profile/test/hard',
    component:HardComponent,
    canActivate:[AuthGuard] 
  },
  {
    path:'login/profile/test/sample',
    component:SampleComponent,
    canActivate:[AuthGuard] 
  },
  {
    path:'**',
    component:PagenotfoundComponent    
  }
];
export default route;