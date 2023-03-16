import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  item$: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.item$ = firestore.collection('test').valueChanges();
  }
}
