import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // isOpen: boolean = false;
  // @HostListener('click') toggle(){
  //   if (this.isOpen === true){
  //     this.elementRef.nativeElement.class('open');
  //   }else {
  //     this.elementRef.nativeElement.class('closed');
  //   }
  //   this.isOpen = !this.isOpen;
  // }
  // constructor(private elementRef: ElementRef) {
  //   elementRef.nativeElement.class('closed');
  // }
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
