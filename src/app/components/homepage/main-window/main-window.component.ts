import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SearchFormComponent } from './search-form/search-form.component';
import { ArticleListComponent } from './article-list/article-list.component';

@Component({
  selector: 'app-main-window',
  standalone: true,
  imports: [SearchFormComponent, ArticleListComponent],
  templateUrl: './main-window.component.html',
  styleUrl: './main-window.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainWindowComponent {

}
