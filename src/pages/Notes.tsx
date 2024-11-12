import { useState } from 'react';
import { NoteCard } from '../components/NoteCard';
import { SearchBar } from '../components/SearchBar';
import type { Note } from '../types';

export function Notes() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const filteredNotes = notes.filter((note) => {
    const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubject = !selectedSubject || note.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  const subjects = Array.from(new Set(notes.map((note) => note.subject)));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Academic Notes
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            Browse our collection of high-quality academic notes
          </p>
        </div>

        <div className="mt-8 max-w-xl mx-auto">
          <SearchBar onSearch={setSearchQuery} />
        </div>

        <div className="mt-8 flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setSelectedSubject(null)}
            className={`px-4 py-2 rounded-full ${
              !selectedSubject
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            All
          </button>
          {subjects.map((subject) => (
            <button
              key={subject}
              onClick={() => setSelectedSubject(subject)}
              className={`px-4 py-2 rounded-full ${
                selectedSubject === subject
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              {subject}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredNotes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onSave={() => {}}
              isSaved={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const notes: Note[] = [
  {
    id: '1',
    title: 'Introduction to Calculus',
    description: 'Comprehensive notes covering limits, derivatives, and integrals.',
    subject: 'Mathematics',
    class: 'Grade 12',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    downloadUrl: '#',
  },
  {
    id: '2',
    title: 'Organic Chemistry Fundamentals',
    description: 'Complete guide to organic compounds and reactions.',
    subject: 'Chemistry',
    class: 'Grade 11',
    imageUrl: 'https://images.unsplash.com/photo-1532634993-15f421e42ec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    downloadUrl: '#',
  },
  {
    id: '3',
    title: 'Physics: Mechanics',
    description: 'Detailed notes on Newton\'s laws and classical mechanics.',
    subject: 'Physics',
    class: 'Grade 12',
    imageUrl: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    downloadUrl: '#',
  },
];