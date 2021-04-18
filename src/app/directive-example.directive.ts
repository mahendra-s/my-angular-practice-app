import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectiveExample]'
})
export class DirectiveExampleDirective {

  constructor(Element: ElementRef) {
    Element.nativeElement.innerText = 'This text is set by Directive Example';
  }

}
