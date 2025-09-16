import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from './search-form/search-form.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { Article, ArticleService } from '../../../services/article-service.service';
import { catchError, of, Observable } from 'rxjs';

@Component({
  selector: 'app-main-window',
  standalone: true,
  imports: [CommonModule, SearchFormComponent, ArticleListComponent],
  templateUrl: './main-window.component.html',
  styleUrl: './main-window.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainWindowComponent {
  articles$!: Observable<Article[]>;

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articles$ = this.articleService.getArticles().pipe(
      catchError(() => of([] as Article[]))
    );
  }
}
