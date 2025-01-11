import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHorizonalscroll]',
  standalone: true,
})
export class HorizonalscrollDirective {
  private scrollFactor: number = 8;
  private lastScrolltime: number = 0;
  private scrolltimeout: number = 200;

  constructor(private el: ElementRef) {}

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    if (window.innerWidth > 1025) {
      event.preventDefault();
      const timeStamp = Date.now();
      if (timeStamp - this.lastScrolltime > this.scrolltimeout) {
        this.lastScrolltime = timeStamp;

        const scrollLeft = event.deltaY * this.scrollFactor;

        this.el.nativeElement.scrollLeft += scrollLeft;
      }
    }
  }
}
