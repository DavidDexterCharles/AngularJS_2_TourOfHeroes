// ====== ./app/app.routes.ts ======


// Imports
import { provideRouter, RouterConfig } from '@angular/router';

import { HeroesComponent }  from './heroes.component';
import { DashboardComponent }  from './dashboard.component';
import { HeroDetailComponent }  from '../app/hero/hero-detail.component';

// Route Configuration
export const routes: RouterConfig  = [
  
  {path: 'dashboard',component: DashboardComponent},
  {path: 'heroes',component: HeroesComponent},
  {path: '',redirectTo: '/dashboard',pathMatch: 'full'},
  {path: 'detail/:id',component: HeroDetailComponent}
  
  
];

// Export routes
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];