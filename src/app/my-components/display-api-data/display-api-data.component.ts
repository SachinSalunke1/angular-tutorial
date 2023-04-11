import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-display-api-data',
  templateUrl: './display-api-data.component.html',
  styleUrls: ['./display-api-data.component.scss']
})
export class DisplayApiDataComponent {
  constructor(private api:ApiService){
    this.getData();
  }

  getData(){
    this.api.getNiftyData().subscribe((data:any)=>{
      console.log(data)
    })
  }

}
