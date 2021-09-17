import slugify from 'slugify';

import { stopWords } from './stopWords';
import { MakeSlug } from './types';

const removeStopWords = (headline: string) => {
  const expStr = stopWords.join('|');
  return headline.replace(new RegExp('\\b(' + expStr + ')\\b', 'gi'), '');
};

const makeSlug: MakeSlug = (string) =>
  slugify(removeStopWords(string), { lower: true, strict: true });

export default makeSlug;
