import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Article } from '../../../../models/article.model';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleListComponent {
  @Input() articles: Article[] | null = [];
  @Input() searchTerm: string = '';

  splitText(text: string, term: string): { part: string, match: boolean }[] {
    if (!term) return [{ part: text, match: false }];

    const words = term.split(/\s+/).filter(Boolean).map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    if (!words.length) return [{ part: text, match: false }];

    const regex = new RegExp(`(${words.join('|')})`, 'gi');
    const parts = text.split(regex);
    return parts.map(part => ({ part, match: regex.test(part) }));
  }
}
