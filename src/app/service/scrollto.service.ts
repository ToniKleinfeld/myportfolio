import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrolltoService {

  constructor(private router: Router) {}

  async scrollToElement(elementId: string, path: string = '/') {

    if (this.router.url !== path) {
      await this.router.navigate([path]);
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
