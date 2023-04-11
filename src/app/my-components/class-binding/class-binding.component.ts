import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.scss']
})
export class ClassBindingComponent {
  success = "success";
  error = "danger";
  underline = "underline";
  bold = "bold";

  textColor ="green";
  multiSelection ={
    color:"red",
    textDecoration: "underline",
    fontWeight : "bold"
  }

  hasError = true;
  multiclass = ['success','underline','bold']
  conditionMulticlass ={
    "success" : this.hasError,
    "error":this.hasError
  }
}
