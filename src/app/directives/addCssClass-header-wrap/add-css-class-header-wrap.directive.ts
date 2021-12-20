import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '.header-wrap'
})
export class AddCssClassHeaderWrapDirective {

  @HostBinding('class.custom-header-wrapper') private _addCustomClass = false;

  constructor() {}

  addCustomClass() {
    this._addCustomClass = true;
  }
}

