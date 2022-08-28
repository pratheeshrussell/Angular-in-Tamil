import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-fruit',
  templateUrl: './add-fruit.component.html',
  styleUrls: ['./add-fruit.component.css']
})
export class AddFruitComponent implements OnInit {

  constructor() { }

  @ViewChild('addFruitInput',{static:true}) addFruitInput:(ElementRef | undefined);
  @Output('fruit-added') fruitEmitter:EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  emitNewFruit(){
    if(this.addFruitInput){
      let ipElem = this.addFruitInput.nativeElement;
      this.fruitEmitter.emit(ipElem.value);
      ipElem.value = '';
    }
  }

}
