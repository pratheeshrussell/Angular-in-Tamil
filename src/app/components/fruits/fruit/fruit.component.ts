import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FruitdataService } from 'src/app/services/fruitdata.service';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit,AfterViewInit{

  //@Input('fruit') fruitName:string='';
  fruitName;
  isHighlight = false;
  @Input('index') fruitIndex:number=-1;

  //@Output() removeFunction:EventEmitter<number> = new EventEmitter();

  constructor(private fruitData:FruitdataService) {
    this.fruitName = '';
    this.fruitData.highLightChanged.subscribe((index)=>{
      this.isHighlight = (index ===this.fruitIndex)
    })

   }
  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
    this.fruitName = this.fruitData.fruits[this.fruitIndex];
    this.isHighlight = (this.fruitData.highLightedElem ===this.fruitIndex)
  }
  

  printFruit(){
    console.log(this.fruitName)
  }

  removeFruit(){
    //this.removeFunction.emit(this.fruitIndex);
    this.fruitData.removeAtIndex(this.fruitIndex);
  }

  highLightElem(){
    this.fruitData.changeHighlight(this.fruitIndex);
  }

}
