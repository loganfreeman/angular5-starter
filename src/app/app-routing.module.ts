import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { FibonacciNumberComponent } from './fibonacci-number/fibonacci-number.component'
import { HeroComponent } from './hero/hero.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'

const routes: Routes = [
  { path: 'courses', component: CoursesListComponent },
  { path: 'fibonacci', component: FibonacciNumberComponent},
  { path: 'heros', component: HeroComponent},
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
