import { Component, OnInit  } from '@angular/core';
import { Hero } from '../app/hero/hero';
import { HeroDetailComponent } from '../app/hero/hero-detail.component';

import { HeroService } from '../app/hero/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl:'./app/heroes.component.html',
  styleUrls:['./app/heroes.component.css'],
  directives: [HeroDetailComponent],
  providers: [HeroService]
  
})
export class HeroesComponent implements OnInit{
  
  // title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  constructor(private heroService: HeroService) { }
  
  ngOnInit(): void {
      this.getHeroes();
     // this.getHeroesSlowly();// simulates a slow connection, Like getHeroes, it also returns a Promise. But this Promise waits 2 seconds before resolving the Promise with mock heroes.
  }
  
  getHeroes(): void {
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  getHeroesSlowly(): void {
      this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
  
}

