import React, { useState, useEffect, useRef } from 'react';
import { Search, ChevronDown, Menu, X, Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [placeholderText, setPlaceholderText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const categoriesRef = useRef(null);
  const sidebarRef = useRef(null);

  const placeholderWords = ['Jio', 'Airtel', 'SBI Bank', 'ICICI', 'Zomato', 'Swiggy'];

  useEffect(() => {
    // Typewriter effect for search placeholder
    const currentWord = placeholderWords[wordIndex];
    
    const handleTyping = () => {
      // Determine if we're deleting or typing
      const isDeletingPhase = isDeleting;
      
      // Set current text based on delete/type status
      setPlaceholderText(
        isDeletingPhase
          ? currentWord.substring(0, placeholderText.length - 1)
          : currentWord.substring(0, placeholderText.length + 1)
      );
      
      // Set typing speed (faster for deleting)
      setTypingSpeed(isDeletingPhase ? 75 : 150);
      
      // Check if word is complete
      if (!isDeletingPhase && placeholderText === currentWord) {
        // Pause at end of word
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeletingPhase && placeholderText === '') {
        // Move to next word after deleting
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % placeholderWords.length);
      }
    };
    
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [placeholderText, isDeleting, wordIndex]);

  useEffect(() => {
    // Close categories when clicking outside
    const handleClickOutside = (e) => {
      if (categoriesRef.current && !categoriesRef.current.contains(e.target)) {
        setIsCategoriesOpen(false);
      }
      if (sidebarRef.current && !sidebarRef.current.contains(e.target) && e.target.id !== 'menu-button') {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const categoryColumns = [
    {
      title: 'Banking & Finance',
      subcategories: ['Private Banks', 'Public Sector Banks', 'NBFCs', 'Investment Firms', 'Loan Services', 'Forex Services']
    },
    {
      title: 'Healthcare',
      subcategories: ['Hospitals', 'Clinics', 'Pharmacies', 'Telemedicine', 'Medical Equipment', 'Health Insurance']
    },
    {
      title: 'E-commerce',
      subcategories: ['Fashion', 'Electronics', 'Groceries', 'Home Services', 'Marketplaces', 'Subscription Boxes']
    }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white text-gray-800 shadow-sm border-b border-gray-200 font-[Inter]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Left Section - Brand */}
          <div className="flex items-center space-x-6">
            <div>
              <h1 className="text-2xl font-bold text-orange-600 tracking-tight leading-tight">
                Newmess Media
              </h1>
              <p className="text-sm text-slate-500 font-medium">
                India's Trusted Business Directory
              </p>
            </div>
            <div className="hidden md:flex space-x-6 items-center">
              <a href="#" className="relative group text-base font-medium text-gray-800 hover:text-orange-600 transition-colors">
                Home
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-orange-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </a>
              <div
                className="relative group"
                ref={categoriesRef}
                onMouseLeave={() => setIsCategoriesOpen(false)}
              >
                <button
                  onMouseEnter={() => setIsCategoriesOpen(true)}
                  className="flex items-center text-base font-medium text-gray-800 hover:text-orange-600 transition-colors"
                >
                  All Categories
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>
                {isCategoriesOpen && (
                  <div className="absolute top-full left-0 mt-3 w-full md:w-[900px] bg-white border shadow-xl rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-8 z-50 animate-fadeIn">
                    {categoryColumns.map((column, idx) => (
                      <div key={idx}>
                        <h3 className="font-semibold text-gray-700 text-sm mb-2">{column.title}</h3>
                        <ul className="space-y-1">
                          {column.subcategories.map((sub, index) => (
                            <li
                              key={index}
                              className="text-sm text-gray-600 hover:text-orange-600 cursor-pointer transition-colors"
                            >
                              {sub}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Section - Search and Buttons */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder={`Search ${placeholderText}`}
                className="pl-10 pr-4 py-2 rounded-full border bg-gray-100 text-sm transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-300 w-64"
              />
              <div className="absolute left-3 top-2.5">
                <Search className="h-4 w-4 text-gray-500" />
              </div>
            </div>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full bg-gray-100 hover:bg-orange-100 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              id="menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 md:p-3 rounded-full bg-gray-100 hover:bg-orange-100 border border-gray-300 md:hidden transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Slide-out Mobile Menu */}
      <div 
        className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Sidebar */}
        <div 
          ref={sidebarRef}
          className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-xl z-50 overflow-y-auto transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-orange-600">Newmess Media</h2>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="space-y-6">
              <a 
                href="#" 
                className="block text-lg font-medium text-gray-800 hover:text-orange-600 py-2 border-b border-gray-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              
              <div className="py-2 border-b border-gray-200">
                <div 
                  className="flex justify-between items-center cursor-pointer" 
                  onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                >
                  <span className="text-lg font-medium text-gray-800">All Categories</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} />
                </div>
                
                {isCategoriesOpen && (
                  <div className="mt-4 pl-2 space-y-4 animate-fadeIn">
                    {categoryColumns.map((column, idx) => (
                      <div key={idx}>
                        <h4 className="font-semibold text-gray-700 mb-2">{column.title}</h4>
                        <ul className="space-y-2">
                          {column.subcategories.map((sub, index) => (
                            <li 
                              key={index} 
                              className="text-gray-600 hover:text-orange-600 cursor-pointer transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {sub}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  placeholder={`Search ${placeholderText}`}
                  className="pl-10 pr-4 py-3 w-full rounded-full border bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
                <div className="absolute left-3 top-3.5">
                  <Search className="h-4 w-4 text-gray-500" />
                </div>
              </div>
              
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-gray-100 hover:bg-orange-100 transition-colors"
              >
                {isDarkMode ? (
                  <>
                    <Sun className="h-5 w-5" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-5 w-5" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;