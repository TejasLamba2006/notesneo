import { Download } from 'lucide-react';
import type { Note } from '../types';

interface NoteCardProps {
  note: Note;
  onSave?: () => void;
  isSaved?: boolean;
}

export function NoteCard({ note, onSave, isSaved }: NoteCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <img
        src={note.imageUrl}
        alt={note.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {note.title}
        </h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {note.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex space-x-2">
            <span className="px-2 py-1 text-xs rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
              {note.subject}
            </span>
            <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200">
              {note.class}
            </span>
          </div>
          <div className="flex space-x-2">
            {onSave && (
              <button
                onClick={onSave}
                className={`p-2 rounded-full ${
                  isSaved
                    ? 'bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill={isSaved ? 'currentColor' : 'none'}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            )}
            <a
              href={note.downloadUrl}
              className="p-2 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800 transition-colors"
              download
            >
              <Download className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}