import { Component, ContentChild, ContentChildren, ElementRef, Input, OnInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  // To reference a single element
  @ContentChild('fruitItem',{static:true}) fruit: (ElementRef | undefined)

  // To reference a group of elements
  @ContentChildren('fruitItem',{descendants:true}) fruits: (QueryList<ElementRef>|undefined)

  @Input() isHighlight = false;

  constructor() {
    setTimeout(()=>{
      if(this.fruit){
        this.fruit.nativeElement.style.color = 'green';
      } else {
        console.log('element not found');
      }
      
      // Using ContentChildren
      // if(this.fruits && this.fruits.length > 0){
      //   this.fruits.toArray()[0].nativeElement.style.color = 'red';
      // }else{
      //   console.log('element not found');
      // }
    },1000);
   }

  ngOnInit(): void {
  }

}
