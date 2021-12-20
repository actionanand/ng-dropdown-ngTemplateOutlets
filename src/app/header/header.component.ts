import { AfterViewInit, Component, ElementRef, Host, OnInit, Renderer2 } from '@angular/core';
import { AddCssClassHeaderWrapDirective } from '../directives/addCssClass-header-wrap/add-css-class-header-wrap.directive';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(@Host() private customClassDirective: AddCssClassHeaderWrapDirective, private elRef: ElementRef,
  private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const parentElement = this.elRef.nativeElement.closest('.header-wrap');
      this.renderer.addClass(parentElement, 'cool');
      console.log(parentElement)
    }, 3000);
  }

  ngOnInit(): void {
    // adding custom class to parent
    this.customClassDirective.addCustomClass();
  }

}
