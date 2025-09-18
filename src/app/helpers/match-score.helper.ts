import { Article } from "../models/article.model";

export function calculateMatchScore(article: Article, keywords: string[]): number {
  let score = 0;
  for (const word of keywords) {
    if (article.title.toLowerCase().includes(word)) score += 2;
    if (article.summary.toLowerCase().includes(word)) score += 1;
  }
  return score;
}