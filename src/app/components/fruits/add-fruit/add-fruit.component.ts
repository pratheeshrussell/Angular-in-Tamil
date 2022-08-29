import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { InputvalidateDirective } from 'src/app/directives/inputvalidate.directive';

@Component({
  selector: 'app-add-fruit',
  templateUrl: './add-fruit.component.html',
  styleUrls: ['./add-fruit.component.css']
})
export class AddFruitComponent implements OnInit {

  constructor() { }
  isError = false;

  @ViewChild('addFruitInput',{static:true}) addFruitInput:(ElementRef | undefined);
  @Output('fruit-added') fruitEmitter:EventEmitter<string> = new EventEmitter<string>();

  @ViewChild(InputvalidateDirective) validateDirective:(InputvalidateDirective|undefined);
  ErrBorderColor = 'red';
  ngOnInit(): void {
  }

  emitNewFruit(){
    if(this.addFruitInput){
      this.validateDirective?.validate();
      let ipElem = this.addFruitInput.nativeElement;
      this.fruitEmitter.emit(ipElem.value);
      ipElem.value = '';
    }
  }

  handleError(status:boolean){
    
      this.isError = status;
    
  }

}
