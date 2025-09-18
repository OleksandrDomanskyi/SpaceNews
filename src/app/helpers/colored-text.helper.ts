import { ColoredPart } from "../models/colored-part.model";

export function splitText(text: string, term: string): ColoredPart[] {
  if (!term) return [{ part: text, match: false }];

  const words = term
    .split(/\s+/)
    .filter(Boolean)
    .map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

  if (!words.length) return [{ part: text, match: false }];

  const regex = new RegExp(`(${words.join('|')})`, 'gi');
  const parts = text.split(regex);

  return parts.map(part => ({
    part,
    match: !!part.match(regex),
  }));
}