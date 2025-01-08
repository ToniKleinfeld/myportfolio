import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HorizonalscrollDirective } from './horizonalscroll.directive';
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { BigPicGreetComponent } from "./big-pic-greet/big-pic-greet.component";
import { WhymeComponent } from "./whyme/whyme.component";
import { SkillsetComponent } from "./skillset/skillset.component";
import { MyworkComponent } from "./mywork/mywork.component";
import { ReferencesComponent } from "./references/references.component";
import { ContactmeComponent } from "./contactme/contactme.component";
import * as AOS from 'aos';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, BigPicGreetComponent, WhymeComponent, HorizonalscrollDirective, SkillsetComponent, MyworkComponent, ReferencesComponent, ContactmeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  
  constructor(){
    
  }

  ngOnInit(){
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }
 
  title = 'myportfolio'; 
}