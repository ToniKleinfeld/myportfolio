import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  public language:string = 'en';

  constructor(private translation: TranslateService) {
    this.translation.setDefaultLang('en');
    this.translation.addLangs(['en', 'de']);
    
   }

   public changeLanguage(changeTo: string) {
    this.language = changeTo;
    this.translation.use(changeTo);
   }
}