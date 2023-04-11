import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Tutorial'
 // Parent data for child -1 component
  value = "This is parent Data";
  
  data ={
    name:"Sachin",
    channel:"STARTECH"
  }
   // Parent data for child -2 component
  channelName = '';
  courseName = ''
  formParent(data:any){
    this.channelName = data.name;
    this.courseName = data.course;
    console.info(data);
  }
 
}
