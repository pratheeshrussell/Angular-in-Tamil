import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { InputvalidateDirective } from 'src/app/directives/inputvalidate.directive';
import { FruitdataService } from 'src/app/services/fruitdata.service';

@Component({
  selector: 'app-add-fruit',
  templateUrl: './add-fruit.component.html',
  styleUrls: ['./add-fruit.component.css']
})
export class AddFruitComponent implements OnInit {

  constructor(private fruitData:FruitdataService) { }
  
  isError = false;

  @ViewChild('addFruitInput',{static:true}) addFruitInput:(ElementRef | undefined);
  // @Output('fruit-added') fruitEmitter:EventEmitter<string> = new EventEmitter<string>();

  @ViewChild(InputvalidateDirective) validateDirective:(InputvalidateDirective|undefined);
  ErrBorderColor = 'red';
  ngOnInit(): void {
  }

  emitNewFruit(){
    if(this.addFruitInput){
      this.validateDirective?.validate();
      let ipElem = this.addFruitInput.nativeElement;
      this.fruitData.addFruit(ipElem.value);
      ipElem.value = '';
    }
  }

  handleError(status:boolean){
    
      this.isError = status;
    
  }

}
