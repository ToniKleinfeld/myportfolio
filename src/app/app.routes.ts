import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';

export const routes: Routes = [
    {
      path: '',
      component: MainComponent,
      children: [
        {
          path: '',
          component: PortfolioComponent
        },
        // {
        //   path: 'datenschutz',
        //   component: DatenschutzComponent
        // },
        // {
        //   path: 'impressum',
        //   component: ImpressumComponent
        // }
      ]
    }
  ];
