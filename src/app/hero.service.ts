import { Injectable } from '@angular/core';
import { Hero, HEROES } from './hero';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }

}
