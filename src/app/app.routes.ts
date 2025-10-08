import { Routes } from '@angular/router';
import { LandingComponent } from './feature/home/landing/landing.component';
import { ShoppComponent } from './feature/shopp/shopp.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'loja', component: ShoppComponent}
];
