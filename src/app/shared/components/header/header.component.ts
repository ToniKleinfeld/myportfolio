import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import { NavComponent } from './nav/nav.component';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, NavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  toggleMenu = false;
  private scrollSubscription: Subscription | null = null;
  private routerSubscription: Subscription | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.scrollSubscription = fromEvent(window, 'scroll').subscribe(() => {
      if (this.toggleMenu) {
        this.toggleMenu = false;
      }
    });

    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        if (this.toggleMenu) {
          this.toggleMenu = false;
        }
      });
  }

  ngOnDestroy() {
    this.scrollSubscription?.unsubscribe();
    this.routerSubscription?.unsubscribe();
  }
}
