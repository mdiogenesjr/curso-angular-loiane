import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highligh]'
})
export class HighlightDirective {

  constructor() { }

  ngOnInit(){
    this.background = this.defaultColor;
  }

  @Input() defaultColor: string = "white";
  @Input() hightlightColor: string = "yellow";

  @HostListener('mouseenter') onMouseOver(){
      this.background = this.hightlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
      this.background = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') background:string;


}
