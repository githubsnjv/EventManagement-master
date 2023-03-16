import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseCrudService } from '../services/firebase-crud.service';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(public fb:FormBuilder,public fstore:AngularFirestore, public fire: FirebaseCrudService, private route:ActivatedRoute,private rou:Router, private firebaseauth:AngularFireAuth) { }
loginForm : FormGroup;
auth: boolean;
public regnum: any=0;
public page :any;

  ngOnInit(): void {

    this.loginForm= this.fb.group({
     
     login_email: ['', Validators.compose([Validators.required,Validators.email])],
      login_password: ['', Validators.compose([Validators.required])],
     
    });

// finding the register number of particular email id

  }


  onloginclick(){
    console.log(this.loginForm.value);

    
    this.login(this.loginForm.get('login_email')?.value,this.loginForm.get('login_password')?.value);
    
  }

  

  login(email: string, password: string) {
    this.firebaseauth.signInWithEmailAndPassword(email,password).then(()=>{
  
      console.log("succesfully logged in !");
      localStorage.setItem('localemail',this.loginForm.get('login_email')?.value);
      this.rou.navigateByUrl('dash');
      alert('logged in succesfully');
     
      
  
    
    }).catch(err=>{
      console.log(err);
      console.log('not logged in')
      alert("Your credential are not a valid one");
    })
  
    }



}
