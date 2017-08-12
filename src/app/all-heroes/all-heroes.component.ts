import { Component, OnInit } from '@angular/core';
import { Hero } from './../models/hero';
import { HeroService } from './../services/hero.service';
import { MultiTermPipe } from './../pipe/multi-term.pipe';

@Component({
  selector: 'app-all-heroes',
  templateUrl: './all-heroes.component.html',
  styleUrls: ['./all-heroes.component.css']
})
export class AllHeroesComponent implements OnInit {
  heroes: Hero[] = [];
  filterString: string;
  
    constructor(private heroService: HeroService) { }
  
    ngOnInit() {
      this.heroService.getHeroes().then((heroes) => {
        this.heroes = heroes;
      });
    }
  
    search(term: string): void {
      this.filterString = term;
    }
}
