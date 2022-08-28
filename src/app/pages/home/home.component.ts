import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message = '';

  constructor() { }

  ngOnInit(): void {
    
  }
  

  setMessage(value:string){
    this.message = value;
  }

}
