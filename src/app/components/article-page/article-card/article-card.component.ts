import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Article, ArticleService } from '../../../services/article-service.service';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleCardComponent {
  article$!: Observable<Article>;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) { }
  
  ngOnInit() {
    this.article$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        return this.articleService.getArticleById(id);
      })
    );
  }
}
