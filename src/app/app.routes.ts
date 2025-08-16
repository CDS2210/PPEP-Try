import { Routes } from '@angular/router';
import { authGuard } from './core/auth.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'landing' },

  // Public landing page
  {
    path: 'landing',
    loadComponent: () =>
      import('./pages/landing/landing').then(m => m.Landing),
  },

  // Public login
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login').then(m => m.Login),
  },

  // Example of protected stuff (put your real protected routes here)
  // {
  //   path: 'dashboard',
  //   canActivate: [authGuard],
  //   loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard),
  // },

  { path: '**', redirectTo: 'landing' },
];
