import { useEffect, useState } from 'react';
import { Menu, X, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
          : 'bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 sm:gap-3">
          <DollarSign className="h-6 w-6 sm:h-7 sm:w-7 text-blue-500 animate-pulse" />
          <span className="text-lg sm:text-xl md:text-2xl font-extrabold text-blue-600 dark:text-blue-400 transition-colors duration-300">
            Expense Tracker
          </span>
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <Link
              to="/"
              className="text-base lg:text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              Home
            </Link>
            <Link
              to="/features"
              className="text-base lg:text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              Features
            </Link>
          </div>
          <button
            className="p-2 rounded-full hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors duration-200 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden px-4 sm:px-6 pb-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md animate-slide-in">
          <Link
            to="/"
            className="block py-2 sm:py-3 text-sm sm:text-base text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-md transition-all duration-300 transform hover:pl-2"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/features"
            className="block py-2 sm:py-3 text-sm sm:text-base text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-md transition-all duration-300 transform hover:pl-2"
            onClick={() => setMenuOpen(false)}
          >
            Features
          </Link>
        </div>
      )}
    </nav>
  );
}