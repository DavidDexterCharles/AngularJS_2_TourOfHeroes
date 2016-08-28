import { Component, Input, OnInit  } from '@angular/core';
import { Hero } from './hero';
import { ActivatedRoute, Params } from '@angular/router';

import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl:'./app/hero/hero-detail.component.html',
  providers:[HeroService]
  
})
export class HeroDetailComponent implements OnInit {
  
    
  
  @Input()
  hero: Hero;
    
  constructor(private heroService: HeroService,private route: ActivatedRoute) {}
  
  goBack(): void {//A goBack method that navigates backward one step in the browser's history stack.
    window.history.back();
  }
  
    
    
  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getHero(id)
        .then(hero => this.hero = hero);
      });
  }
    
    
}
