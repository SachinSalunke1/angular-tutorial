import { Component } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.scss']
})
export class DisplayUserComponent {
 
 allData:any =[];
 constructor(private api:UserDataService){
  this.allData = this.api.getAllData();
 }
}
