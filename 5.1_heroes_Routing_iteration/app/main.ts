// ====== ./app/main.ts ======
import { bootstrap }    from '@angular/platform-browser-dynamic';

// Import App Component to be bootstrapped
import { AppComponent } from './app.component';

// Import configured routes
import { APP_ROUTER_PROVIDERS } from './app.routes';

// Bootstrap app with configured routes
bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS
]).catch(err => console.error(err));


//What this code does is bootstrap our App while injecting our routes during the bootstrap process.