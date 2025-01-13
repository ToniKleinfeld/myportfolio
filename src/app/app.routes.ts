import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { ImpressumComponent } from './main/impressum/impressum.component';

export const routes: Routes = [
    {
      path: '',
      component: MainComponent,
      children: [
        {
          path: 'port',
          component: PortfolioComponent
        },
        // {
        //   path: 'datenschutz',
        //   component: DatenschutzComponent
        // },
        {
          path: '',
          component: ImpressumComponent
        }
      ]
    }
  ];
