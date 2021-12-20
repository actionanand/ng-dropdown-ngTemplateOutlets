import { AfterViewInit, Directive, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAddCssClass]'
})
export class AddCssClassDirective implements AfterViewInit {

  @Input('cssSelector') myCssSelector!: string; 
  @Input('cssClass') myCssClass!: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { 
    
  }

  ngAfterViewInit(): void {
    const parentElement = this.elRef.nativeElement.closest(this.myCssSelector);
    this.renderer.addClass(parentElement, this.myCssClass);
  }

}
