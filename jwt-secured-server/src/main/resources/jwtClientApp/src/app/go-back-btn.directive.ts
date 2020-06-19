import { Directive, HostListener, ElementRef } from '@angular/core';
import { Location } from '@angular/common';

@Directive({
  selector: '[appGoBackBtn]'
})
export class GoBackBtnDirective {

  constructor(private ele: ElementRef, private location: Location) {
  }

  @HostListener('click')
  onClick() {
    this.location.back();
  };

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
    this.ele.nativeElement.style.width = "auto";
    this.ele.nativeElement.style.height = "auto";
  }

  private highlight(color: string) {
    this.ele.nativeElement.style.backgroundColor = color;
    this.ele.nativeElement.style.width = "75vw";
    this.ele.nativeElement.style.height = "35vh";
  }
}
