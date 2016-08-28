// ====== ./app/app.routes.ts ======
"use strict";
// Imports
var router_1 = require('@angular/router');
var heroes_component_1 = require('./heroes.component');
var dashboard_component_1 = require('./dashboard.component');
var hero_detail_component_1 = require('../app/hero/hero-detail.component');
// Route Configuration
exports.routes = [
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'heroes', component: heroes_component_1.HeroesComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'detail/:id', component: hero_detail_component_1.HeroDetailComponent }
];
// Export routes
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map