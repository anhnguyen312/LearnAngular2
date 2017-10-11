import {Component, OnInit} from'@angular/core';
import { MyHero } from './MyHero';
import { HeroService } from './hero.service';

@Component({
    selector : 'my-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    heroes: MyHero[];

    constructor(private heroService : HeroService){

    }
    ngOnInit():void{
        this.heroService.getHeroes()
            .then(result => this.heroes = result.slice(1, 5));
    }
}