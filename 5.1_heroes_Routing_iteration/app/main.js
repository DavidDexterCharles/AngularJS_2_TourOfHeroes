"use strict";
// ====== ./app/main.ts ======
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
// Import App Component to be bootstrapped
var app_component_1 = require('./app.component');
// Import configured routes
var app_routes_1 = require('./app.routes');
// Bootstrap app with configured routes
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS
]).catch(function (err) { return console.error(err); });
//What this code does is bootstrap our App while injecting our routes during the bootstrap process. 
//# sourceMappingURL=main.js.map