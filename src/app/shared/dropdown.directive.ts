import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
// Works only if dropdown menu is next sibling element to dropdown toggle attach to dropdown toggle
export class DropdownDirective {
  private isOpen = false;

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  @HostListener('click')
  onClick() {
    const dropdown = this.elementRef.nativeElement.nextElementSibling;
    if (!this.isOpen) {
      this.renderer.addClass(dropdown, 'show');
    } else {
      this.renderer.removeClass(dropdown, 'show');
    }
    this.isOpen = !this.isOpen;
  }
}
// Bootstrap 3
// export class DropdownDirective {
//
//   @HostBinding('class.open') isOpen = true;
//
//   @HostListener('click') toggleOpen() {
//     this.isOpen = !this.isOpen;
//   }
//
//   constructor(private elementRef: ElementRef, private renderer: Renderer2) {
//   }
//
// }
