import { Component } from '@angular/core';

@Component({
  selector: 'app-click-function-event',
  templateUrl: './click-function-event.component.html',
  styleUrls: ['./click-function-event.component.scss']
})
export class ClickFunctionEventComponent {
  YtName ="Sachin from STARTECH"
  getYTChannel(){
    alert('STAR TECH')
  }
  getYTChannel1(){
    alert(this.YtName)
  }
  getYTChannel2(name:any){
    alert(name)
  }
}
