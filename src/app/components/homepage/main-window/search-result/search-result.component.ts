import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultComponent {
  @Input() public count: number | null = null;
}
