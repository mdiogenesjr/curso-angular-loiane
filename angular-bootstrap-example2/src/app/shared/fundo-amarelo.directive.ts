import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef : ElementRef,
              private _render : Renderer) { 
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    this._render.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
      );
  }

}
