import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-custom-routing',
  templateUrl: './custom-routing.component.html',
  styleUrls: ['./custom-routing.component.scss']
})
export class CustomRoutingComponent implements OnInit{
  
  product ='';
  
  constructor(private route:ActivatedRoute){}
 
  ngOnInit(): void {
    this.product = this.route.snapshot.params['product']
  }
}
