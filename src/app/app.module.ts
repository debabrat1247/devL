import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule,HttpClient, } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ShowComponent } from './show/show.component';
import { ShownameComponent } from './showname/showname.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';

import route from './router';
import { ProfileComponent } from './profile/profile.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './auth.guard';
import { LogGuard } from './log.guard';
import { TestComponent } from './test/test.component';
import { InfoComponent } from './info/info.component';
import { EasyComponent } from './easy/easy.component';
import { HardComponent } from './hard/hard.component';
import { MediumComponent } from './medium/medium.component';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    ShownameComponent,
    RegistrationComponent,
    HomeComponent,
    AboutusComponent,
    LoginComponent,
    ProfileComponent,
    PagenotfoundComponent,
    TestComponent,
    InfoComponent,
    EasyComponent,
    HardComponent,
    MediumComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(route),
    
  ],
  providers: [
    HttpModule,
    HttpClient,
    AuthGuard,
    LogGuard
            
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
