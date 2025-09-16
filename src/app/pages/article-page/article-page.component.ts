import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ArticleCardComponent } from '../../components/article-page/article-card/article-card.component';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [ArticleCardComponent],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlePage {

}
