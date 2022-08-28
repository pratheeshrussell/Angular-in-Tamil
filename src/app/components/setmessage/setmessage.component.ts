import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-setmessage',
  templateUrl: './setmessage.component.html',
  styleUrls: ['./setmessage.component.css']
})
export class SetmessageComponent implements OnInit {

  @Output('onMessage') messageEmitter:EventEmitter<string> = new EventEmitter();
  @ViewChild('nameIp') nameInput:(ElementRef|undefined);
  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
  }

  setMessage(){
    if(this.nameInput){
      let ipVal = (this.nameInput.nativeElement as HTMLInputElement).value;
      if(ipVal != ''){
        this.emitMessage(ipVal);
      }
    }
  }

  resetMessage(){
    if(this.nameInput){
      this.renderer.setValue(this.nameInput.nativeElement,'');
    }
    this.emitMessage('');
  }
  emitMessage(value:string){
    this.messageEmitter.emit(value);
  }
}
