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

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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

  // Sample notes data
  const notes: Note[] = [
    // Python Notes
    {
      id: 'py1',
      title: 'Python Unit 1',
      description: 'Introduction to Python',
      subject: 'Python',
      class: 'BTech',
      imageUrl: 'https://i.ibb.co/pnmbLJ3/py1.jpg',
      downloadUrl: 'https://docs.google.com/document/d/1CLSrxDfR_jhiPRu4Vc1nukvtir2w9uFeun9SRDAp2CA/export?format=pdf',
    },
    {
      id: 'py2',
      title: 'Python Unit 2',
      description: 'Lists, Dictionary and Functions',
      subject: 'Python',
      class: 'BTech',
      imageUrl: 'https://i.ibb.co/X8fqd6v/py2.jpg',
      downloadUrl: 'https://docs.google.com/document/d/1SUWMspnku0XhI_Zjq7LNqOC8coUgIUhYWM4984Ks4js/edit?usp=drive_link',
    },
    {
      id: 'py3',
      title: 'Python Unit 3',
      description: 'Graphics and Image Processing',
      subject: 'Python',
      class: 'BTech',
      imageUrl: 'https://i.ibb.co/SfJpr8h/py3.jpg',
      downloadUrl: 'https://docs.google.com/document/d/1XXLl-P66gpPtHYrHzdEbXTxEwzdcW5oVHbPy13EASPk/edit?usp=drive_link',
    },
    {
      id: 'py4',
      title: 'Python Unit 4',
      description: 'OOPs Concepts and Multithreading',
      subject: 'Python',
      class: 'BTech',
      imageUrl: 'https://i.ibb.co/j3gyMbB/py4.jpg',
      downloadUrl: 'https://docs.google.com/document/d/1IQ2Tu09ZmZVrlelGq4wEmNCCh_2WH_e1n4i5XfigVJs/edit?usp=drive_link',
    },

    // DBMS Notes
    {
      id: 'dbms1',
      title: 'DBMS Unit 1',
      description: 'Database System Architecture and Data Models',
      subject: 'DBMS',
      class: 'BTech',
      imageUrl: 'https://i.ibb.co/jTnWgbK/dbms1.jpg',
      downloadUrl: 'https://docs.google.com/document/d/1-aFXZXWcJ1_wBLk3Qr_KF1VgEk41smBVRoXE5mkhPdg/edit?usp=drive_link',
    },
    {
      id: 'dbms2',
      title: 'DBMS Unit 2',
      description: 'Relational Query Languages, Database Design and Query Processing',
      subject: 'DBMS',
      class: 'BTech',
      imageUrl: 'https://i.ibb.co/jTnWgbK/dbms1.jpg',
      downloadUrl: 'https://docs.google.com/document/d/1JXphaYl5TpeAdNDsONxhTHetyAgXzpZGJnwhJFglJmA/edit?usp=drive_link',
    },
    {
      id: 'dbms3',
      title: 'DBMS Unit 3',
      description: 'Storage Strategies and Transaction Processing',
      subject: 'DBMS',
      class: 'BTech',
      imageUrl: 'https://i.ibb.co/jTnWgbK/dbms1.jpg',
      downloadUrl: 'https://docs.google.com/document/d/1Hzhw5bqLpNhbRVyLHLWuFlR6VsjqxGcuwzCSDCpr2UA/edit?usp=drive_link',
    },
    {
      id: 'dbms4',
      title: 'DBMS Unit 4',
      description: 'Database Security and Advanced Topics',
      subject: 'DBMS',
      class: 'BTech',
      imageUrl: 'https://i.ibb.co/jTnWgbK/dbms1.jpg',
      downloadUrl: 'https://docs.google.com/document/d/1NixCJQWhBClqS_sU157p5p32fZt3h3PFgVCjWXI-t6s/edit?usp=drive_link',
    },

    // DSA Notes
    {
      id: 'ds1',
      title: 'DSA Unit 1',
      description: 'Introduction to Data Structures and Algorithms',
      subject: 'DSA',
      class: 'BTech',
      imageUrl: 'https://i.ibb.co/4MfG6Dy/ds1.jpg',
      downloadUrl: 'https://docs.google.com/document/d/1cmcfWj9XerMi-Fe5GHqFPqblrvEEXhAnXX_mehos8M4/edit?usp=sharing',
    },
    {
      id: 'ds2',
      title: 'DSA Unit 2',
      description: 'Stacks And Queues',
      subject: 'DSA',
      class: 'BTech',
      imageUrl: 'https://i.ibb.co/M7kVZCL/ds2.jpg',
      downloadUrl: 'https://docs.google.com/document/d/1SeKtFUGaFuV7KXKGJWB7MddG3EMAd5UMJynGszCZJ3s/edit?usp=sharing',
    },
    {
      id: 'ds3',
      title: 'DSA Unit 3',
      description: 'Linked Lists and Trees',
      subject: 'DSA',
      class: 'BTech',
      imageUrl: 'https://i.ibb.co/H7MjbMf/ds3.jpg',
      downloadUrl: 'https://docs.google.com/document/d/1DhegjCN6mEq2BC9VaqFMQcKMBdMhRE2xF1giUXkYjkQ/edit?usp=sharing',
    },
    {
      id: 'ds4',
      title: 'DSA Unit 4',
      description: 'Sorting and Graph',
      subject: 'DSA',
      class: 'BTech',
      imageUrl: 'https://i.ibb.co/VHgK7CX/ds4.jpg',
      downloadUrl: 'https://docs.google.com/document/d/17BGU5qgaexJNUobR7_ZDFNErDGBE33MDmZntsg3YKhc/edit?usp=sharing',
    },

    // DE Notes
    {
      id: 'de1',
      title: 'DE Unit 1',
      description: 'Introduction to Data Structures and Algorithms',
      subject: 'DE',
      class: 'BTech',
      imageUrl: 'https://i.ibb.co/4MfG6Dy/ds1.jpg',
      downloadUrl: 'https://docs.google.com/document/d/1BH0QMigRoOeNvxpUS1zZ1_q_6DdNls6wLusH4YSsikU/preview',
    },
    {
      id: 'de2',
      title: 'DE Unit 2',
      description: 'Stacks And Queues',
      subject: 'DE',
      class: 'BTech',
      imageUrl: 'https://i.ibb.co/M7kVZCL/ds2.jpg',
      downloadUrl: 'https://docs.google.com/document/d/1hYRkbsU2S7k_uSPXTNGZP1ur8RcRBuEVBWo8UMnO-gA/preview',
    },
    {
      id: 'de3',
      title: 'DE Unit 3',
      description: 'Linked Lists and Trees',
      subject: 'DE',
      class: 'BTech',
      imageUrl: 'https://i.ibb.co/H7MjbMf/ds3.jpg',
      downloadUrl: 'https://docs.google.com/document/d/18lWouscuU97Jj0i2lHycGc5eMUx4oX-v9wBgZDbhurw/preview',
    },
    {
      id: 'de4',
      title: 'DE Unit 4',
      description: 'Sorting and Graph',
      subject: 'DE',
      class: 'BTech',
      imageUrl: 'https://i.ibb.co/VHgK7CX/ds4.jpg',
      downloadUrl: 'https://docs.google.com/document/d/1xLL9VPBwLdeUS_XEyln-sZqNqhNODvKaKahd2QvT6VA/preview',
    },

    // Eco Notes
    {
      id: 'eco1',
      title: 'ECO Unit 1',
      description: 'Introduction to Economics and Demand',
      subject: 'ECO',
      class: 'BTech',
      imageUrl: 'https://i.ibb.co/3Cm0zdF/eco1.jpg',
      downloadUrl: 'https://docs.google.com/document/d/1m3Tw0ssyB9-BPKxo4gV8HLwwzEr1KMiyqfudc6eN74s/edit?usp=drive_link',
    },
    {
      id: 'eco2',
      title: 'ECO Unit 2',
      description: 'Production and Cost Analysis',
      subject: 'ECO',
      class: 'BTech',
      imageUrl: 'https://i.ibb.co/f9bDL2m/eco2.jpg',
      downloadUrl: 'https://docs.google.com/document/d/1NwBIThoGhL6P6HZBlKqHgY1QXPoQ6CCPHIhXH1nphDE/edit?usp=drive_link',
    },
    {
      id: 'eco3',
      title: 'ECO Unit 3',
      description: 'Market and Supply',
      subject: 'ECO',
      class: 'BTech',
      imageUrl: 'https://i.ibb.co/9v7zMDS/eco3.jpg',
      downloadUrl: 'https://docs.google.com/document/d/1AUlra3HHc3twjDK072sSyapnxJOyRH-wxDx189q2III/edit?usp=drive_link',
    },
    {
      id: 'eco4',
      title: 'ECO Unit 4',
      description: 'Indian Economy',
      subject: 'ECO',
      class: 'BTech',
      imageUrl: 'https://i.ibb.co/MCjDhKn/eco4.jpg',
      downloadUrl: 'https://docs.google.com/document/d/1rMk2uzaP_AumU1XW8zwzziQhhJ1ozzkaYNv8b-xFpQU/edit?usp=drive_link',
    },
    // Add more sample notes as needed
  ];