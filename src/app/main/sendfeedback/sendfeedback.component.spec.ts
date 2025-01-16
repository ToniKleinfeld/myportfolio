import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendfeedbackComponent } from './sendfeedback.component';

describe('SendfeedbackComponent', () => {
  let component: SendfeedbackComponent;
  let fixture: ComponentFixture<SendfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendfeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
