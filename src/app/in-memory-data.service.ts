import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Blaster Dark'},
      { id: 12, name: 'Dragonic Overlord'},
      { id: 13, name: 'Amaterasu'},
      { id: 14, name: 'Tsukuyomi'},
      { id: 15, name: 'Riviere'},
      { id: 16, name: 'Nightmare Doll Alice'},
      { id: 17, name: 'Crimson Impact, Metatron'},
      { id: 18, name: 'Solidify Celestial, Zerachiel'},
      { id: 19, name: 'Healthful Intendant'}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}