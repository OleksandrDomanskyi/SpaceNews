export function parseArticleId(id: string | null): number {
  if (!id) {
    throw new Error('Article ID is missing in route params');
  }
  const parsed = Number(id);
  if (isNaN(parsed)) {
    throw new Error(`Invalid Article ID: ${id}`);
  }
  return parsed;
}