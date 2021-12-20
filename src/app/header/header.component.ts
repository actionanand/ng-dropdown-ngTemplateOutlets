import { Component, ElementRef, Host, OnInit } from '@angular/core';
import { AddCssClassHeaderWrapDirective } from '../directives/addCssClass-header-wrap/add-css-class-header-wrap.directive';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor( @Host() private customClassDirective: AddCssClassHeaderWrapDirective ) { }

  ngOnInit(): void {
    // adding custom class to parent
    this.customClassDirective.addCustomClass();
  }

}
