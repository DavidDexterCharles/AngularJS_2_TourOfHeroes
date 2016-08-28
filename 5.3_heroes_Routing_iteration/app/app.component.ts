// ====== ./app/app.component.ts ======


import { Component } from '@angular/core';


// Import router directives
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HeroesComponent }  from './heroes.component';
import { HeroService }  from '../app/hero/hero.service';

@Component({
  selector: 'my-app',
  templateUrl:'./app/app.component.html',
  styleUrls:['./app/app.component.css'],
  directives: [HeroesComponent,ROUTER_DIRECTIVES],
  providers: [HeroService]


})
export class AppComponent {
    title = 'Tour of Heroes';        
}