import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  public language:string = 'en';

  constructor(private translation: TranslateService) {
    this.checkLocal();
    this.translation.setDefaultLang(this.language);
    this.translation.addLangs(['en', 'de']);
   }

   checkLocal(){
    const local = localStorage.getItem('currentLang');
    this.language = (local === 'de') ? 'de' : 'en';
  }

   public changeLanguage(changeTo: string) {
    this.language = changeTo;
    this.translation.use(changeTo);
   }
}