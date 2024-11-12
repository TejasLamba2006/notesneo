import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current location (path)

  const closeMenu = () => setIsOpen(false);

  // Helper function to check if the link is active
  const isActive = (path: string) => location.pathname === path ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : '';

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-50 shadow-lg transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center group">
              <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-800 dark:group-hover:text-indigo-500 transition-all">
                NotesNeo
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className={`nav-link font-semibold text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors ${isActive('/')}`}>
              Home
            </Link>
            <Link to="/about" className={`nav-link font-semibold text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors ${isActive('/about')}`}>
              About
            </Link>
            <Link to="/notes" className={`nav-link font-semibold text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors ${isActive('/notes')}`}>
              Notes
            </Link>
            <Link to="/contact" className={`nav-link font-semibold text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors ${isActive('/contact')}`}>
              Contact
            </Link>
            <ThemeToggle />
            <Link
              to="/login"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg rounded-lg px-4 py-6 space-y-4">
          <div className="space-y-3">
            <Link to="/" className={`mobile-nav-link ${isActive('/')}`} onClick={closeMenu}>Home</Link>
            <Link to="/about" className={`mobile-nav-link ${isActive('/about')}`} onClick={closeMenu}>About</Link>
            <Link to="/notes" className={`mobile-nav-link ${isActive('/notes')}`} onClick={closeMenu}>Notes</Link>
            <Link to="/contact" className={`mobile-nav-link ${isActive('/contact')}`} onClick={closeMenu}>Contact</Link>
            <Link to="/login" className="mobile-nav-link bg-indigo-600 text-white" onClick={closeMenu}>Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
