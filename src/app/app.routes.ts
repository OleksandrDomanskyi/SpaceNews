import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage.component';
import { ArticlePage } from './pages/article-page/article-page.component';
import { ErrorPage } from './pages/error-page/error-page.component';

export const routes: Routes = [
  {
    path: '',
    component: Homepage
  },
  {
    path: 'article/:id',
    component: ArticlePage
  },
  {
    path: '**',
    component: ErrorPage
  }
];
