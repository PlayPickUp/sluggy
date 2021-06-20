import slugify from 'slugify';

import { stopWords } from './stopWords';

const removeStopWords = (headline: string) => {
  const expStr = stopWords.join('|');
  return headline.replace(new RegExp('\\b(' + expStr + ')\\b', 'gi'), '');
};

export const makeSlug = (string: string): string =>
  slugify(removeStopWords(string), { lower: true, strict: true });
