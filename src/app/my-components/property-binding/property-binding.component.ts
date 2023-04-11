import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent {
  YTName = '';

  getValue(val: any) {
    this.YTName = val;
    console.warn(val)
  }

  number1 = 0;
  number2 = 0;
  sum = 0;
  calc(num1: any, num2: any) {
    this.sum = parseFloat(num1) + parseFloat(num2)
  }
}
