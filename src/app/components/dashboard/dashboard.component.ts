import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore'
import { FirebaseCrudService } from 'src/app/services/firebase-crud.service';
import { ActivatedRoute } from '@angular/router';
import { range } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  eventForm: FormGroup;
  eventlist : any;
  name: any
  public c : any;
  constructor(public fire:AngularFirestore, public fb: FormBuilder,private firebaseCrudService:FirebaseCrudService, public  route: ActivatedRoute) {


   }

  

  ngOnInit(): void {

    
    
   

    
   this.name = localStorage.getItem('localemail');

  

    this.eventForm = this.fb.group({
      eventname: ['', Validators.compose([Validators.required,Validators.maxLength(20)])],
      eventOrganizer: ['', Validators.compose([Validators.required])],
      startDate: ['', Validators.compose([Validators.required])],
      endDate:['', Validators.compose([Validators.required])],
      faculty:["",Validators.compose([Validators.required])]
    });

     this.getdata()   
    
  }


 public registereventNumber: number=0;  // event number given while event registration

  getdata(){
    this.fire.collection("event").doc(this.name).collection("register").valueChanges().subscribe(data=>{
     
      this.eventlist = data;
     
      this.registereventNumber=this.eventlist.length;

      
          
      
    },
    err=>{
      console.log("not data found")
    })
  }

  onSubmit() {
   
    if(this.eventForm.invalid){
      console.log('sorry fil all theh details');
      alert('fill all the fields')
      console.log(this.eventForm.value)
    }
    else{
      console.log(this.eventForm.value);
       // TODO: Use EventEmitter with form value
   this.fire.collection("event").doc(this.name).collection("register").doc(String(this.registereventNumber)).set(this.eventForm.value);
   alert("succesfully uploaded");


  //  this.fire.collection('event').doc('001').collection('register').doc('1').set(this.eventForm.value);
    }
   
    
  }

 

}
