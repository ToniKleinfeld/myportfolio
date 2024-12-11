import { Component } from '@angular/core';
import { IconssectionComponent } from "./iconssection/iconssection.component";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [IconssectionComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

}
