import { NewNote } from './types';

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseContent = (content: unknown): string => {
  if (!isString(content)) {
    throw new Error('malformed data');
  }

  return content;
};

export const toNewNote = (obj: unknown): NewNote => {
  if (!obj || typeof obj !== 'object') {
    throw new Error('Incorrect or missing data');
  }

  if ('content' in obj) {
    const newEntry = {
      content: parseContent(obj.content),
    };
    return newEntry;
  }

  throw new Error('Incorrect or missing data');
};
