[media pointer="file-service://file-K3BzFWhWKKXxNjBngFh78c"]
[media pointer="file-service://file-9evu2gYT9TNnqevAmTZrmG"]
see give me header like this instead of english Hindi give me Home All Category with dropdown and dropdown should be like nse website and at right insert as search as shown in image and after search bar implement dark mode button moon and sun and i also want one menu bar button like three lines make like profffesional and keep the hover line effect same import React, { useState, useEffect, useRef } from 'react';
import { Search, Phone, ChevronDown, Menu, X, Globe, Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const langRef = useRef(null);
  const categoriesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('header');
      if (window.scrollY > 20) {
        navbar.classList.add('shadow-md');
      } else {
        navbar.classList.remove('shadow-md');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setIsLangOpen(false);
      }
      if (categoriesRef.current && !categoriesRef.current.contains(e.target)) {
        setIsCategoriesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const categories = [
    { name: 'Banking & Finance', count: '2.5K+' },
    { name: 'Telecommunications', count: '1.8K+' },
    { name: 'E-commerce', count: '3.2K+' },
    { name: 'Healthcare', count: '4.1K+' },
    { name: 'Travel & Tourism', count: '2.9K+' },
    { name: 'Insurance', count: '1.6K+' },
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'mr', name: 'मराठी' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'te', name: 'తెలుగు' },
    { code: 'bn', name: 'বাংলা' },
    { code: 'gu', name: 'ગુજરાતી' },
    { code: 'kn', name: 'ಕನ್ನಡ' },
    { code: 'ml', name: 'മലയാളം' },
    { code: 'pa', name: 'ਪੰਜਾਬੀ' },
  ];

  const selectLanguage = (lang) => {
    setSelectedLanguage(lang);
    setIsLangOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white text-gray-800 border-b-1 border-blue-500 transition-shadow duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            {/* Logo Image */}
            {/* <div className="h-10 w-10 rounded-full bg-orange-600 flex items-center justify-center shadow-md text-white">
  <Phone className="h-5 w-5" />
</div> */}

            {/* Brand Text */}
            <div>
              <h1 className="text-2xl font-bold text-orange-600 tracking-tight leading-tight">
                Newmess Media
              </h1>
              <p className="text-sm text-slate-500 font-medium">
                India's Trusted Business Directory
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            {/* Language Dropdown */}
            <div className="relative group lang-dropdown" ref={langRef} onMouseLeave={() => setIsLangOpen(false)}>
              <button
                onMouseEnter={() => setIsLangOpen(true)}
                className="flex items-center text-sm font-medium text-gray-800 hover:text-orange-600 transition-colors"
              >
                <img src="/nav_language_icon.svg" alt="Translate" className="h-7 w-6 mr-1" />
                {selectedLanguage.slice(0, 2).toUpperCase()}
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              {isLangOpen && (
                <div className="absolute top-full mt-2 right-0 w-56 bg-white rounded-xl shadow-xl border border-gray-200 z-50">
                  <ul className="text-sm font-medium text-gray-800 py-2">
                    {languages.map((lang) => (
                      <li
                        key={lang.code}
                        onClick={() => selectLanguage(lang.name)}
                        className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 hover:text-orange-600 cursor-pointer"
                      >
                        <span>{lang.name}</span>
                        <span className="text-gray-400 font-semibold">{lang.code.toUpperCase()}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Nav Links */}
            {['Home', 'About Us', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-base font-medium text-gray-800 hover:text-orange-600 relative group transition-colors"
              >
                {item}
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* Categories */}
            <div
              className="relative group categories-dropdown"
              ref={categoriesRef}
              onMouseLeave={() => setIsCategoriesOpen(false)}
            >
              <button
                className="flex items-center text-base font-medium text-gray-800 hover:text-orange-600 transition-colors"
                onMouseEnter={() => setIsCategoriesOpen(true)}
              >
                All Categories
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isCategoriesOpen && (
                <div className="absolute z-10 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200">
                  <div className="grid gap-1 p-2">
                    {categories.map((category) => (
                      <a
                        key={category.name}
                        href="#"
                        className="flex justify-between items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-orange-600 rounded-lg transition-all"
                      >
                        <span className="font-medium">{category.name}</span>
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <button
              className="ml-4 p-2 rounded-full bg-gray-100 text-gray-800 hover:bg-orange-100 transition-colors"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center lg:hidden">
            <button
              className="p-2 rounded-full bg-gray-100 text-gray-800 mr-3"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              className="text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
