import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-big-pic-greet',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './big-pic-greet.component.html',
  styleUrl: './big-pic-greet.component.scss'
})
export class BigPicGreetComponent implements OnInit{

  typeAnimationh1:boolean = false;
  tpyeAnimationh3:boolean = false;
  hideh3:boolean = true;
  arrow:boolean = true;

  ngOnInit(){
    this.playAnimation(3600);
  }

  playAnimation(time:number){
    this.typeAnimationh1 = true;    

    setTimeout(() => {
      this.typeAnimationh1 = false;
      this.hideh3 = false;
      this.tpyeAnimationh3 = true;
      setTimeout(() => {
        this.tpyeAnimationh3 = false;
        setTimeout(() => {
          this.arrow = false;
        }, 100);
      }, time);
    }, time);
  }
}
