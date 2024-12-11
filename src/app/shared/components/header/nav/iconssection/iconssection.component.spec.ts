import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconssectionComponent } from './iconssection.component';

describe('IconssectionComponent', () => {
  let component: IconssectionComponent;
  let fixture: ComponentFixture<IconssectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconssectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconssectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
