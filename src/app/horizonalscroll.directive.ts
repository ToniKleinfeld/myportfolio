import { Directive, HostListener , ElementRef } from '@angular/core';

@Directive({
  selector: '[appHorizonalscroll]',
  standalone: true
})

export class HorizonalscrollDirective {
  constructor(private el: ElementRef) {}

  @HostListener('wheel', ['$event']) 
  onWheel(event: WheelEvent) {
    if (window.innerWidth > 1025) {
      event.preventDefault();
      const scrollAmount = event.deltaY;      
      this.el.nativeElement.scrollLeft += scrollAmount*4;
    }
  }
}