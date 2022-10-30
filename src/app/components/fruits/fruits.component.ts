import { Component, ElementRef, OnDestroy, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { FruitdataService } from 'src/app/services/fruitdata.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit, OnDestroy {
  fruitList;
  fruitSubscription;
  @ViewChildren('FruitList') fruitListElms:(QueryList<ElementRef>|undefined);

  constructor(private fruitData:FruitdataService) {
    this.fruitList = this.fruitData.fruits;
    this.fruitSubscription = this.fruitData.fruitsUpdated.subscribe(()=>{
      this.fruitList = this.fruitData.fruits;
    })
   }
  ngOnDestroy(): void {
    if(this.fruitSubscription){
      this.fruitSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
  }
  

}
