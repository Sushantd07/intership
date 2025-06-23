import React, { useState, useEffect } from 'react';
import { Search, Building2, Shield, Clock, Users, PhoneCall, HeartPulse, Flame, Baby, Brain, Pill, ShieldCheck, UserCheck, Globe } from 'lucide-react';

const HeroSection = () => {
  const [business, setBusiness] = useState('');
  const [placeholderText, setPlaceholderText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [typingForward, setTypingForward] = useState(true);

  const placeholderWords = ['JIO', 'AMAZON', 'AIRTEL', 'ICICI', 'SWIGGY', 'ZOMATO'];

  useEffect(() => {
    const currentWord = placeholderWords[wordIndex];
    let timeout;

    if (typingForward) {
      if (typingIndex < currentWord.length) {
        setPlaceholderText(currentWord.substring(0, typingIndex + 1));
        setTypingIndex(typingIndex + 1);
        timeout = setTimeout(() => {}, 150);
      } else {
        timeout = setTimeout(() => setTypingForward(false), 1000);
      }
    } else {
      if (typingIndex > 0) {
        setPlaceholderText(currentWord.substring(0, typingIndex - 1));
        setTypingIndex(typingIndex - 1);
        timeout = setTimeout(() => {}, 80);
      } else {
        setTypingForward(true);
        setWordIndex((wordIndex + 1) % placeholderWords.length);
      }
    }

    timeout = setTimeout(() => {}, typingForward ? 150 : 80);
    return () => clearTimeout(timeout);
  }, [typingIndex, typingForward, wordIndex]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching:', business);
  };

  const emergencyIcons = [
    PhoneCall, HeartPulse, Flame, Baby, Brain, Pill, ShieldCheck, UserCheck, Globe
  ];

  const emergencyItems = [
    { title: 'Police', number: '100' },
    { title: 'Ambulance', number: '102' },
    { title: 'Fire', number: '101' },
    { title: 'Child Helpline', number: '1098' },
    { title: 'Mental Health', number: '9152987821' },
    { title: '24x7 Pharmacy', number: 'Local' },
    { title: 'Women Helpline', number: '1091' },
    { title: 'Senior Helpline', number: '14567' },
    { title: 'Cyber Crime', number: '1930' },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#FF9933] via-white to-[#138808] px-2 py-4 flex items-start justify-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Left Box */}
        <div className="w-full md:w-[70%] bg-white/90 backdrop-blur-md shadow-xl rounded-xl p-6 m-2 flex flex-col justify-center min-h-[calc(100vh-80px)]">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
            India’s Most Trusted <span className="text-orange-600">Toll-Free Directory</span>
          </h1>
          <p className="text-gray-600 text-md mb-6 max-w-2xl">
            Access verified toll-free numbers from emergency services to top companies.
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

          {/* Search */}
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full md:w-[70%]">
              <Building2 className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder={`Search ${placeholderText}`}
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none text-sm"
              />
            </div>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all w-full md:w-auto"
            >
              <Search className="inline-block w-4 h-4 mr-2" />
              Search
            </button>
          </form>
        </div>

        {/* Right Box */}
        <div className="w-full md:w-[30%] bg-white/90 backdrop-blur-md shadow-xl rounded-xl p-6 m-2 flex flex-col justify-between min-h-[calc(100vh-80px)]">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">🚨 Quick Emergency Numbers</h2>
            <div className="grid grid-cols-3 gap-4">
              {emergencyItems.map((item, index) => {
                const Icon = emergencyIcons[index];
                return (
                  <div
                    key={index}
                    onClick={() => alert(`Calling ${item.title}: ${item.number}`)}
                    className="cursor-pointer bg-gray-100 hover:bg-orange-100 transition-all duration-200 hover:scale-[1.03] p-4 rounded-lg text-center shadow text-sm flex flex-col items-center"
                  >
                    <Icon className="h-6 w-6 text-orange-500 mb-1 animate-pulse" />
                    <div className="font-semibold text-gray-800 mt-1 text-sm text-center">{item.title}</div>
                    <div className="text-xs text-gray-500">{item.number}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-right mt-4">
            <button
              onClick={() => alert('Viewing more emergency contacts...')}
              className="text-sm text-blue-600 hover:text-blue-800 underline font-medium transition"
            >
              View More →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;