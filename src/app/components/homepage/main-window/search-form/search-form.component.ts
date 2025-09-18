import { Component, ChangeDetectionStrategy, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFormComponent implements OnInit, OnDestroy {
  public readonly searchControl: FormControl<string | null> = new FormControl<string>('', { nonNullable: false });
  @Output() public readonly search = new EventEmitter<string>();

  private readonly destroy$ = new Subject<void>();

  public ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe(value => this.search.emit(value ?? ''));
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
