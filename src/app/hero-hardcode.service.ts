import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { MyHero } from './MyHero';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroHardcodeService {
   
   getHeroes(): Promise<MyHero[]> {
        console.log("getHeroes Hardcode method");
        return new Promise<MyHero[]>(result => result(HEROES));
    }

    getHero(id: number): Promise<MyHero> {
        return new Promise<MyHero>(result => result(HEROES.find(hero => hero.id == id)));
    }
}