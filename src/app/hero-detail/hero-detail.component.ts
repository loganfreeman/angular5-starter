import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeroDetailComponent implements OnInit {

  @Input()
  hero: Hero;

  constructor(    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
  }

  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
