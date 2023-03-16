import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsComponent } from './components/forms/forms.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'login', component: LoginPageComponent
  },
  {
    path: 'main', component: DashboardComponent
  },
  {
    path: 'signup', component:SignUpComponent
  },
  {
    path: '', component:SignUpComponent
  },
  {
    path:'dash', component:DashboardComponent
  },
  {
    path:'dash/eventcomplete', component:FormsComponent
  }
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
