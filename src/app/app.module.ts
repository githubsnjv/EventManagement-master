import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { FormsComponent } from './components/forms/forms.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NavbarCommonComponent } from './navbar-common/navbar-common.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignUpComponent,
    DashboardComponent,
    FormsComponent,
    NavbarCommonComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
