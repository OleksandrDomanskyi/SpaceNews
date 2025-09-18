import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/homepage/homepage.component').then(m => m.Homepage)
  },
  {
    path: 'article/:id',
    loadComponent: () =>
      import('./pages/article-page/article-page.component').then(m => m.ArticlePage)
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/error-page/error-page.component').then(m => m.ErrorPage)
  }
];
