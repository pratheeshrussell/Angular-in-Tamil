import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  fruitList=['apple','mango','banana','orange','grapes'];

  @ViewChildren('FruitList') fruitListElms:(QueryList<ElementRef>|undefined);

  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
  }

  removeAtIndex(n:number){
    this.fruitList.splice(n,1);
  }

  addFruit(newFruit:string){
    this.fruitList.push(newFruit);
  }

}
