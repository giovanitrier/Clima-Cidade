import { Card } from './components/card/card';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: 'clima', component: Card },
  {path: '', redirectTo: 'clima', pathMatch: 'full' }
];
