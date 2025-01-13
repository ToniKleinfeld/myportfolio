import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { ImpressumComponent } from './main/impressum/impressum.component';
import { DatenschutzComponent } from './main/datenschutz/datenschutz.component';

export const routes: Routes = [
    {
      path: '',
      component: MainComponent,
      children: [
        {
          path: '',
          component: PortfolioComponent
        },
        {
          path: 'privacy',
          component: DatenschutzComponent
        },
        {
          path: 'impressum',
          component: ImpressumComponent
        }
      ]
    }
  ];
