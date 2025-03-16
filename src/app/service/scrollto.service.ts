import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrolltoService {
  constructor(private router: Router) {}

  async scrollToElement(elementId: string, path: string = '/') {
    if (this.router.url !== path) {
      await this.router.navigate([path]);
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    const element = document.getElementById(elementId);
    if (element && elementId !== 'contact1' && window.innerWidth > 1025) {
      element.scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
        block: 'nearest',
      });
    } else if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  private sendMailSubject = new BehaviorSubject<boolean>(false);
  sendMail$ = this.sendMailSubject.asObservable();

  sendMailMessage() {
    this.sendMailSubject.next(true);
    setTimeout(() => {
      this.sendMailSubject.next(false);
    }, 3000);
  }
}
