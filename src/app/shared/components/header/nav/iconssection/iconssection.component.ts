import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-iconssection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './iconssection.component.html',
  styleUrl: './iconssection.component.scss'
})
export class IconssectionComponent {
  translate:boolean = true;

  changeLanguage(){
    if (this.translate == true) {
      this.translate = false;
    } else {
      this.translate = true;
    }
  }
}
