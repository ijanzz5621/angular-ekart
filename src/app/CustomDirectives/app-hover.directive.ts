import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true
})
export class AppHoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostBinding('style.backgroundColor')
  backgroundColor: string = '#28282B';

  @HostBinding('style.border')
  border: string = 'none';

  @HostBinding('style.color')
  textColor: string = '#28282B';

  // Use the host listener for event
  @HostListener('mouseenter')
  OnMouseEnter() {
    this.backgroundColor = 'red';
    this.border = '#28282B 2px dashed';
  }

  // Use the host listener for event
  @HostListener('mouseout')
  OnMouseOut() {
    this.backgroundColor = '#28282B';
    this.border = 'none';
  }
}
