import { Component } from '@angular/core';

@Component({
  selector: 'app-passvalue-typescript',
  templateUrl: './passvalue-typescript.component.html',
  styleUrls: ['./passvalue-typescript.component.scss']
})
export class PassvalueTypescriptComponent {
  title = "Pass Value from Typescript to HTML Page."
  company = " STARTECH PVT. LTD."
  getMethod(){
    return "WELCOME TO"+ this.company;
  }

  obj = {
    name : "Sachin",
    age : 37
  }
  a =500
  b =500
  currentURL =window.location.href
}
