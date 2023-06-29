import axios from 'axios';
import { Note, NewNote } from './types';

const baseUrl = 'http://localhost:3001/notes';

export const getAllNotes = async () => {
  const response = await axios.get<Note[]>(baseUrl);
  return response.data;
};

export const createNote = async (object: NewNote) => {
  const { data, status } = await axios.post<Note>(baseUrl, object);
  console.log({ status });
  return data;
};
