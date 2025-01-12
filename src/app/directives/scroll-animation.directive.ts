import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[scrollAnimation]',
  standalone: true,
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {
  @Input() direction: 'top' | 'bottom' = 'top';
  @Input() threshold = 0.3;
  private observer!: IntersectionObserver;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const element = this.elementRef.nativeElement;
    element.classList.add('scroll-animate');
    element.classList.add(
      this.direction === 'top' ? 'from-top' : 'from-bottom'
    );

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      },
      {
        threshold: this.threshold,
        rootMargin: '-50px 0px',
      }
    );

    this.observer.observe(element);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
