import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhymeiconsComponent } from './whymeicons.component';

describe('WhymeiconsComponent', () => {
  let component: WhymeiconsComponent;
  let fixture: ComponentFixture<WhymeiconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhymeiconsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhymeiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
