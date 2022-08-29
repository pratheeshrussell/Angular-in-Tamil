import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnInit, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInputvalidate]'
})
export class InputvalidateDirective  {
  @Input() borderColor:string = 'red';
  @Input() borderNormalColor:string = 'black';
  @Output() onError:EventEmitter<boolean> = new EventEmitter();

  @HostBinding('style.border') styleBorderBinding = '';

  constructor(private elem:ElementRef,private renderer:Renderer2) { 
    //console.log('directive added');
  }

  @HostListener('change',['$event'])
  @HostListener('input',['$event']) 
  handleInput(e:any){
    //console.log(e);
    this.validate();
  }
  
  validate(){
    if(this.elem){
      let nativeElem = this.elem.nativeElement as HTMLInputElement;
      if(nativeElem.value === ''){
        // display border color red
        // nativeElem.style.border ='5px solid red' // DONOT USE
        //this.renderer.setStyle(nativeElem, 'border',`3px solid ${this.borderColor}`);
        this.styleBorderBinding = `3px solid ${this.borderColor}`;
        this.emitEvent(true);
      } else {
        // display border color black
        //this.renderer.setStyle(nativeElem, 'border',`1px solid ${this.borderNormalColor}`);
        this.styleBorderBinding = `1px solid ${this.borderNormalColor}`;
        this.emitEvent(false);
      }
    }
  }

  emitEvent(status:boolean){
    this.onError.emit(status);
  }

}
