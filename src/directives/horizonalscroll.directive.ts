import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHorizonalscroll]',
  standalone: true
})
export class HorizonalscrollDirective {
  private smoothingFactor = 2; 
  private maxScrollSpeed = 400; 

  constructor(private el: ElementRef) {}

  @HostListener('wheel', ['$event']) 

  onWheel(event: WheelEvent) {
    console.log(event)
    if (window.innerWidth > 1025) {
      event.preventDefault();
      const rawScrollAmount = event.deltaY;
      const clampedScrollAmount = this.limitScrollSpeed(rawScrollAmount);
      const smoothScrollAmount = this.calculateSmoothScroll(clampedScrollAmount);
      this.el.nativeElement.scrollLeft += smoothScrollAmount;

      console.log(clampedScrollAmount,rawScrollAmount)
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