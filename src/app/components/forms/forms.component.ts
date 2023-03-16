import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,ReactiveFormsModule} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
      
    this.route.queryParams.subscribe( (params:any) => {
      console.log(params);
      console.log(this.route.queryParams)

  })


  


  
}

}