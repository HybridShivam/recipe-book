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


  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elementRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    const dropdown = this.elementRef.nativeElement.nextElementSibling;
      if (this.isOpen) {
        this.renderer.addClass(dropdown, 'show');
      } else {
        this.renderer.removeClass(dropdown, 'show');
      }
  }


}
//From the internet
// @HostListener('click')
// onClick() {
//   const dropdown = this.elementRef.nativeElement.nextElementSibling;
//   if (!this.isOpen) {
//     this.renderer.addClass(dropdown, 'show');
//   } else {
//     this.renderer.removeClass(dropdown, 'show');
//   }
//   this.isOpen = !this.isOpen;
//   if(this.isOpen){
//     setTimeout(()=>{
//       this.isOpen=false;
//       this.renderer.removeClass(dropdown,'show');
//       },10000);
//   }
// }

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

// Max's new
// import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';
//
// @Directive({
//   selector: '[appDropdown]'
// })
// export class DropdownDirective {
//   @HostBinding('class.open') isOpen = false;
//   @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
//     this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
//   }
//   constructor(private elRef: ElementRef) {}
// }

