import { Component } from '@angular/core';
import { MyHero } from './MyHero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  providers: [HeroService]

})

export class HeroComponent implements OnInit {

  title: string;
  listHero: MyHero[];
  selectedHero: MyHero;

  constructor(private heroService: HeroService, private router: Router) {
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

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.create(name).then(
      hero => {
        this.listHero.push(hero);
        this.selectedHero = null;
      })
  }

  delete(hero : MyHero) : void{
    this.heroService.delete(hero.id)
    .then(
      () => {
        this.listHero = this.listHero.filter(hr => hr.id != hero.id);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      }
    )
  }
}