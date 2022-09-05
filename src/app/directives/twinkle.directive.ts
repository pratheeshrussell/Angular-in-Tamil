import { AfterViewInit, Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTwinkle]'
})
export class TwinkleDirective implements AfterViewInit,OnDestroy {
  @Input('appTwinkleWait') wait = 1000;
  @Input('appTwinkleReplace') insteadof: (TemplateRef<any> |undefined) ;

  constructor(private viewRef:ViewContainerRef,private templateRef:TemplateRef<any>) { }
  ngOnDestroy(): void {
    clearInterval(this.timer);
    clearInterval(this.countdownTimer);
  }
  
  twinkleContext = {
    $implicit:0,
    wait:0,
    counter:0
  }


  timer:any;
  countdownTimer:any;
  defaultTemplateShown = true;
  ngAfterViewInit(): void {
    this.setContext();
    this.viewRef.createEmbeddedView(this.templateRef, this.twinkleContext);
    this.setCountDownTimer();
    this.timer = setInterval(()=>{
      this.viewRef.clear();
      if(this.defaultTemplateShown){
        this.viewRef.createEmbeddedView(this.insteadof!,this.twinkleContext);
      } else {
        this.viewRef.createEmbeddedView(this.templateRef,this.twinkleContext);
      }
      this.defaultTemplateShown = !this.defaultTemplateShown;
      this.setCountDownTimer();
    },this.wait);
  }

  setCountDownTimer(){
    this.twinkleContext.counter =this.wait/1000;
    if(this.countdownTimer){ clearInterval(this.countdownTimer);}
    this.countdownTimer = setInterval(()=>{
      if(this.twinkleContext.counter > 0){
        this.twinkleContext.counter -= 1;
      } else {
        clearInterval(this.countdownTimer);
      }
    },1000);
  }

  setContext(){
    this.twinkleContext.wait = this.wait/1000;
    this.twinkleContext.$implicit = this.wait/1000;
  }

}
