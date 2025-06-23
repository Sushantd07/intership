import React, { useState, useEffect } from 'react';
import {
  Search, Building2, Shield, Clock, Users,
  PhoneCall, HeartPulse, Flame, Baby, Brain,
  Pill, ShieldCheck, UserCheck, Globe
} from 'lucide-react';

const HeroSection = () => {
  const [business, setBusiness] = useState('');
  const [placeholderText, setPlaceholderText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  const placeholderWords = ['JIO', 'AMAZON', 'AIRTEL', 'ICICI', 'SWIGGY', 'ZOMATO'];

  // Typing animation logic
  useEffect(() => {
    const currentWord = placeholderWords[wordIndex];
    const updatedText = isDeleting
      ? currentWord.substring(0, placeholderText.length - 1)
      : currentWord.substring(0, placeholderText.length + 1);

    setPlaceholderText(updatedText);

    const timeout = setTimeout(() => {
      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % placeholderWords.length);
      }
    }, isDeleting ? 80 : 150);

    return () => clearTimeout(timeout);
  }, [placeholderText, isDeleting, wordIndex]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching:', business);
  };

  // Emergency icon and data mapping
  const emergencyItems = [
    { icon: PhoneCall, title: 'Police', number: '100' },
    { icon: HeartPulse, title: 'Ambulance', number: '102' },
    { icon: Flame, title: 'Fire', number: '101' },
    { icon: Baby, title: 'Child Helpline', number: '1098' },
    { icon: Brain, title: 'Mental Health', number: '9152987821' },
    { icon: Pill, title: '24x7 Pharmacy', number: 'Local' },
    { icon: ShieldCheck, title: 'Women Helpline', number: '1091' },
    { icon: UserCheck, title: 'Senior Helpline', number: '14567' },
    { icon: Globe, title: 'Cyber Crime', number: '1930' }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-[#FF9933] via-white to-[#138808] py-4 px-1 sm:px-6 lg:px-12">
      <div className="w-full max-w-7xl mx-auto flex flex-col min-h-[calc(100vh-120px)] md:flex-row gap-6 py-6">

        {/* Left Box */}
        <div className="w-full md:w-[70%] bg-white/90 backdrop-blur-md shadow-xl rounded-xl p-5 md:p-8 mt-[15px] mb-[15px]">
          <p className="text-sm font-medium text-orange-600 uppercase mb-2 tracking-wide">
            Find Help Instantly — No More Scams or Fake Numbers
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
            India’s Most Trusted <span className="text-orange-600">Toll-Free Directory</span>
          </h1>

          <p className="text-gray-600 text-md mb-6 max-w-2xl">
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

          {/* Stats */}
          <div className="mt-8">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col sm:flex-row justify-between items-center">
              <div className="text-center sm:text-left">
                <h4 className="text-3xl font-bold text-gray-800">50,000+</h4>
                <p className="text-sm text-gray-500 mt-1">Verified Toll-Free Numbers</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-600 border-t border-gray-200 pt-4">
            <div className="flex items-center gap-2">✓ No Registration Required</div>
            <div className="flex items-center gap-2">✓ Completely Free</div>
            <div className="flex items-center gap-2">✓ No Spam Guarantee</div>
            <div className="flex items-center gap-2">🔒 Secure & Private</div>
          </div>
        </div>

        {/* Right Box - Emergency */}
        <div className="w-full md:w-[30%] bg-white/90 backdrop-blur-md shadow-xl rounded-xl p-5 md:p-6 mt-[15px] mb-[15px] flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">🚨 Quick Emergency Numbers</h2>
            <div className="grid grid-cols-3 gap-4">
              {emergencyItems.map((item, index) => {
                const Icon = item.icon;
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
