import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database'; 
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule,AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute,Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCrudService {
  

  constructor(public database:AngularFirestore,public auth: AngularFireAuth, private rou:Router, private router:ActivatedRoute) {
     
   }

  public a:number;
  
  findregnum(emaillog: string){
    console.log(emaillog)
    return this.database.collection("studentRegistration").doc(emaillog).get();
  }
  
  getdata(idname: any)
  {
    const ref = this.database.collection("event").valueChanges();
    return ref;

  }

  addAsignatura() {
    return this.database.collection('studentRegistration').valueChanges();
 }

  
  
  emailSignup(email: string, password: string,size:number) {
    
    console.log("ssssssssssss",String(size))

    
    this.database.collection("studentRegistration").doc(email).set({id:String(size)}).then(()=>{
        console.log("succesfully signed up!")
        this.auth.createUserWithEmailAndPassword(email, password);
        this.rou.navigateByUrl('login');
        alert("succesfully logged in !")
   
    }).catch((err)=>{
      console.log("sorry something went wrong",err);
    })
    
  }
  
  
    
  signOut() {
  this.auth.signOut();
  // this.router.navigate(['/']);
  }


  


}
