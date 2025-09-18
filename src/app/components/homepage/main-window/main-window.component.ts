import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchResultComponent } from '../search-result/search-result.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleService } from '../../../services/article-service.service';
import { Article } from '../../../models/article.model';
import { catchError, of, Observable, BehaviorSubject, combineLatest, map, startWith } from 'rxjs';

@Component({
  selector: 'app-main-window',
  standalone: true,
  imports: [CommonModule, SearchFormComponent, ArticleListComponent, SearchResultComponent],
  templateUrl: './main-window.component.html',
  styleUrl: './main-window.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainWindowComponent {
  public searchTerm$ = new BehaviorSubject<string>('');
  articles$!: Observable<Article[]>;

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articles$ = combineLatest([
      this.articleService.getArticles(),
      this.searchTerm$.pipe(startWith(''))
    ]).pipe(
      map(([articles, term]) => {
        if (!term) return articles;

        const keywords = term.toLowerCase().split(/\s+/);

        const matchScore = (article: Article): number => {
          let score = 0;
          for (const word of keywords) {
            if (article.title.toLowerCase().includes(word)) score += 2;
            if (article.summary.toLowerCase().includes(word)) score += 1;
          }
          return score;
        };

        return articles
          .map(a => ({ ...a, _score: matchScore(a) }))
          .filter(a => a._score > 0)
          .sort((a, b) => b._score - a._score);
      })
    );
  }

  onSearch(term: string) {
    this.searchTerm$.next(term);
  }
}
