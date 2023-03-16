import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl , FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {FirebaseCrudService} from '../services/firebase-crud.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signup_form: FormGroup;

  email : String;
  password : String;
  

  constructor(private route: Router, public fires:FirebaseCrudService, private fb: FormBuilder, auth : AngularFireAuth,public fire:AngularFirestore) { 

  }

  size:number
  public regnumber: any;
  ngOnInit(): void {
    this.signup_form = this.fb.group({
      signup_name: ['', Validators.compose([Validators.required,Validators.maxLength(20)])],
      signup_email: ['', Validators.compose([Validators.required,Validators.email])],
      signup_password: ['', Validators.compose([Validators.required])],
      signup_repassword:['', Validators.compose([Validators.required])]
    });

   
  }

  

  formSubmit(){
    if(this.signup_form.invalid){
      alert(" something went  wrong");
      return
    }
    
    
      console.log(this.signup_form.value)
      console.log(this.signup_form.get('signup_name')?.value);
      
      this.fires.addAsignatura()
      .subscribe(data => {
        this.size = data.length;
              this.size = this.size + 1;
              return
      })
     
     this.fires.emailSignup(this.signup_form.get('signup_email')?.value,this.signup_form.get('signup_password')?.value,this.size);
   
  }

  redirect(): void{
    this.route.navigateByUrl('login');
    // console.log(this.signup.value);
    
   
     }

    
    

  

  signupclick()
  {
   
  }


}
