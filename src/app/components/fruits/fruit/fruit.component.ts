import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {

  @Input('fruit') fruitName:string='';
  @Input('index') fruitIndex:number=-1;

  @Output() removeFunction:EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  printFruit(){
    console.log(this.fruitName)
  }

  removeFruit(){
    this.removeFunction.emit(this.fruitIndex);
  }

}
