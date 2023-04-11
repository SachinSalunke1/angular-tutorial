import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  getAllData(){
    return [
      {
        name :"Sachin",
        age: 37,
        email:'sachin@email.com'
      },{
        name :"Trisha",
        age: 8,
        email:'trisha@email.com'
      },
      {
        name :"Agastya",
        age: 2,
        email:'agastya@email.com'
      },
      {
        name :"Reshma",
        age: 33,
        email:'reshma@email.com'
      }
    ]
  }
}
