import { Component, Output, Input, EventEmitter  } from '@angular/core';
import { IconssectionComponent } from "./iconssection/iconssection.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [IconssectionComponent,CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  constructor(){
    this.toggle = false
  }
  @Input() toggle:boolean;
  @Output() closeMenu: EventEmitter<boolean> = new EventEmitter();  
}
