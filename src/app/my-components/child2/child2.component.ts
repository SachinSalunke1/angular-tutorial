import { Component ,Output,EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {
@Output() formParent:EventEmitter<any> = new EventEmitter();

ngOnInit(): void {
  this.formParent.emit("Welcome to STARTECH..!")
  this.formParent.emit({name:"Sachin",course:"STARTECH"})
}
syncData(){
  let data ={
    name :"Trisha",
    course:"Flying Bird"
  }
  this.formParent.emit(data);
}
}
