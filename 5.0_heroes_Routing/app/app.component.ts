//app.component.ts

import { Component } from '@angular/core';

import { HeroesComponent }  from './heroes.component';
import { HeroService }  from '../app/hero/hero.service';

@Component({
  selector: 'my-app',
  templateUrl:'./app/app.component.html',
  directives: [HeroesComponent],
  providers: [HeroService]


})
export class AppComponent {
    title = 'Tour of Heroes';        
}