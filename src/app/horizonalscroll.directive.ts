import { Directive, HostListener , ElementRef } from '@angular/core';
import { AppComponent } from './app.component';

@Directive({
  selector: '[appHorizonalscroll]',
  standalone: true
})

export class HorizonalscrollDirective {
  constructor(private el: ElementRef, private appComponent: AppComponent) {}

  @HostListener('wheel', ['$event']) onWheel(event: WheelEvent) {
    if (window.innerWidth > 1025) {
      event.preventDefault();
      const scrollAmount = 200;

      let currentScrollLeft = this.appComponent.scrollX();
      console.log(currentScrollLeft)
      
      scroll({
        left: event.deltaY > 0
          ? currentScrollLeft + scrollAmount 
          : currentScrollLeft - scrollAmount, 
        behavior: 'smooth'
      }); 
    }
  }
}
