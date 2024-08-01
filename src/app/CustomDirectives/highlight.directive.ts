import { Directive, ElementRef, Host, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {

  }

  @HostListener('mouseenter')
  OnMouseEnter() {
    //this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'red');
    this.renderer.addClass(this.element.nativeElement, 'highlight-product');
  }

  @HostListener('mouseout')
  OnMouseOut() {
    //this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'white');
    this.renderer.removeClass(this.element.nativeElement, 'highlight-product');
  }

}
