import { Directive, HostListener } from '@angular/core';
import { Location } from '@angular/common';

@Directive({
  selector: '[appGoBackBtn]'
})
export class GoBackBtnDirective {

  constructor(private location: Location) { }

  @HostListener('click')
  onClick(){
    this.location.back();
  };

}
