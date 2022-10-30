import { EventEmitter, Injectable } from '@angular/core';

var serviceInstance = 0;
@Injectable({
  providedIn: 'root'
})
export class FruitdataService {
  private fruitList=['apple','mango','banana','orange','grapes'];
  private highLighted=-1;
 
  //  use rxjs subjects instead of event emitters
  fruitsUpdated:EventEmitter<void> = new EventEmitter();
  highLightChanged:EventEmitter<number> = new EventEmitter();
  get fruits(){
    return this.fruitList.slice();
  }
  get highLightedElem(){
    return this.highLighted
  }
  constructor() { 
    serviceInstance++;
    console.log('Service created and ID is ',serviceInstance);
  }

  removeAtIndex(n:number){
    this.fruitList.splice(n,1);
    this.fruitsUpdated.emit();
  }

  addFruit(newFruit:string){
    if(newFruit != ''){
      this.fruitList.push(newFruit);
      this.fruitsUpdated.emit();
    }
  }

  changeHighlight(index:number){
    this.highLighted = index;
    this.highLightChanged.emit(index);
  }
}
