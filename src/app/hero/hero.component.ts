import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeroComponent implements OnInit {

  title = 'Tour of Heroes';
  hero = 'Windstorm';

  constructor() { }

  ngOnInit() {
  }

}
