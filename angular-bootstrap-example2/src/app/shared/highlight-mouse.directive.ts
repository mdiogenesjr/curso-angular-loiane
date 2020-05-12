import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement, 
      'background-color', 'yellow');*/
      this.background = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
     /*this._renderer.setElementStyle(
      this._elementRef.nativeElement, 
      'background-color', 'white');*/
      this.background = 'white';
  }

  //@HostBinding('style.backgroundColor') background:string;
  private background:string;

  @HostBinding('style.backgroundColor') get setColor(){
    return this.background;
  }

  constructor(
    /*private _elementRef: ElementRef,
    private _renderer: Renderer*/
  ) { }

}
