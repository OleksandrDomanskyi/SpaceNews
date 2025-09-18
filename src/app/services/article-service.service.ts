import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Article } from '../models/article.model';
import { environment } from '../environments/environment';
import { ENDPOINTS } from '../constants/endpoints';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private readonly URL: string = `${environment.API_URL}${ENDPOINTS.articles}`;

  constructor(private readonly http: HttpClient) {}

  public getArticles(limit: number = 100): Observable<Article[]> {
    return this.http
      .get<{ results: Article[] }>(`${this.URL}/?limit=${limit}`)
      .pipe(map(response => response.results));
  }

  public getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.URL}/${id}`);
  }
}
