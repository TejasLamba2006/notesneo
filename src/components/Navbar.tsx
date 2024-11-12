import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                NotesNeo
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link font-semibold">Home</Link>
            <Link to="/about" className="nav-link font-semibold">About</Link>
            <Link to="/notes" className="nav-link font-semibold">Notes</Link>
            <Link to="/contact" className="nav-link font-semibold">Contact</Link>
            <ThemeToggle />
            <Link
              to="/login"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-2 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="mobile-nav-link" onClick={closeMenu}>Home</Link>
            <Link to="/about" className="mobile-nav-link" onClick={closeMenu}>About</Link>
            <Link to="/notes" className="mobile-nav-link" onClick={closeMenu}>Notes</Link>
            <Link to="/contact" className="mobile-nav-link" onClick={closeMenu}>Contact</Link>
            <Link to="/login" className="mobile-nav-link bg-indigo-600 text-white" onClick={closeMenu}>Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
