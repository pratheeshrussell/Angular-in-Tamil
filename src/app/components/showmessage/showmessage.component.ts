import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-showmessage',
  templateUrl: './showmessage.component.html',
  styleUrls: ['./showmessage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowmessageComponent implements 
OnInit, OnChanges , DoCheck, 
AfterContentInit, AfterViewInit,
AfterContentChecked,AfterViewChecked,
OnDestroy  {
  @ViewChild('messageitm') messageElement:(ElementRef|undefined);
  @ContentChild('header') headerElement:(ElementRef|undefined);

  @Input() message:string = '';
  constructor() { }
  
  
  
  


  ngOnChanges(changes: SimpleChanges): void {
    console.log('On Change hook ran');
    // if(changes['message'].currentValue == 'secret'){
    //   this.message = '*****'
    // }
  }

  
  
  ngOnInit(): void {
    console.log('On init ran');
    //this.printElements('On init');
  }

  ngDoCheck(): void {
    console.log('Do check ran');
  }


  ngAfterContentInit(): void {
    console.log('After Content init ran');
    //this.printElements('After Content init');
  }
  ngAfterViewInit(): void {
    console.log('After View init ran');
    //this.printElements('After View init');
  }

  ngAfterContentChecked(): void {
    console.log('After Content checked ran');
  }
  ngAfterViewChecked(): void {
    console.log('After View checked ran');
  }

  ngOnDestroy(): void {
    console.log('on destroy ran');
  }


  printElements(hookName:string){
    console.log(`Running ${hookName} Hook`);
    if(this.headerElement){
      console.log('Header element present');
    } else {
      console.log('Header element not present');
    }
    if(this.messageElement){
      console.log('Message element present');
    } else {
      console.log('Message element not present');
    }
    console.log('==================');
  }
  
  
  changeMessage(){
    this.message = "New message";  
  }

}