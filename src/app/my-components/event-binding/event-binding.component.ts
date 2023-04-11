import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent {
  YTName = '';
  evenethandling(val: any) {
    this.YTName = val;
    console.warn("event-handling :", val);
  }
}
