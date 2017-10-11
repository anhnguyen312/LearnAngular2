import { Component, OnInit } from '@angular/core';
import { MyHero } from './MyHero';
import { HeroService } from './hero.service';
import { HeroHardcodeService } from './hero-hardcode.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']

})
export class DashboardComponent implements OnInit {
    heroes: MyHero[];

    constructor(
        private heroService: HeroService, 
        //private heroService : HeroHardcodeService
    ) {}
    
    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(result => this.heroes = result.slice(1, 5));
    }
}