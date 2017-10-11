import { Component } from '@angular/core';
import { MyHero } from './MyHero';
import { HEROES } from './mock-heroes';
import {HeroService} from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./app.component.css'],
  
  
providers: [HeroService]

})

export class HeroComponent implements OnInit {

  title : string ;
	listHero: MyHero[];
  selectedHero: MyHero;
  
  constructor(private heroService: HeroService, private router: Router,){
	  this.title = 'Tour of Heros';
  }
  onSelect(hero: MyHero): void {
	  this.selectedHero = hero;
	}
	
	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.listHero = heroes);
	}
	
	ngOnInit(): void {
		this.getHeroes();
  }
  
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}