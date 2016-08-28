// ====== ./app/app.routes.ts ======


// Imports
import { provideRouter, RouterConfig } from '@angular/router';

import { HeroesComponent }  from './heroes.component';



// Route Configuration
export const routes: RouterConfig  = [
  
  {path: 'heroes',component: HeroesComponent}
  
  
];

// Export routes
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];