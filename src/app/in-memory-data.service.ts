import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MyHero } from './MyHero';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    //let  heroes : MyHero[] = [
      const heroes: MyHero[] =[
      { id: 0, name: 'Abadon', style: 0 },
      { id: 1, name: 'Storm Spirit', style: 2 },
      { id: 2, name: 'Invoker', style: 2 },
      { id: 3, name: 'Blood Seeker', style: 1 },
      { id: 4, name: 'Earth Shaker', style: 0 },
      { id: 5, name: 'Lina', style: 2 },
      { id: 6, name: 'Dragon Knight', style: 0 },
      { id: 7, name: 'Slandar', style: 0 },
      { id: 8, name: 'Centaur Warior', style: 0 },
      { id: 9, name: 'Troll', style: 1 },
      { id: 10, name: 'Phantom Assassin', style: 1 },
      { id: 11, name: 'Faceless Void', style: 1 },
      { id: 12, name: 'Alchemist', style: 0 },
      { id: 13, name: 'Rylai', style: 2 },
      { id: 14, name: 'Sand King', style: 0 },
      { id: 15, name: 'Shadow Demon', style: 2 },
      { id: 16, name: 'Legion Commander', style: 0 },
      { id: 17, name: 'Ember Spirit', style: 1 },
      { id: 18, name: 'Panda', style: 0 }
    ];
    return { heroes };
  }
}