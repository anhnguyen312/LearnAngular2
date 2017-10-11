// Keep the Input import for now, you'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from './hero.service';
import { MyHero } from './MyHero';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit  {
    constructor(
      private heroService: HeroService,
      private route: ActivatedRoute,
      private location: Location,
  ){}
  @Input() hero : MyHero;

  ngOnInit() : void{
    this.route.paramMap
    .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
    .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }

}