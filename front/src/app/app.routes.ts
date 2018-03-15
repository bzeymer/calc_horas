import { Route } from '@angular/router';

import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { PontoComponent } from './ponto/ponto.component';

export const APP_ROUTES: Route[] = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'ponto',
        component: PontoComponent
    },
    {
        path: 'error/:error',
        component: ErrorPageComponent
    },
    {
      path: '**',
      redirectTo: '/error/not-found'
    }
];
