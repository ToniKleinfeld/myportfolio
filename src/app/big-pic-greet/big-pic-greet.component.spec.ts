import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigPicGreetComponent } from './big-pic-greet.component';

describe('BigPicGreetComponent', () => {
  let component: BigPicGreetComponent;
  let fixture: ComponentFixture<BigPicGreetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigPicGreetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigPicGreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
