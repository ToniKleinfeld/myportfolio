import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss','./references.mobile.component.scss']
})
export class ReferencesComponent implements AfterViewInit{
  @ViewChildren('scrollElement') scrollElements!: QueryList<ElementRef>;
  activeIndex = 0;

  ngAfterViewInit() {
    setTimeout(() => {
      this.checkVisibleContainer();
    });
  }

  onScroll(event: Event) {
    this.checkVisibleContainer();
  }

  private checkVisibleContainer() {
    const referencewrapper = document.querySelector('.reference-wrapper');
    if (!referencewrapper) return;

    const wrapperRect = referencewrapper.getBoundingClientRect();

    this.scrollElements.forEach((scrollElement, index) => {
      const element = scrollElement.nativeElement;
      const rect = element.getBoundingClientRect();

      if (rect.left >= wrapperRect.left - rect.width / 2 &&
          rect.right <= wrapperRect.right + rect.width / 2) {
        this.activeIndex = index;
      }
    });
  }

  referenceArray = [
    {
      name: "Marcel Menke",
      comment : "references.firstcomment",
      project : "references.buddy",
    },
    {
      name: "Patric K.",
      comment : 'references.secondcomment',
      project : "references.project" 
    },
    {
      name: "Boban Jakov.",
      comment :'references.thirdcomment',
      project : "references.project" 
    }
  ];
}