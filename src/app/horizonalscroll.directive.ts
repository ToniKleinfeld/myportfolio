import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHorizonalscroll]',
  standalone: true
})
export class HorizonalscrollDirective {
  private scrollTimeout: any;
  private lastScrollTime = 0;
  private smoothingFactor = 1; 
  private maxScrollSpeed = 170; 

  constructor(private el: ElementRef) {}

  @HostListener('wheel', ['$event']) 
  onWheel(event: WheelEvent) {
    if (window.innerWidth > 1025) {
      event.preventDefault();
      const currentTime = Date.now();
      const rawScrollAmount = event.deltaY;
      const clampedScrollAmount = this.limitScrollSpeed(rawScrollAmount);
      const smoothScrollAmount = this.calculateSmoothScroll(clampedScrollAmount);
      this.el.nativeElement.scrollLeft += smoothScrollAmount;

      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
      }

      this.scrollTimeout = setTimeout(() => {
        this.scrollTimeout = null;
      }, 100);

      this.lastScrollTime = currentTime;
    }
    
  }

  private limitScrollSpeed(scrollAmount: number): number {
    return Math.sign(scrollAmount) * 
      Math.min(Math.abs(scrollAmount), this.maxScrollSpeed);
  }

  private calculateSmoothScroll(scrollAmount: number): number {
    return scrollAmount * this.smoothingFactor * 4;
  }
}