import { Component, Output, Input, EventEmitter  } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IconssectionComponent } from "./iconssection/iconssection.component";
import { CommonModule } from '@angular/common';
import { ScrolltoService } from '../../../../service/scrollto.service';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [IconssectionComponent,CommonModule, TranslateModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  constructor(private scrollService: ScrolltoService){
    this.toggle = false
  }
  @Input() toggle:boolean;
  @Output() closeMenu: EventEmitter<boolean> = new EventEmitter();

  navigateToSection(sectionId: string): void {
    this.scrollService.scrollToElement(sectionId);
    this.closeMenu.emit(false);
  }

  isDesktop(): boolean {
    return window.innerWidth > 1025;
  }

  navigateToSectionResponsive(mobileSectionId: string) {
    const sectionId = this.isDesktop() ? mobileSectionId + '1' : mobileSectionId;
    this.navigateToSection(sectionId);
  }
}
