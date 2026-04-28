import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' },
  { path: 'repositorios', redirectTo: '/usuarios', pathMatch: 'full' },
];
