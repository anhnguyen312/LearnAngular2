import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { MyHero } from './MyHero';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class HeroService {
    constructor(private http: Http) { }
    private heroesUrl = 'api/heroes';

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    getHeroes(): Promise<MyHero[]> {
        console.log("getHeroes method");
        return this.http.get(this.heroesUrl)
            .do(data => console.log(data))
            .toPromise()
            .then(response => response.json() as MyHero[])
            .catch(this.handleError);
    }

    getHero(id: number): Promise<MyHero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as MyHero)
            .catch(this.handleError);
    }

    private headers = new Headers({ 'Content-Type': 'application/json' });

    update(hero: MyHero): Promise<MyHero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }
    create(name: string): Promise<MyHero> {
        return this.http
          .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
          .toPromise()
          .then(res => res.json() as MyHero)
          .catch(this.handleError);
      }

      delete(id : number) : Promise<void>{
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, {headers : this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
      }
}