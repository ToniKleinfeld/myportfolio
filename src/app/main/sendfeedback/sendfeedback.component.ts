import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrolltoService } from '../../service/scrollto.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sendfeedback',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './sendfeedback.component.html',
  styleUrl: './sendfeedback.component.scss',
})
export class SendfeedbackComponent implements OnDestroy {
  sendMail: boolean = false;
  private subscription: Subscription;

  constructor(private scrollService: ScrolltoService) {
    this.subscription = this.scrollService.sendMail$.subscribe((value) => {
      this.sendMail = value;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
