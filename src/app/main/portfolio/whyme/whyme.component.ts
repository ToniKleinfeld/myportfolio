import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { WhymeiconsComponent } from './whymeicons/whymeicons.component';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';
import { ScrolltoService } from '../../../service/scrollto.service';

@Component({
  selector: 'app-whyme',
  standalone: true,
  imports: [TranslateModule, WhymeiconsComponent, ScrollAnimationDirective],
  templateUrl: './whyme.component.html',
  styleUrl: './whyme.component.scss',
})
export class WhymeComponent {
  constructor(private scrollService: ScrolltoService) {}

  navigateToSection(sectionId: string): void {
    this.scrollService.scrollToElement(sectionId);
  }

  isDesktop(): boolean {
    return window.innerWidth > 1025;
  }

  navigateToSectionResponsive(mobileSectionId: string) {
    const sectionId = this.isDesktop()
      ? mobileSectionId + '1'
      : mobileSectionId;
    this.navigateToSection(sectionId);
  }

  scrollToElement(event: Event, elementId: string) {
    event.preventDefault();

    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    }
  }
}
