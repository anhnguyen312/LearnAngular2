import { Component } from '@angular/core';
import { MyHero } from './MyHero';
import { HEROES } from './mock-heroes';
import {HeroService} from './hero.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-heroes',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  template: `
  <h2>My Heroes</h2>
<ul class="aListHero">
  <li *ngFor="let hero of listHero" 
		[class.selected]="hero === selectedHero"
		(click)="onSelect(hero)">
    <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
</ul>

<hero-detail [hero]="selectedHero"></hero-detail>

`,
providers: [HeroService]

})

export class HeroComponent implements OnInit {

  title : string ;
	listHero: MyHero[];
  selectedHero: MyHero;
  
  constructor(private heroService: HeroService){
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
}