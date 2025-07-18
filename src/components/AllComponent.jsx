import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  Phone,
  ChevronDown,
  Menu,
  X,
  Globe,
  Sun,
  Moon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const langRef = useRef(null);
  const categoriesRef = useRef(null);
  const langDropdownTimer = useRef(null);
  const categoriesDropdownTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("header");
      if (window.scrollY > 20) {
        navbar.classList.add("shadow-md");
      } else {
        navbar.classList.remove("shadow-md");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
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
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isCategoriesOpen && categories.length > 0 && !hoveredCategory) {
      setHoveredCategory(categories[0]);
    }
  }, [isCategoriesOpen]);

  const categories = [
    {
      name: "Banking & Finance",
      count: "2.5K+",
      subcategories: [
        { name: "Banks", count: "1.2K+" },
        { name: "Credit Cards", count: "800+" },
        { name: "Loans", count: "500+" },
        { name: "Investment", count: "400+" },
        { name: "Insurance", count: "600+" },
        { name: "Stock Brokerage", count: "300+" },
      ],
    },
    {
      name: "Telecommunications",
      count: "1.8K+",
      subcategories: [
        { name: "Mobile Operators", count: "1.1K+" },
        { name: "Internet Service", count: "700+" },
        { name: "DTH Services", count: "300+" },
        { name: "Landline", count: "200+" },
        { name: "Business Solutions", count: "400+" },
      ],
    },
    {
      name: "E-commerce",
      count: "3.2K+",
      subcategories: [
        { name: "Online Shopping", count: "1.8K+" },
        { name: "Food Delivery", count: "900+" },
        { name: "Travel Booking", count: "500+" },
        { name: "Grocery Delivery", count: "700+" },
        { name: "Fashion Retail", count: "1.1K+" },
      ],
    },
    {
      name: "Healthcare",
      count: "4.1K+",
      subcategories: [
        { name: "Hospitals", count: "2.1K+" },
        { name: "Pharmacy", count: "1.2K+" },
        { name: "Diagnostics", count: "800+" },
        { name: "Clinics", count: "1.5K+" },
        { name: "Health Insurance", count: "900+" },
        { name: "Wellness Centers", count: "600+" },
      ],
    },
    {
      name: "Travel & Tourism",
      count: "2.9K+",
      subcategories: [
        { name: "Airlines", count: "800+" },
        { name: "Hotels", count: "1.1K+" },
        { name: "Tour Operators", count: "500+" },
        { name: "Railways", count: "500+" },
        { name: "Car Rentals", count: "400+" },
        { name: "Travel Insurance", count: "300+" },
      ],
    },
    {
      name: "Insurance",
      count: "1.6K+",
      subcategories: [
        { name: "Health Insurance", count: "700+" },
        { name: "Life Insurance", count: "500+" },
        { name: "Vehicle Insurance", count: "400+" },
        { name: "Travel Insurance", count: "300+" },
        { name: "Property Insurance", count: "200+" },
      ],
    },
    {
      name: "Government Services",
      count: "3.5K+",
      subcategories: [
        { name: "Passport Services", count: "800+" },
        { name: "Tax Departments", count: "1.1K+" },
        { name: "Municipal Services", count: "900+" },
        { name: "Public Utilities", count: "700+" },
        { name: "Licensing", count: "500+" },
      ],
    },
    {
      name: "Education",
      count: "2.3K+",
      subcategories: [
        { name: "Universities", count: "800+" },
        { name: "Schools", count: "1.2K+" },
        { name: "Coaching Centers", count: "600+" },
        { name: "Online Learning", count: "400+" },
        { name: "Exam Boards", count: "500+" },
      ],
    },
    {
      name: "Automotive",
      count: "1.7K+",
      subcategories: [
        { name: "Car Manufacturers", count: "800+" },
        { name: "Two-Wheelers", count: "600+" },
        { name: "Service Centers", count: "700+" },
        { name: "Spare Parts", count: "400+" },
        { name: "Vehicle Insurance", count: "500+" },
      ],
    },
    {
      name: "Utilities",
      count: "1.9K+",
      subcategories: [
        { name: "Electricity", count: "900+" },
        { name: "Water Supply", count: "700+" },
        { name: "Gas Services", count: "600+" },
        { name: "Waste Management", count: "300+" },
        { name: "Renewable Energy", count: "400+" },
      ],
    },
  ];

  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "हिंदी" },
    { code: "mr", name: "मराठी" },
    { code: "ta", name: "தமிழ்" },
    { code: "te", name: "తెలుగు" },
    { code: "bn", name: "বাংলা" },
    { code: "gu", name: "ગુજરાતી" },
    { code: "kn", name: "ಕನ್ನಡ" },
    { code: "ml", name: "മലയാളം" },
    { code: "pa", name: "ਪੰਜਾਬੀ" },
  ];

  const selectLanguage = (lang) => {
    setSelectedLanguage(lang);
    setIsLangOpen(false);
  };

  const sidebarItems = [
    {
      title: "Quick Links",
      items: [
        "Home",
        "Search Directory",
        "Emergency Numbers",
        "Popular Services",
      ],
    },
    {
      title: "Categories",
      items: [
        "Banking & Finance",
        "Telecommunications",
        "E-commerce",
        "Healthcare",
        "Travel & Tourism",
        "Insurance",
      ],
    },
    {
      title: "Support",
      items: ["Help Center", "Contact Us", "Report Issue", "Feedback"],
    },
    {
      title: "About",
      items: ["About Us", "Privacy Policy", "Terms of Service", "Disclaimer"],
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white text-gray-800  h-[74px]  transition-shadow duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src="/logo3-Photoroom.png"
                alt="ICH logo"
                className="w-15 h-15 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-orange-600 tracking-tight leading-tight">
                  India Customer Help
                </h1>
                <p className="text-sm text-slate-500 font-medium">
                  India's Trusted Business Directory
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-6">
              {/* Language Dropdown */}
              <div
                className="relative group lang-dropdown"
                ref={langRef}
                onMouseEnter={() => {
                  if (langDropdownTimer.current)
                    clearTimeout(langDropdownTimer.current);
                  setIsLangOpen(true);
                }}
                onMouseLeave={() => {
                  langDropdownTimer.current = setTimeout(
                    () => setIsLangOpen(false),
                    180
                  );
                }}
              >
                <button className="flex items-center text-sm font-medium text-gray-800 hover:text-orange-600 transition-colors">
                  <Globe className="h-4 w-4 mr-1" />
                  {selectedLanguage.slice(0, 2).toUpperCase()}
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="absolute top-full mt-2 right-0 w-56 bg-white rounded-xl shadow-xl border border-gray-200 z-50"
                    >
                      <ul className="text-sm font-medium text-gray-800 py-2">
                        {languages.map((lang) => (
                          <li
                            key={lang.code}
                            onClick={() => selectLanguage(lang.name)}
                            className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 hover:text-orange-600 cursor-pointer"
                          >
                            <span>{lang.name}</span>
                            <span className="text-gray-400 font-semibold">
                              {lang.code.toUpperCase()}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Home Link */}
              <Link
                to="/"
                className="text-base font-medium text-gray-800 hover:text-orange-600 relative group transition-colors"
              >
                Home
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              {/* Enhanced Categories Dropdown */}
              <div
                className="relative group categories-dropdown"
                ref={categoriesRef}
                onMouseEnter={() => {
                  if (categoriesDropdownTimer.current)
                    clearTimeout(categoriesDropdownTimer.current);
                  setIsCategoriesOpen(true);
                }}
                onMouseLeave={() => {
                  categoriesDropdownTimer.current = setTimeout(
                    () => setIsCategoriesOpen(false),
                    180
                  );
                }}
              >
                <button
                  className="flex items-center text-base font-medium text-gray-800 hover:text-orange-600 transition-colors"
                  onMouseEnter={() => {
                    setIsCategoriesOpen(true);
                    if (!hoveredCategory && categories.length > 0) {
                      setHoveredCategory(categories[0]);
                    }
                  }}
                >
                  All Categories
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${
                      isCategoriesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isCategoriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.23, ease: "easeOut" }}
                      className="absolute z-10 mt-2 w-[600px] max-w-[95vw] right-0 bg-white rounded-xl shadow-xl border border-gray-200 overflow-x-auto"
                    >
                      <div className="flex">
                        {/* Main Categories Column */}
                        <div className="w-2/5 border-r border-gray-100">
                          <div className="p-2 max-h-[400px] overflow-y-auto">
                            {categories.map((category) => (
                              <div
                                key={category.name}
                                onMouseEnter={() =>
                                  setHoveredCategory(category)
                                }
                                className={`flex justify-between items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-orange-600 rounded-lg transition-all cursor-pointer ${
                                  hoveredCategory?.name === category.name
                                    ? "bg-orange-50 text-orange-600"
                                    : ""
                                }`}
                              >
                                <span className="font-medium">
                                  {category.name}
                                </span>
                                <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
                                  {category.count}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Subcategories Column */}
                        <div className="w-3/5">
                          <div className="p-2 max-h-[400px] overflow-y-auto">
                            {hoveredCategory && (
                              <>
                                <div className="px-4 py-2 font-semibold text-gray-800 border-b border-gray-100">
                                  {hoveredCategory.name}
                                </div>
                                <div className="grid grid-cols-2 gap-1 mt-2">
                                  {hoveredCategory.subcategories.map((sub) => (
                                    <a
                                      key={sub.name}
                                      href="#"
                                      className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-orange-600 rounded-lg transition-all"
                                    >
                                      <span>{sub.name}</span>
                                      <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
                                        {sub.count}
                                      </span>
                                    </a>
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Dark Mode Toggle */}
              <button
                className="p-2 rounded-full bg-gray-100 text-gray-800 hover:bg-orange-100 transition-colors"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>

              {/* Desktop Hamburger Menu */}
              <button
                className="p-2 rounded-full bg-gray-100 text-gray-800 hover:bg-orange-100 transition-colors"
                onClick={() => setIsSidebarOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </button>
            </nav>

            {/* Mobile Toggle */}
            <div className="flex items-center lg:hidden">
              <button
                className="p-2 rounded-full bg-gray-100 text-gray-800 mr-3"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
              <button
                className="text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
              <div className="px-4 py-6 space-y-4">
                {/* Mobile Language Dropdown */}
                <div className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => setIsLangOpen(!isLangOpen)}
                    className="flex items-center justify-between w-full text-base font-medium text-gray-800"
                  >
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 mr-2" />
                      Language: {selectedLanguage}
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        isLangOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isLangOpen && (
                    <div className="mt-3 space-y-2">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => selectLanguage(lang.name)}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                        >
                          {lang.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Nav Links */}
                <a
                  href="#"
                  className="block text-base font-medium text-gray-800 hover:text-orange-600 py-2"
                >
                  Home
                </a>

                {/* Mobile Categories */}
                <div>
                  <button
                    onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                    className="flex items-center justify-between w-full text-base font-medium text-gray-800 py-2"
                  >
                    All Categories
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        isCategoriesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isCategoriesOpen && (
                    <div className="mt-2 space-y-1">
                      {categories.map((category) => (
                        <a
                          key={category.name}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                        >
                          {category.name} ({category.count})
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Desktop Sidebar */}
      {isSidebarOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
            onClick={() => setIsSidebarOpen(false)}
          />

          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-800">Menu</h2>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto h-full pb-20">
              {sidebarItems.map((section, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-lg font-semibold text-orange-600 mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a
                          href="#"
                          className="block text-gray-700 hover:text-orange-600 hover:bg-orange-50 px-3 py-2 rounded-lg transition-all"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;

import React, { useState } from 'react';
import { TrendingUp } from 'lucide-react';

const trendingData = [
  { name: "Jio", value: "1,234 searches" },
  { name: "ICICI Bank", value: "998 searches" },
  { name: "Amazon", value: "1,560 searches" },
  { name: "Apollo Hospital", value: "1,105 searches" },
  { name: "Airtel", value: "870 searches" },
  { name: "Tata Motors", value: "750 searches" },
  { name: "Zomato", value: "1,320 searches" },
  { name: "Swiggy", value: "1,040 searches" },
];

const TrendingTicker = () => {
  const [isPaused, setIsPaused] = useState(false);
  const infiniteData = [...trendingData, ...trendingData];

  return (
    <div className="relative bg-[#fdf7f1] border-y border-gray-300 overflow-hidden z-40 h-[62px]">
      {/* Top shadow */}
      <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-b from-black/10 to-transparent pointer-events-none z-10" />
      {/* Bottom shadow */}
      <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-t from-black/10 to-transparent pointer-events-none z-10" />

      <div className="max-w-9xl mx-auto flex items-center px-4 py-2 overflow-hidden relative">
        {/* Label */}
        <div className="flex items-center text-orange-700 font-semibold text-sm md:text-base mr-6 whitespace-nowrap shrink-0">
          <TrendingUp className="h-4 w-4 mr-1" />
          Trending Searches:
        </div>

        {/* Marquee */}
        <div className="flex-1 overflow-hidden">
          <div
            className={`flex w-max space-x-4 ${isPaused ? '' : 'animate-marquee'} overflow-visible py-2 transition-opacity duration-300`}
            style={{
              animationPlayState: isPaused ? 'paused' : 'running',
              opacity: isPaused ? 0.7 : 1,
            }}
          >
            {infiniteData.map((item, index) => (
              <a
                key={index}
                href="#"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onMouseDown={() => setIsPaused(true)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
                className="flex items-center px-4 py-1.5 border border-gray-200 bg-white rounded-full text-sm text-gray-900 font-medium 
                  shadow-sm hover:shadow-lg hover:border-orange-400 hover:scale-105 hover:bg-gradient-to-r hover:from-orange-50 hover:to-white 
                  transition-all duration-300"
              >
                <span className="mr-2 font-semibold hover:text-orange-600 transition-colors">{item.name}</span>
                <span className="text-gray-500 text-xs">({item.value})</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingTicker;
import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import {
  Search, Building2, Shield, Clock, Users, Globe,
  PhoneCall, HeartPulse, Flame, Baby, Brain, Pill,
  ShieldCheck, UserCheck, CreditCard, Car, Plane,
  Building, Scale, ChevronDown, ChevronUp, Filter,
  Mic
} from 'lucide-react';

const HeroSection = () => {
  const [business, setBusiness] = useState('');
  const [placeholderText, setPlaceholderText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [userState, setUserState] = useState('Detecting...');
  const [selectedCategory, setSelectedCategory] = useState('emergency');
  const [showAll, setShowAll] = useState(false);
  const [helpSearch, setHelpSearch] = useState("");
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);
  const [isHelpListening, setIsHelpListening] = useState(false);
  const helpRecognitionRef = useRef(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_GOOGLE_API_KEY`
        );
        const data = await response.json();
        const stateComponent = data.results[0]?.address_components.find(comp =>
          comp.types.includes('administrative_area_level_1')
        );
        setUserState(stateComponent ? stateComponent.long_name : 'Unknown');
      } catch (err) {
        console.error("Geolocation error:", err);
        setUserState('Unavailable');
      }
    }, () => setUserState('Location Denied'));
  }, []);

  const placeholderWords = ['JIO', 'AMAZON', 'AIRTEL', 'ICICI Bank', 'SWIGGY', 'ZOMATO'];
  useEffect(() => {
    const currentWord = placeholderWords[wordIndex];
    let timeout;
    if (!isDeleting && placeholderText !== currentWord) {
      timeout = setTimeout(() => {
        setPlaceholderText(currentWord.substring(0, placeholderText.length + 1));
      }, 120);
    } else if (!isDeleting && placeholderText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && placeholderText !== '') {
      timeout = setTimeout(() => {
        setPlaceholderText(currentWord.substring(0, placeholderText.length - 1));
      }, 80);
    } else if (isDeleting && placeholderText === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % placeholderWords.length);
      }, 600);
    }
    return () => clearTimeout(timeout);
  }, [placeholderText, isDeleting, wordIndex]);

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) return;
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognitionRef.current = recognition;
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setBusiness(transcript);
      setIsListening(false);
    };
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);
  }, []);

  const handleMicClick = () => {
    if (!recognitionRef.current) return alert('Voice typing is not supported in this browser.');
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) return;
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    helpRecognitionRef.current = recognition;
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setHelpSearch(transcript);
      setIsHelpListening(false);
    };
    recognition.onerror = () => setIsHelpListening(false);
    recognition.onend = () => setIsHelpListening(false);
  }, []);

  const handleHelpMicClick = () => {
    if (!helpRecognitionRef.current) return alert('Voice typing is not supported in this browser.');
    if (isHelpListening) {
      helpRecognitionRef.current.stop();
      setIsHelpListening(false);
    } else {
      setIsHelpListening(true);
      helpRecognitionRef.current.start();
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching:', business);
  };

// Comprehensive helpline data organized by categories
  const helplineCategories = {
    emergency: {
      title: '🚨 Emergency',
      color: 'from-red-500 to-red-600',
      services: [
        { icon: PhoneCall, title: 'National Emergency', number: '112', available24x7: true },
        { icon: PhoneCall, title: 'Police', number: '100', available24x7: true },
        { icon: Flame, title: 'Fire', number: '101', available24x7: true },
        { icon: HeartPulse, title: 'Ambulance', number: '102', available24x7: true },
        { icon: Shield, title: 'Disaster Mgmt', number: '108', available24x7: true },
        { icon: Flame, title: 'Gas Leak', number: '1906', available24x7: true }
      ]
    },
    health: {
      title: '🏥 Health & Medical',
      color: 'from-green-500 to-green-600',
      services: [
        { icon: HeartPulse, title: 'Ayushman Bharat', number: '14555', available24x7: false },
        { icon: Shield, title: 'COVID-19', number: '1075', available24x7: true },
        { icon: HeartPulse, title: 'Blood Bank', number: '104', available24x7: true },
        { icon: Brain, title: 'Mental Health', number: '1800-599-0019', available24x7: true },
        { icon: HeartPulse, title: 'AIDS Helpline', number: '1097', available24x7: true },
        { icon: Pill, title: 'Medicine Info', number: '1800-180-1104', available24x7: false }
      ]
    },
    'women-children': {
      title: '👩‍👧‍👦 Women & Children',
      color: 'from-pink-500 to-pink-600',
      services: [
        { icon: ShieldCheck, title: 'Women Helpline', number: '1091', available24x7: true },
        { icon: ShieldCheck, title: 'Domestic Violence', number: '181', available24x7: true },
        { icon: Baby, title: 'Child Helpline', number: '1098', available24x7: true },
        { icon: ShieldCheck, title: 'Women Safety', number: '112', available24x7: true }
      ]
    },
    senior: {
      title: '👵 Senior Citizens',
      color: 'from-purple-500 to-purple-600',
      services: [
        { icon: UserCheck, title: 'Elderly Helpline', number: '14567', available24x7: true },
        { icon: UserCheck, title: 'Senior Abuse', number: '1291', available24x7: false },
        { icon: HeartPulse, title: 'Senior Health', number: '104', available24x7: true }
      ]
    },
    'cyber-financial': {
      title: '💳 Cyber & Financial',
      color: 'from-blue-500 to-blue-600',
      services: [
        { icon: Shield, title: 'Cyber Crime', number: '1930', available24x7: true },
        { icon: CreditCard, title: 'Banking Fraud', number: '155260', available24x7: true },
        { icon: Users, title: 'Consumer Help', number: '1800-11-4000', available24x7: true },
        { icon: CreditCard, title: 'Credit Card', number: '1800-1800-1800', available24x7: true }
      ]
    },
    transport: {
      title: '🛣️ Transport & Travel',
      color: 'from-indigo-500 to-indigo-600',
      services: [
        { icon: Car, title: 'Road Accident', number: '1073', available24x7: true },
        { icon: Car, title: 'Railway Enquiry', number: '139', available24x7: true },
        { icon: Shield, title: 'Railway Police', number: '182', available24x7: true },
        { icon: Plane, title: 'Air Travel', number: '155254', available24x7: true }
      ]
    },
    civic: {
      title: '🏙️ Civic Services',
      color: 'from-teal-500 to-teal-600',
      services: [
        { icon: Building, title: 'Swachh Bharat', number: '1969', available24x7: false },
        { icon: Building, title: 'Electricity', number: '1912', available24x7: true },
        { icon: Building, title: 'Water Supply', number: '1916', available24x7: false }
      ]
    },
    'govt-legal': {
      title: '🧑‍⚖️ Govt & Legal',
      color: 'from-orange-500 to-orange-600',
      services: [
        { icon: Scale, title: 'Voter Helpline', number: '1950', available24x7: true },
        { icon: Scale, title: 'Passport Seva', number: '1800-258-1800', available24x7: true },
        { icon: Scale, title: 'Aadhaar Card', number: '1947', available24x7: true },
        { icon: Scale, title: 'PAN Card', number: '1800-180-1961', available24x7: true },
        { icon: Scale, title: 'RTI Helpline', number: '1964', available24x7: false },
        { icon: Scale, title: 'Human Rights', number: '14433', available24x7: false }
      ]
    }
  };

  const currentCategory = helplineCategories[selectedCategory];
  const displayedServices = showAll ? currentCategory.services : currentCategory.services.slice(0, 6);

  const handleCall = (title, number) => {
    if (window.confirm(`Call ${title} at ${number}?`)) {
      window.location.href = `tel:${number}`;
    }
  };

  // Add help topics for the new left container
  const helpTopics = [
    'How to update Aadhaar',
    'How to complain on Flipkart',
    'How to check PAN status',
    'How to block lost ATM card',
    'How to contact IRCTC',
    'How to get COVID certificate',
    'How to check PF balance',
    'How to report cyber crime',
    'How to get FASTag',
    'How to file RTI',
    'How to get voter ID',
    'How to check electricity bill',
    'How to get passport',
    'How to check train PNR',
    'How to get driving license',
    'How to get birth certificate',
    'How to get caste certificate',
    'How to get income certificate',
    'How to get land records',
    'How to get ration card',
    'How to get domicile certificate',
    'How to get marriage certificate',
    'How to get death certificate',
    'How to get property tax info',
    'How to get water bill info',
    'How to get gas connection',
    'How to get LPG subsidy',
    'How to get Ayushman card',
    'How to get health insurance',
    'How to get scholarship',
    'How to get pension',
    'How to get disability certificate',
    'How to get EWS certificate',
    'How to get NOC',
    'How to get police clearance',
    'How to get arms license',
    'How to get vehicle registration',
    'How to get birth registration',
    'How to get caste validity',
    'How to get income tax info',
    'How to get GST info',
    'How to get MSME registration',
    'How to get startup registration',
    'How to get Udyam registration',
    'How to get digital signature',
    'How to get eKYC',
    'How to get mobile number update',
    'How to get address proof',
    'How to get legal heir certificate',
    'How to get succession certificate',
    'How to get mutation certificate',
    'How to get property registration',
    'How to get land mutation',
    'How to get encumbrance certificate',
    'How to get caste certificate correction',
    'How to get income certificate correction',
    'How to get birth certificate correction',
    'How to get death certificate correction',
    'How to get marriage certificate correction',
    'How to get ration card correction',
    'How to get voter ID correction',
    'How to get PAN correction',
    'How to get Aadhaar correction',
    'How to get passport correction',
    'How to get driving license correction',
    'How to get vehicle registration correction',
    'How to get property tax correction',
    'How to get water bill correction',
    'How to get gas connection correction',
    'How to get LPG subsidy correction',
    'How to get Ayushman card correction',
    'How to get health insurance correction',
    'How to get scholarship correction',
    'How to get pension correction',
    'How to get disability certificate correction',
    'How to get EWS certificate correction',
    'How to get NOC correction',
    'How to get police clearance correction',
    'How to get arms license correction',
    'How to get vehicle registration correction',
    'How to get birth registration correction',
    'How to get caste validity correction',
    'How to get income tax correction',
    'How to get GST correction',
    'How to get MSME registration correction',
    'How to get startup registration correction',
    'How to get Udyam registration correction',
    'How to get digital signature correction',
    'How to get eKYC correction',
    'How to get mobile number update correction',
    'How to get address proof correction',
    'How to get legal heir certificate correction',
    'How to get succession certificate correction',
    'How to get mutation certificate correction',
    'How to get property registration correction',
    'How to get land mutation correction',
    'How to get encumbrance certificate correction',
  ];

  // Filter and sort help topics by search
  const filteredHelpTopics = helpTopics
    .map((topic) => ({
      topic,
      match: helpSearch.trim() === "" ? 0 : topic.toLowerCase().indexOf(helpSearch.toLowerCase()),
    }))
    .filter(({ match }) => helpSearch.trim() === "" || match !== -1)
    .sort((a, b) => {
      if (a.match === b.match) return a.topic.localeCompare(b.topic);
      if (a.match === -1) return 1;
      if (b.match === -1) return -1;
      return a.match - b.match;
    })
    .map(({ topic }) => topic);

  return (
    <div className="relative overflow-hidden border-amber-800 b-[10px] w-full h-[542px] bg-gradient-to-b from-[#F28C28] via-[#FDFDFC] to-[#1D8052] px-1 sm:px-6 lg:px-12 py-8 flex items-center justify-center shadow-[0_4px_30px_rgba(0,0,0,0.1)]">

      {/* Premium Top Shadow */}
      <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-black/10 to-transparent pointer-events-none z-10"></div>

      {/* Premium Bottom Shadow */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-black/10 to-transparent pointer-events-none z-10"></div>

      {/* Your original content starts here */}
      <div className="w-full max-w-9xl mx-auto flex flex-col md:flex-row gap-6 h-full items-stretch">
                {/* NEW: Left Help Topics Container */}
        {/* Desktop vertical sidebar */}
        <div className="hidden md:flex flex-col w-[23%] h-[479px] rounded-xl shadow-xl border border-orange-100/70 overflow-hidden bg-white">
          <div className="px-4 py-3 border-b border-gray-100 bg-gradient-to-r from-[#F28C28]/20 to-[#fff] font-bold text-sm text-orange-700 tracking-wide uppercase text-center">
            Help Topics
          </div>
          {/* Search Bar */}
          <div className="px-4 py-3 bg-white border-b border-orange-50 flex items-center gap-2 relative">
            <input
              type="text"
              value={helpSearch}
              onChange={e => setHelpSearch(e.target.value)}
              placeholder="Search help..."
              className="w-full rounded-xl border border-orange-200 bg-orange-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm placeholder:text-orange-400"
              style={{ fontWeight: 500 }}
            />
            {/* Mic icon for voice typing */}
            <button
              type="button"
              onClick={handleHelpMicClick}
              className={`absolute right-5.5 top-1/2 -translate-y-1/2 h-6 w-6 flex items-center justify-center rounded-full transition-colors ${isHelpListening ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-400'} focus:outline-none`}
              aria-label="Voice Search"
              tabIndex={0}
            >
              <Mic className={`h-5 w-5 ${isHelpListening ? 'animate-pulse' : ''}`} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-200 scrollbar-track-transparent bg-gradient-to-b from-[#fff] to-[#fdf7ed]">
            <ul className="divide-y divide-orange-50">
              {filteredHelpTopics.map((topic, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 text-[15px] text-gray-800 hover:bg-orange-100 hover:text-orange-700 cursor-pointer transition-colors select-none rounded-md mx-2 my-1 font-medium"
                  style={{ transition: 'background 0.2s, color 0.2s' }}
                >
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Mobile horizontal scrollable bar */}
        <div className="md:hidden w-full mb-3">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-orange-200 scrollbar-track-transparent px-1 py-2 bg-white rounded-xl shadow-md border border-gray-100 mb-3">
            {helpTopics.slice(0, 15).map((topic, idx) => (
              <button
                key={idx}
                className="whitespace-nowrap px-4 py-2 rounded-full bg-orange-50 text-orange-700 text-xs font-semibold border border-orange-100 hover:bg-orange-100 hover:text-orange-800 transition-colors shadow-sm"
                style={{ minWidth: 'max-content' }}
              >
                {topic}
              </button>
            ))}
            {helpTopics.length > 15 && (
              <span className="px-3 text-gray-400 text-xs">+{helpTopics.length - 15} more</span>
            )}
          </div>
        </div>
        {/* Main Content for Mobile */}
        <div className="md:hidden w-full flex flex-col gap-3">
          {/* Main Hero Card */}
          <div className="rounded-xl shadow-md bg-white px-4 py-4 mb-3">
            <div className="text-lg font-bold text-orange-700 mb-1">Find Help Instantly</div>
            <div className="text-base font-semibold text-gray-800 mb-2">India's Most Trusted <span className="text-orange-600">Toll-Free Directory</span></div>
            <div className="text-gray-600 text-sm mb-3">Get quick access to verified toll-free numbers for essential services and top businesses across India.</div>
            <div className="flex gap-2 mb-2">
              <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold">Verified Data</span>
              <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold">Updated Daily</span>
            </div>
          </div>
          {/* Helpline Directory Card */}
          <div className="rounded-xl shadow-md bg-white px-4 py-4 mb-3">
            <div className="text-base font-bold text-orange-700 mb-2">India Helpline Directory</div>
            <select className="w-full px-3 py-2 mb-2 rounded-lg border border-orange-200 focus:ring-2 focus:ring-orange-400 text-sm font-semibold bg-orange-50 text-orange-700">
              <option>Emergency</option>
              <option>Health & Medical</option>
              <option>Women & Children</option>
              <option>Senior Citizens</option>
              <option>Cyber & Financial</option>
              <option>Transport & Travel</option>
              <option>Civic Services</option>
              <option>Govt & Legal</option>
            </select>
            <button className="w-full py-2 rounded-lg bg-orange-500 text-white font-bold shadow hover:bg-orange-600 transition mb-2">Emergency</button>
            {/* Example helpline numbers, replace with your dynamic content */}
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg bg-orange-50 p-2 text-center">
                <div className="text-orange-700 font-bold text-sm">Police</div>
                <div className="text-blue-700 font-mono text-xs">100</div>
              </div>
              <div className="rounded-lg bg-orange-50 p-2 text-center">
                <div className="text-orange-700 font-bold text-sm">Fire</div>
                <div className="text-blue-700 font-mono text-xs">101</div>
              </div>
            </div>
          </div>
        </div>

        {/* Left Box */}
        <div className="w-full md:w-[65%] bg-[#fff] rounded-xl shadow-xl p-4 md:p-6 border border-orange-100/70 overflow-hidden mb-4 md:mb-0">

          <p className="text-sm font-medium text-orange-600 uppercase mb-2 tracking-wide">
            Find Help Instantly — No More Scams or Fake Numbers
          </p>

          <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight">
            India's Most Trusted <span className="text-orange-600">Toll-Free Directory</span>
          </h1>

          <p className="text-gray-600 text-md mb-4 max-w-2xl">
            Get quick access to verified toll-free numbers for essential services and top businesses across India.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-4 mb-6 text-sm">
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-gray-700">
              <Shield className="h-4 w-4" /> Verified Data
            </div>
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-gray-700">
              <Clock className="h-4 w-4" /> Updated Daily
            </div>
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-gray-700">
              <Users className="h-4 w-4" /> 10M+ Searches
            </div>
          </div>

          {/* Search Box */}
<form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-1 items-center">
  
  {/* Location Dropdown */}
  <div className="relative w-full md:w-[30%]">
    <div className="absolute left-3 top-3.5 text-orange-600">
      <Globe className="h-5 w-5" />
    </div>
    <input
      type="text"
      value={userState}
      readOnly
      className="w-full pl-10 pr-4 py-3 rounded-lg bg-white border border-orange-400 text-orange-700 font-medium shadow-sm cursor-default"
    />
  </div>

  {/* Business Search Input */}
  <div className="relative w-full md:w-[45%]">
    <Building2 className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
    <input
      type="text"
      placeholder={`Search ${placeholderText}`}
      value={business}
      onChange={(e) => setBusiness(e.target.value)}
      className="w-full pl-10 pr-12 py-3 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none text-sm shadow-sm"
    />
    {/* Mic icon for voice typing */}
    <button
      type="button"
      onClick={handleMicClick}
      className={`absolute right-3 top-2.5 h-6 w-6 flex items-center justify-center rounded-full transition-colors ${isListening ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-400'} focus:outline-none`}
      aria-label="Voice Search"
      tabIndex={0}
    >
      <Mic className={`h-5 w-5 ${isListening ? 'animate-pulse' : ''}`} />
    </button>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all w-full md:w-auto shadow-md hover:shadow-lg"
  >
    <Search className="inline-block w-4 h-4 mr-2" />
    Search
  </button>
</form>

          {/* Stats */}
          <div className="mt-6">
  <div className="bg-white border border-gray-200 rounded-xl px-4 sm:px-6 py-5 shadow-md flex flex-col sm:flex-row justify-between items-center gap-2">
    {[
      { value: 50000, suffix: '+', label: 'Verified Toll-Free Numbers' },
      { value: 99.9, suffix: '%', label: 'Accuracy Rate' },
      { value: 24, suffix: '/7', label: 'Support' },
      { value: 2022, suffix: '', label: 'Since', noComma: true }
    ].map((stat, index) => (
      <div key={index} className="text-center sm:text-left">
        <div className="text-[20px] sm:text-[27px] font-bold text-gray-900 leading-tight">
          <CountUp
            end={stat.value}
            suffix={stat.suffix}
            duration={1.8}
            separator={stat.noComma ? '' : ','}
            enableScrollSpy
            scrollSpyOnce
          />
        </div>
        <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
      </div>
    ))}
  </div>
          </div>

          {/* Features */}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-600 border-t border-gray-200 pt-2">
            <div className="flex items-center gap-2">✓ No Registration Required</div>
            <div className="flex items-center gap-2">✓ Completely Free</div>
            {/* <div className="flex items-center gap-2">✓ No Spam Guarantee</div> */}
            <div className="flex items-center gap-2">🔒 Secure & Private</div>
          </div>
        </div>

        {/* Right Box - Circular Helpline Directory */}
        <div className="w-full md:w-[35%] bg-white rounded-xl shadow-xl p-4 md:p-6 border border-orange-100/70 overflow-hidden relative">
          <div className="absolute -bottom-6 w-20 h-20 rounded-full bg-[#000080] opacity-5"></div>

          <div className="h-full flex flex-col">
            <h2 className="text-lg font-bold text-gray-800 mb-4">🆘 India Helpline Directory</h2>

            {/* Category Selector */}
            <div className="mb-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none bg-white"
              >
                {Object.entries(helplineCategories).map(([key, category]) => (
                  <option key={key} value={key}>
                    {category.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Current Category Title */}
            <div className={`mb-4 p-3 rounded-lg bg-gradient-to-r ${currentCategory.color} text-white text-center`}>
              <h3 className="font-semibold text-sm">{currentCategory.title}</h3>
              <p className="text-xs opacity-90">{currentCategory.services.length} services available</p>
            </div>

            {/* Circular Services Grid */}
            <div className="flex-1 overflow-y-auto">
              <div className="grid grid-cols-3 gap-3">
                {displayedServices.map((service, index) => {
                  const Icon = service.icon;
                return (
                  <div
                    key={index}
                      onClick={() => handleCall(service.title, service.number)}
                      className="cursor-pointer hover:bg-orange-50 transition-all duration-200 hover:scale-[1.02] p-2 rounded-lg text-center shadow-sm hover:shadow-md border border-gray-100 hover:border-orange-200 group"
                    >
                      {/* Circular Icon */}
                      <div className={`w-12 h-12 bg-gradient-to-r ${currentCategory.color} rounded-full flex items-center justify-center mb-2 mx-auto shadow-lg group-hover:shadow-xl transition-shadow`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      
                      {/* Service Name */}
                      <div className="font-semibold text-gray-800 text-xs leading-tight mb-1 group-hover:text-orange-600 transition-colors">
                        {service.title}
                      </div>
                      
                      {/* Phone Number */}
                      <div className="text-blue-600 font-mono text-xs mb-1">
                        {service.number}
                      </div>
                      
                      {/* 24x7 Badge */}
                      <div className="flex justify-center">
                        {service.available24x7 ? (
                          <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full">24x7</span>
                        ) : (
                          <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">Limited</span>
                        )}
                      </div>
                  </div>
                );
              })}
              </div>
            </div>

            {/* Show More/Less Button */}
            {currentCategory.services.length > 6 && (
              <div className="mt-3 pt-3 border-t border-gray-200">
              <button
                onClick={() => setShowAll(!showAll)}
                  className="w-full flex items-center justify-center gap-2 py-2 px-4 text-sm text-orange-600 hover:text-orange-700 hover:bg-orange-50 rounded-lg transition-colors font-medium"
                >
                  {showAll ? (
                    <>
                      Show Less
                      <ChevronUp className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      +{currentCategory.services.length - 6} More
                      <ChevronDown className="h-4 w-4" />
                    </>
                  )}
              </button>
              </div>
            )}

            {/* Emergency Notice */}
            {/* <div className="mt-3 pt-3 border-t border-gray-200">
              <div className="bg-red-50 border border-red-200 rounded-lg p-2">
                <p className="text-xs text-red-700 text-center">
                  <strong>Emergency:</strong> Dial 112 for immediate assistance
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
// ✅ UPDATED React Component with proper backend integration
import React, { useState, useEffect, useRef, useMemo } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Phone,
  Building2,
  Clock,
  Eye,
  ArrowRight,
  Copy,
  Check,
} from "lucide-react";

const CategorySection = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedNumber, setCopiedNumber] = useState(null);
  const [categories, setCategories] = useState([]);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    axios
      .get("/api/categories/with-subcategories")
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
      });
  }, []);

  const handleCompanyClick = (categoryId, subcategoryId, companySlug) => {
    navigate(`/category/${categoryId}/${subcategoryId}/${companySlug}`);
  };

  const handleViewAllCategories = () => {
    navigate("/category");
  };

  const handleCopyNumber = (e, number, key) => {
    e.stopPropagation();
    navigator.clipboard.writeText(number).then(() => {
      setCopiedNumber(key);
      setTimeout(() => setCopiedNumber(null), 2000);
    });
  };

  const allSubcategories = useMemo(() => {
    return categories.flatMap((category) =>
      (category.subcategories || []).map((sub) => ({
        ...sub,
        parentCategoryId: category._id || category.id,
        parentCategorySlug: category.slug,
        parentCategoryName: category.name,
        subcategorySlug: sub.slug,
        uniqueKey: `${category._id || category.id}-${sub.slug}`,
      }))
    );
  }, [categories]);

  const displayedSubcategories = useMemo(() => {
    let filtered = [];
    const lowerSearch = searchTerm.toLowerCase();

    if (activeCategory === "all") {
      filtered = allSubcategories;
    } else {
      const selected = categories.find(
        (cat) => cat._id === activeCategory || cat.id === activeCategory
      );
      if (selected) {
        filtered = (selected.subcategories || []).map((sub) => ({
          ...sub,
          parentCategoryId: selected._id || selected.id,
          parentCategorySlug: selected.slug,
          parentCategoryName: selected.name,
          subcategorySlug: sub.slug,
          uniqueKey: `${selected._id || selected.id}-${sub.slug}`,
        }));
      }
    }

    if (lowerSearch) {
      filtered = filtered.filter(
        (sub) =>
          sub.name.toLowerCase().includes(lowerSearch) ||
          sub.fullForm?.toLowerCase().includes(lowerSearch) ||
          sub.parentCategoryName?.toLowerCase().includes(lowerSearch)
      );
    }

    return filtered;
  }, [activeCategory, searchTerm, categories, allSubcategories]);

  const getExploreButtonText = () => {
    if (activeCategory === "all") return "Explore All Categories";
    const selected = categories.find(
      (cat) => cat._id === activeCategory || cat.id === activeCategory
    );
    return `View All ${selected?.name || ""}`;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Building2 className="h-4 w-4" /> Business Categories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find <span className="text-orange-600">Verified Numbers</span> by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Browse through our comprehensive directory of verified toll-free numbers organized by industry categories.
          </p>
          <button
            onClick={handleViewAllCategories}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <Building2 className="h-5 w-5" />
            View All Categories
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Filter Buttons & Search */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 border-b border-gray-200 pb-4 gap-3">
            <div className="flex flex-wrap gap-2 flex-grow sm:flex-grow-0">
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setSearchTerm("");
                }}
                className={`px-5 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                  activeCategory === "all"
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-orange-700"
                }`}
              >
                All Businesses
              </button>
              {categories.map((category) => (
                <button
                  key={category._id}
                  onClick={() => {
                    setActiveCategory(category._id);
                    setSearchTerm("");
                  }}
                  className={`px-5 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                    activeCategory === category._id
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-orange-700"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="relative max-w-sm flex-grow min-w-[200px] sm:min-w-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder={`Search ${
                  activeCategory === "all"
                    ? "all businesses..."
                    : `${
                        categories.find((cat) => cat._id === activeCategory)?.name || ""
                      } businesses...`
                }`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none bg-white shadow-sm text-sm"
              />
            </div>
          </div>

          {/* Subcategory Cards */}
          {displayedSubcategories.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {displayedSubcategories.map((subcategory) => {
                const isHdfc = subcategory.name?.toLowerCase().includes("hdfc");
                return (
                  <div
                    key={subcategory.uniqueKey}
                    className="bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition duration-300 flex flex-col border border-gray-100"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm">
                        <img
                          src={subcategory.logo}
                          alt={`${subcategory.name} logo`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            if (!e.target.src.includes("placeholder-logo.png")) {
                              e.target.onerror = null;
                              e.target.src = "/placeholder-logo.png";
                            }
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 leading-tight mb-0.5">
                          {subcategory.name}
                        </h3>
                        <p className="text-sm text-gray-600 leading-snug line-clamp-2">
                          {subcategory.fullForm}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center text-gray-800 font-bold text-base flex-grow">
                        <Phone className="h-4 w-4 text-orange-600 flex-shrink-0 mr-1" />
                        <span className="flex-grow min-w-0 truncate">{subcategory.number}</span>
                        <button
                          onClick={(e) => handleCopyNumber(e, subcategory.number, subcategory.uniqueKey)}
                          className="p-1 rounded-full text-gray-500 hover:bg-gray-200 transition-colors duration-200 flex-shrink-0"
                        >
                          {copiedNumber === subcategory.uniqueKey ? (
                            <Check className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(`tel:${subcategory.number}`);
                        }}
                        className="bg-orange-600 text-white text-sm px-4 py-2 rounded-md hover:bg-orange-700 transition-colors duration-200 shadow-md flex items-center justify-center gap-1 flex-shrink-0 whitespace-nowrap"
                      >
                        <Phone className="h-4 w-4" /> Call Now
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-3 text-sm text-gray-600 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        {subcategory.available24x7 ? (
                          <span className="text-green-600 font-medium">24/7 Available</span>
                        ) : (
                          <span className="text-orange-600 font-medium">Limited Hours</span>
                        )}
                      </div>
                      <span className="text-[11px] text-gray-500 italic">
                        Verified: {subcategory.verifiedDate}
                      </span>
                    </div>

                    <button
                      onClick={() =>
                        handleCompanyClick(
                          isHdfc ? "banking" : subcategory.parentCategorySlug,
                          isHdfc ? "private-banks" : subcategory.subcategorySlug,
                          isHdfc ? "hdfc-bank" : subcategory.slug
                        )
                      }
                      className="mt-4 w-full bg-orange-50 text-orange-700 font-semibold px-4 py-2 rounded-lg hover:bg-orange-100 transition-colors flex items-center justify-center gap-2 text-sm"
                    >
                      View More Details
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-200">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Results Found</h3>
              <p className="text-gray-600 mb-4 max-w-sm mx-auto">
                We couldn't find any listings matching "
                <span className="font-semibold text-orange-600">{searchTerm}</span>".
              </p>
              <button
                onClick={() => setSearchTerm("")}
                className="inline-flex items-center gap-2 text-orange-600 bg-orange-100 hover:bg-orange-200 font-medium px-4 py-2 rounded-lg transition-colors"
              >
                Clear Search
                <Eye className="h-4 w-4" />
              </button>
            </div>
          )}

          <div className="flex justify-center sm:justify-end pt-6 border-t border-gray-200 mt-8">
            <button
              onClick={handleViewAllCategories}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm"
            >
              <Building2 className="h-4 w-4" />
              {getExploreButtonText()}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
import React, { useState, useRef, useEffect } from 'react';
import IndiaMap from '../assets/india-map.svg?react';
import { MapPin, ArrowRight, Users, Shield, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const statesData = [
  {
    id: 'maharashtra',
    svgId: 'INMH',
    name: 'Maharashtra',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
    description: 'Toll-Free: 1800-222-111 | Emergency: 100, 101, 108'
  },
  {
    id: 'delhi',
    svgId: 'INDL',
    name: 'Delhi',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=300&h=200&fit=crop',
    description: 'Toll-Free: 1800-110-001 | Emergency: 100, 102, 1091'
  },
  {
    id: 'karnataka',
    svgId: 'INKA',
    name: 'Karnataka',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
    description: 'Toll-Free: 1800-425-9339 | Emergency: 100, 108, 1098'
  },
  {
    id: 'tamil_nadu',
    svgId: 'INTN',
    name: 'Tamil Nadu',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
    description: 'Toll-Free: 1800-425-0111 | Emergency: 100, 101, 108'
  },
  {
    id: 'andhra_pradesh',
    svgId: 'INAP',
    name: 'Andhra Pradesh',
    image: 'https://images.unsplash.com/photo-1583663848692-6b3f4764cf0b?fit=crop&w=300&h=200',
    description: 'CM Helpline: 1902 | Electricity: 1912'
  },
  {
    id: 'arunachal_pradesh',
    svgId: 'INAR',
    name: 'Arunachal Pradesh',
    image: 'https://images.unsplash.com/photo-1625121342044-b3b94fd3f3b9?fit=crop&w=300&h=200',
    description: 'CM Helpline: 155250 | Electricity: 0370-2290065'
  },
  {
    id: 'assam',
    svgId: 'INAS',
    name: 'Assam',
    image: 'https://images.unsplash.com/photo-1595847135932-27cba8e90d2b?fit=crop&w=300&h=200',
    description: 'CM Helpline: 1100 | Electricity: 1912'
  },
  {
    id: 'bihar',
    svgId: 'INBR',
    name: 'Bihar',
    image: 'https://images.unsplash.com/photo-1598003789764-2a6d5272ab6c?fit=crop&w=300&h=200',
    description: 'CM Helpline: 1905 | Electricity: 1912'
  },
  {
    id: 'chhattisgarh',
    svgId: 'INCJ',
    name: 'Chhattisgarh',
    image: 'https://images.unsplash.com/photo-1620733100472-27c87b8e76ae?fit=crop&w=300&h=200',
    description: 'CM Helpline: 1100 | Electricity: 1912'
  },
  {
    id: 'goa',
    svgId: 'INGA',
    name: 'Goa',
    image: 'https://images.unsplash.com/photo-1601275802430-4b7b8d7932c0?fit=crop&w=300&h=200',
    description: 'CM Helpline: 155250 | Electricity: 1912'
  },
  {
    id: 'gujarat',
    svgId: 'INGJ',
    name: 'Gujarat',
    image: 'https://images.unsplash.com/photo-1582721052784-4cc5df1944ec?fit=crop&w=300&h=200',
    description: 'CM Helpline: 1100 | Electricity: 1800-233-3003'
  },
  {
    id: 'haryana',
    svgId: 'INHR',
    name: 'Haryana',
    image: 'https://images.unsplash.com/photo-1646792006724-3cf61c56d93f?fit=crop&w=300&h=200',
    description: 'CM Helpline: 1100 | Electricity: 1912'
  },
  {
    id: 'himachal_pradesh',
    svgId: 'INHP',
    name: 'Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?fit=crop&w=300&h=200',
    description: 'CM Helpline: 1100 | Electricity: 1912'
  },
  {
    id: 'jharkhand',
    svgId: 'INJH',
    name: 'Jharkhand',
    image: 'https://images.unsplash.com/photo-1580137189272-c9379b0f6d0a?fit=crop&w=300&h=200',
    description: 'CM Helpline: 181 | Electricity: 1912'
  },
  {
    id: 'karnataka',
    svgId: 'INKA',
    name: 'Karnataka',
    image: 'https://images.unsplash.com/photo-1593951553463-e9ef97ed80ae?fit=crop&w=300&h=200',
    description: 'CM Helpline: 1902 | Electricity: 1912'
  },
  {
    id: 'kerala',
    svgId: 'INKL',
    name: 'Kerala',
    image: 'https://images.unsplash.com/photo-1628164603882-80ae51cd74cc?fit=crop&w=300&h=200',
    description: 'CM Helpline: 155300 | Electricity: 1912'
  },
  {
    id: 'madhya_pradesh',
    svgId: 'INMP',
    name: 'Madhya Pradesh',
    image: 'https://images.unsplash.com/photo-1603701973586-2c2acacdb138?fit=crop&w=300&h=200',
    description: 'CM Helpline: 181 | Electricity: 1912'
  },
  {
    id: 'maharashtra',
    svgId: 'INMH',
    name: 'Maharashtra',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?fit=crop&w=300&h=200',
    description: 'CM Helpline: 1800-222-111 | Electricity: 1912'
  },
  {
    id: 'manipur',
    svgId: 'INMN',
    name: 'Manipur',
    image: 'https://images.unsplash.com/photo-1582223151283-877dc7b2b8aa?fit=crop&w=300&h=200',
    description: 'CM Helpline: 181 | Electricity: 1912'
  },
  {
    id: 'meghalaya',
    svgId: 'INML',
    name: 'Meghalaya',
    image: 'https://images.unsplash.com/photo-1608710449164-4a7cf6ea45fb?fit=crop&w=300&h=200',
    description: 'CM Helpline: 14410 | Electricity: 1912'
  },
  {
    id: 'mizoram',
    svgId: 'INMZ',
    name: 'Mizoram',
    image: 'https://images.unsplash.com/photo-1616052488425-2a785b42abbb?fit=crop&w=300&h=200',
    description: 'CM Helpline: 1098 | Electricity: 1912'
  },
  {
    id: 'nagaland',
    svgId: 'INNL',
    name: 'Nagaland',
    image: 'https://images.unsplash.com/photo-1617032023622-3859651d4623?fit=crop&w=300&h=200',
    description: 'CM Helpline: 112 | Electricity: 1912'
  },
  {
    id: 'odisha',
    svgId: 'INOR',
    name: 'Odisha',
    image: 'https://images.unsplash.com/photo-1574169207510-8c4f5e6ffeb6?fit=crop&w=300&h=200',
    description: 'CM Helpline: 155335 | Electricity: 1912'
  },
  {
    id: 'punjab',
    svgId: 'INPB',
    name: 'Punjab',
    image: 'https://images.unsplash.com/photo-1606813817202-7ff21d7d011a?fit=crop&w=300&h=200',
    description: 'CM Helpline: 1100 | Electricity: 1912'
  },
  {
    id: 'rajasthan',
    svgId: 'INRJ',
    name: 'Rajasthan',
    image: 'https://images.unsplash.com/photo-1585155777343-92a6e7422db5?fit=crop&w=300&h=200',
    description: 'CM Helpline: 181 | Electricity: 1912'
  },
  {
    id: 'sikkim',
    svgId: 'INSK',
    name: 'Sikkim',
    image: 'https://images.unsplash.com/photo-1624110052441-d1f7d01f55cb?fit=crop&w=300&h=200',
    description: 'CM Helpline: 181 | Electricity: 03592-202233'
  },
  {
    id: 'tamil_nadu',
    svgId: 'INTN',
    name: 'Tamil Nadu',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?fit=crop&w=300&h=200',
    description: 'CM Helpline: 1100 | Electricity: 1912'
  },
  {
    id: 'telangana',
    svgId: 'INTG',
    name: 'Telangana',
    image: 'https://images.unsplash.com/photo-1600346025101-7c210c0cb2d4?fit=crop&w=300&h=200',
    description: 'CM Helpline: 1902 | Electricity: 1912'
  },
  {
    id: 'tripura',
    svgId: 'INTR',
    name: 'Tripura',
    image: 'https://images.unsplash.com/photo-1632445487276-d75db8579c8c?fit=crop&w=300&h=200',
    description: 'CM Helpline: 1905 | Electricity: 1912'
  },
  {
    id: 'uttar_pradesh',
    svgId: 'INUP',
    name: 'Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1594810909394-eae57a1808d5?fit=crop&w=300&h=200',
    description: 'CM Helpline: 1076 | Electricity: 1912'
  },
  {
    id: 'uttarakhand',
    svgId: 'INUT',
    name: 'Uttarakhand',
    image: 'https://images.unsplash.com/photo-1612110806494-bc2b1e75c9cc?fit=crop&w=300&h=200',
    description: 'CM Helpline: 1905 | Electricity: 1912'
  },
  {
    id: 'west_bengal',
    svgId: 'INWB',
    name: 'West Bengal',
    image: 'https://images.unsplash.com/photo-1606464714196-c4cc6615f4fa?fit=crop&w=300&h=200',
    description: 'CM Helpline: 100 | Electricity: 1912'
  },

  // Union Territories
  {
    id: 'delhi',
    svgId: 'INDL',
    name: 'Delhi',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?fit=crop&w=300&h=200',
    description: 'CM Helpline: 1031 | Electricity: 19123'
  },
  {
    id: 'jammu_kashmir',
    svgId: 'INJK',
    name: 'Jammu & Kashmir',
    image: 'https://images.unsplash.com/photo-1570696164395-426b7f3d5a70?fit=crop&w=300&h=200',
    description: 'CM Helpline: 155255 | Electricity: 1912'
  },
  {
    id: 'ladakh',
    svgId: 'INLA',
    name: 'Ladakh',
    image: 'https://images.unsplash.com/photo-1623160937084-9a4c55dc5986?fit=crop&w=300&h=200',
    description: 'CM Helpline: 100 | Electricity: 1912'
  },
  {
    id: 'andaman_nicobar',
    svgId: 'INAN',
    name: 'Andaman & Nicobar',
    image: 'https://images.unsplash.com/photo-1608806307311-26c2c3f7926a?fit=crop&w=300&h=200',
    description: 'CM Helpline: 112 | Electricity: 1912'
  },
  {
    id: 'chandigarh',
    svgId: 'INCH',
    name: 'Chandigarh',
    image: 'https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?fit=crop&w=300&h=200',
    description: 'CM Helpline: 112 | Electricity: 1912'
  },
  {
    id: 'puducherry',
    svgId: 'INPY',
    name: 'Puducherry',
    image: 'https://images.unsplash.com/photo-1601034874029-3c04643f9e8f?fit=crop&w=300&h=200',
    description: 'CM Helpline: 1031 | Electricity: 1912'
  },
  {
    id: 'dadra_nagar_haveli',
    svgId: 'INDN',
    name: 'Dadra & Nagar Haveli',
    image: 'https://images.unsplash.com/photo-1543832977-85db68f1b4df?fit=crop&w=300&h=200',
    description: 'CM Helpline: 100 | Electricity: 1912'
  },
  {
    id: 'daman_diu',
    svgId: 'INDD',
    name: 'Daman & Diu',
    image: 'https://images.unsplash.com/photo-1632445438965-e2d474e6ea9a?fit=crop&w=300&h=200',
    description: 'CM Helpline: 100 | Electricity: 1912'
  }
];

const stats = [
  { icon: MapPin, label: 'States Covered', value: '28+' },
  { icon: Shield, label: 'Emergency Numbers', value: '500+' },
  { icon: Phone, label: 'Verified Numbers', value: '2000+' },
  { icon: Users, label: 'Daily Searches', value: '50K+' }
];

const StatewiseSection = () => {
  const [hoveredState, setHoveredState] = useState(null);
  const [popupPos, setPopupPos] = useState({ x: 0, y: 0 });
  const mapRef = useRef(null);

  const handleStateHover = (stateId, evt) => {
    const state = statesData.find(s => s.id === stateId);
    if (state) {
      setHoveredState(state);
      if (evt) {
        const svgRect = mapRef.current.getBoundingClientRect();
        setPopupPos({
          x: evt.clientX - svgRect.left,
          y: evt.clientY - svgRect.top
        });
      }
    }
  };

  const handleStateLeave = () => {
    setHoveredState(null);
  };

  const handleRedirect = () => {
    window.location.href = '/statewise-numbers';
  };

  useEffect(() => {
    const svgDoc = mapRef.current;
    if (!svgDoc) return;

    statesData.forEach(({ id, svgId }) => {
      const el = svgDoc.getElementById(svgId);
      if (el) {
        el.style.cursor = 'pointer';
        el.style.fill = '#fb923c';
        el.style.transition = 'fill 0.25s';
        el.addEventListener('mouseenter', (evt) => {
          handleStateHover(id, evt);
          el.style.fill = '#ea580c';
        });
        el.addEventListener('mousemove', (evt) => handleStateHover(id, evt));
        el.addEventListener('mouseleave', () => {
          handleStateLeave();
          el.style.fill = '#fb923c';
        });
      }
    });

    return () => {
      statesData.forEach(({ svgId }) => {
        const el = svgDoc.getElementById(svgId);
        if (el) {
          el.onmouseenter = null;
          el.onmouseleave = null;
          el.onmousemove = null;
          el.style.fill = '#fb923c';
        }
      });
    };
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MapPin className="h-4 w-4" />
            State Directory
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Numbers by <span className="text-orange-600">Indian States</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access state-specific toll-free numbers, emergency services, and government helplines organized by location across India.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl overflow-hidden shadow-xl border border-orange-200">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Explore State-wise <br />
                <span className="text-orange-600">Helpline Directory</span>
              </h3>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Get instant access to verified contact numbers for government services, emergency helplines, 
                and essential services specific to your state. All numbers are regularly updated and verified.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-orange-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                          <Icon className="h-5 w-5 text-orange-600" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={handleRedirect}
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3"
              >
                Browse State Directory
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative p-8 lg:p-12">
              <div onClick={handleRedirect} className="relative group cursor-pointer">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-white group-hover:shadow-3xl transition-transform transform group-hover:scale-105">
                <div className="flex items-center justify-center">
                    <svg
                      ref={mapRef}
                      viewBox="0 0 1000 1200"
                      className="w-full max-w-[420px] h-auto drop-shadow-lg"
                    style={{ position: 'relative', zIndex: 1 }}
                    >
                      <IndiaMap />
                    </svg>

                  <AnimatePresence>
                    {hoveredState && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="absolute z-50"
                        style={{
                          left: popupPos.x + 20,
                          top: popupPos.y - 40,
                          pointerEvents: 'none',
                          background: 'rgba(255,255,255,0.85)',
                          borderRadius: '0.75rem',
                          boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
                          padding: '0.65rem 0.85rem',
                          maxWidth: '180px',
                          minWidth: '120px',
                          backdropFilter: 'blur(2px)',
                        }}
                      >
                        <img 
                          src={hoveredState.image} 
                          alt={hoveredState.name}
                          className="w-full h-10 object-cover rounded mb-1 opacity-80 border border-orange-100"
                        />
                        <h4 className="font-bold text-orange-700 mb-1 text-xs text-center">
                          {hoveredState.name}
                        </h4>
                        <p className="text-[11px] text-gray-700 font-medium text-center">
                          {hoveredState.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-orange-500 text-white rounded-full p-3 shadow-lg animate-bounce">
                  <Phone className="h-5 w-5" />
                </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white rounded-full p-3 shadow-lg animate-bounce"
                style={{ animationDelay: '1s' }}>
                  <Shield className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatewiseSection;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail, Phone, MapPin, Clock, Send, User, Building2,
  MessageSquare, ArrowRight, Shield, CheckCircle, Globe
} from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91-1800-123-4567',
      description: 'Mon-Fri 9AM to 6PM IST'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'support@newmessmedia.com',
      description: 'Response within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Mumbai, Maharashtra',
      description: 'India 400001'
    },
    {
      icon: Globe,
      title: 'Live Chat',
      details: 'Available 24/7',
      description: 'Instant support online'
    }
  ];

  const subjects = [
    'General Inquiry',
    'Business Listing',
    'Technical Support',
    'Partnership',
    'Media & Press',
    'Data Correction',
    'Other'
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#F5F7FA] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MessageSquare className="h-4 w-4" />
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            We're Here to <span className="text-orange-600">Help You</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our directory services? Need help with business listing? 
            Our dedicated support team is ready to assist you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-orange-50 transition-colors group cursor-pointer"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                        <Icon className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-orange-600 font-medium mb-1">{item.details}</p>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Trust Indicators */}
              {/* <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                  <Shield className="h-4 w-4 text-green-500" />
                  <span>Your data is secure and encrypted</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                  <Clock className="h-4 w-4 text-blue-500" />
                  <span>Quick response guaranteed</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-orange-500" />
                  <span>Trusted by 10M+ users</span>
                </div>
              </div> */}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-colors"
                            placeholder="Enter your full name"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-colors"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Phone and Company Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-colors"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company/Organization
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-colors"
                            placeholder="Enter company name"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-colors"
                      >
                        <option value="">Select a subject</option>
                        {subjects.map((subject, index) => (
                          <option key={index} value={subject}>{subject}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-colors resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-5 w-5" />
                        </>
                      )}
                    </motion.button>
                  </form>
                </>
              ) : (
                // Success Message
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 text-sm">
                      <strong>What's next?</strong> Our support team will review your message and respond promptly with the information you need.
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              For urgent queries or immediate support, you can reach our customer service team directly.
            </p>
            <motion.a
              href="tel:+91-1800-123-4567"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call Now: +91-1800-123-4567
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
import React, { useState } from 'react';

const faqs = [
  {
    question: "How do I find a customer care number?",
    answer: "Simply search by brand or category (e.g., Banking, Telecom, Shopping) and you'll see verified toll-free numbers instantly.\n\n- No login required\n- Free for everyone\n- Works 24x7"
  },
  {
    question: "Are these numbers verified?",
    answer: "Yes, our team manually verifies each number from official brand websites and trusted sources."
  },
  {
    question: "Can I report a wrong number?",
    answer: "Absolutely! Each listing has a 'Report' option. You can also email us at report@indiancustomerhelp.com."
  },
  {
    question: "Do you support all Indian brands?",
    answer: "We currently support over 500+ brands across Telecom, Banking, Shopping, Healthcare, Travel, and more. New entries are added weekly."
  },
  {
    question: "Is this service free?",
    answer: "Yes, Indian Customer Help is 100% free for users. No subscription, no sign-up needed."
  },
  {
    question: "Can I suggest a company to be added?",
    answer: "Yes! Use our suggestion form or email support@indiancustomerhelp.com to recommend a missing brand."
  },
  {
    question: "How often is the data updated?",
    answer: "Our team updates toll-free numbers and support info every 7 days to ensure accuracy."
  },
  {
    question: "Is there a mobile app available?",
    answer: "A mobile app is currently under development and will be released soon for Android and iOS users."
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-7xl mx-auto py-20 px-4 md:px-8">
      <div className="flex flex-col md:flex-row gap-12 md:gap-0">
        {/* Left: Heading, Description, Button */}
        <div className="md:w-[38%] flex flex-col justify-start mb-10 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Helping you connect with brands faster
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8">
            Indian Customer Help is your go-to directory for verified toll-free numbers of major Indian companies. Whether it's a refund, complaint, or general support — we've got you covered.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-md text-base shadow-md transition-colors w-fit">
            BROWSE DIRECTORY
          </button>
        </div>
        {/* Right: FAQ Accordion */}
        <div className="md:w-[62%] flex flex-col gap-2">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="border-b border-gray-200 last:border-b-0">
                <button
                  className={`w-full flex items-center justify-between py-5 px-2 md:px-6 text-left focus:outline-none transition-colors ${isOpen ? 'font-bold text-gray-900' : 'text-purple-700 font-semibold hover:text-purple-900'}`}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <span className="text-base md:text-lg">{faq.question}</span>
                  <span className={`ml-4 flex items-center justify-center rounded-full border-2 border-purple-300 w-8 h-8 transition-colors ${isOpen ? 'bg-purple-600 border-purple-600' : 'bg-white'}`}>
                    <span className={`text-2xl font-bold transition-transform ${isOpen ? 'text-white rotate-45' : 'text-purple-600'}`}>+</span>
                  </span>
                </button>
                {isOpen && (
                  <div className="pl-2 md:pl-6 pb-6 text-gray-700 text-sm md:text-base animate-fadeIn">
                    {faq.answer.split('\n').map((line, i) =>
                      line.trim().startsWith('-') ? (
                        <li key={i} className="ml-6 list-disc">{line.replace('-', '').trim()}</li>
                      ) : (
                        <p key={i} className="mb-2">{line}</p>
                      )
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.2s ease; }
      `}</style>
    </section>
  );
};

export default FAQSection;

