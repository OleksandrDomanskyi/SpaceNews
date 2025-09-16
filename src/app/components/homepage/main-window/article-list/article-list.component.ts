import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleListComponent {

}
