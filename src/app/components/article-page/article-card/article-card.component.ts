import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleCardComponent {

}
