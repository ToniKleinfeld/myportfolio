import { Routes,TitleStrategy, RouterStateSnapshot } from '@angular/router';
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
          title:'My Portfolio',
          component: PortfolioComponent
        },
        {
          path: 'privacy',
          title: 'Privacy policy',
          // component: DatenschutzComponent,
          loadComponent: () => import('./main/datenschutz/datenschutz.component').then(c => c.DatenschutzComponent),
        },
        {
          path: 'impressum',
          title: 'Imprint',
          // component: ImpressumComponent,
          loadComponent: () => import('./main/impressum/impressum.component').then(c => c.ImpressumComponent),
        }
      ]
    }
  ];
