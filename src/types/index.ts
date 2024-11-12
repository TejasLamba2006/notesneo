export interface Note {
  id: string;
  title: string;
  description: string;
  subject: string;
  class: string;
  imageUrl: string;
  downloadUrl: string;
}

export interface User {
  id: string;
  email: string;
  savedNotes: string[];
}