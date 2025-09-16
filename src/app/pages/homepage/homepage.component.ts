import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MainWindowComponent } from '../../components/homepage/main-window/main-window.component';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [MainWindowComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Homepage {

}
