import { Injectable } from '@angular/core';
import {HEROES} from './mock-heroes';
import {MyHero} from './MyHero';

@Injectable()
export class HeroService {
    getHeroes(): Promise<MyHero[]> {
        return new Promise(result => {
            setTimeout(() => result(HEROES), 1000)
        });
    }

    getHero(id: number): Promise<MyHero> {
        return new Promise(result => result(HEROES.find(hero => hero.id == id)));
    }
}