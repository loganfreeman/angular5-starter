import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { FibonacciNumberComponent } from './fibonacci-number/fibonacci-number.component'
import { HeroComponent } from './hero/hero.component'

const routes: Routes = [
  { path: 'courses', component: CoursesListComponent },
  { path: 'fibonacci', component: FibonacciNumberComponent},
  { path: 'heros', component: HeroComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
