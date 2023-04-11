import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-pipes',
  templateUrl: './angular-pipes.component.html',
  styleUrls: ['./angular-pipes.component.scss']
})
export class AngularPipesComponent {
  name=" STAR TECH PVT LTD"
  price : 25.253521457;
  item =['Mobile','Tablet','Laptop'];
  data = {
    name :"Sachin",
    channel :"STARTECH"
  }

}
