import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, BehaviorSubject, combineLatest, map, startWith } from 'rxjs';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleService } from '../../../services/article-service.service';
import { Article } from '../../../models/article.model';
import { calculateMatchScore } from '../../../helpers/match-score.helper';

@Component({
  selector: 'app-main-window',
  standalone: true,
  imports: [CommonModule, SearchFormComponent, ArticleListComponent, SearchResultComponent],
  templateUrl: './main-window.component.html',
  styleUrl: './main-window.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainWindowComponent {
  private readonly articleService = inject(ArticleService);
  public readonly searchTerm$ = new BehaviorSubject<string>('');

  public readonly articles$: Observable<Article[]> = combineLatest([
    this.articleService.getArticles(),
    this.searchTerm$.pipe(startWith('')),
  ]).pipe(
    map(([articles, term]) => {
      if (!term) return articles;

      const keywords = term.toLowerCase().split(/\s+/).filter(Boolean);

      return articles
        .map(a => ({ ...a, _score: calculateMatchScore(a, keywords) }))
        .filter(a => a._score > 0)
        .sort((a, b) => b._score - a._score);
    })
  );

  public onSearch(term: string): void {
    this.searchTerm$.next(term);
  }
}
