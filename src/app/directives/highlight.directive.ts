import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() @HostBinding('style.backgroundColor') bgColorBinding = 'yellow';
  constructor() { }

}
