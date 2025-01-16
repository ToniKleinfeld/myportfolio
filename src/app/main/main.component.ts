import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { HorizonalscrollDirective } from '../directives/horizonalscroll.directive';
import { SendfeedbackComponent } from "./sendfeedback/sendfeedback.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet, HorizonalscrollDirective, SendfeedbackComponent,SendfeedbackComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
