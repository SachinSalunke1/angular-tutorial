import { Component } from '@angular/core';

@Component({
  selector: 'app-condition-statement',
  templateUrl: './condition-statement.component.html',
  styleUrls: ['./condition-statement.component.scss']
})
export class ConditionStatementComponent {
  hideshow:boolean=true;
  age =18;
  colour ="orange";
  names = [" Sachin","Trisha","Agastya","Reshma"]
  users =[
    {
      name:"Sachin",
      age: 37
    },
    {
      name:"Trisha",
      age: 8
    },
    {
      name:"Agastya",
      age: 2
    },
    {
      name:"Reshma",
      age: 33
    }
  ]
}
