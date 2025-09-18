import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ArticleService } from '../../../services/article-service.service';
import { Article } from '../../../models/article.model';
import { parseArticleId } from '../../../helpers/parse-article-id.helper';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleCardComponent implements OnInit {
  public article$!: Observable<Article>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly articleService: ArticleService
  ) {}

  public ngOnInit(): void {
    this.article$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = parseArticleId(params.get('id'));
        return this.articleService.getArticleById(id);
      })
    );
  }
}
