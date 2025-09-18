import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Article } from '../../../../models/article.model';
import { ColoredPart } from '../../../../models/colored-part.model';
import { splitText } from '../../../../helpers/colored-text.helper';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleListComponent {
  @Input() public articles: Article[] = [];
  @Input() public searchTerm: string = '';

  public splitText(text: string, term: string): ColoredPart[] {
    return splitText(text, term);
  }
}
