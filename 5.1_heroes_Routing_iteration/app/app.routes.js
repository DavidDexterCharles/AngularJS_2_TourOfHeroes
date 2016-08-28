// ====== ./app/app.routes.ts ======
"use strict";
// Imports
var router_1 = require('@angular/router');
var heroes_component_1 = require('./heroes.component');
// Route Configuration
exports.routes = [
    { path: 'heroes', component: heroes_component_1.HeroesComponent }
];
// Export routes
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map