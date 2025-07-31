import React, { useState, useRef } from "react";
import {
  Phone,
  Globe,
  Copy,
  Check,
  Star,
  Heart,
  HeartOff,
  Clock,
  ArrowRight,
  Banknote,
  Smartphone,
  Package,
  Tv,
  BookOpen,
  Map,
  Landmark,
  HeartPulse,
  Utensils,
  Gamepad2,
  MonitorSmartphone,
  Wifi,
  Briefcase,
  Bus,
  ShoppingBag,
  Hospital,
  GraduationCap,
  Newspaper,
  Shirt,
  Zap,
  Wallet,
} from "lucide-react";
import { useNavigate } from 'react-router-dom';

// Top 10 categories with relevant icons
const CATEGORY_DATA = [
  {
    name: "Banking Services",
    icon: Banknote,
    subcategories: [
      { id: 'sbi', name: 'State Bank of India', logo: '/company-logos/Bank/sbi_bank.svg', verified: true, phone: '1800 425 3800', tags: ['Bank', 'Customer Care'] },
      { id: 'hdfc', name: 'HDFC Bank', logo: '/company-logos/Bank/hdfc_bank.svg', verified: true, phone: '1800 266 4332', tags: ['Bank', 'Customer Care'] },
      { id: 'icici', name: 'ICICI Bank', logo: '/company-logos/Bank/icici_bank.svg', verified: true, phone: '1800 1080', tags: ['Bank', 'Customer Care'] },
      { id: 'axis', name: 'Axis Bank', logo: '/company-logos/Bank/axis_bank.svg', verified: true, phone: '1800 419 5959', tags: ['Bank', 'Customer Care'] },
      { id: 'bob', name: 'Bank of Baroda', logo: '/company-logos/Bank/bob_bank.svg', verified: true, phone: '1800 5700', tags: ['Bank', 'Customer Care'] },
      { id: 'kotak', name: 'Kotak Mahindra Bank', logo: '/company-logos/Bank/kotak_bank.svg', verified: true, phone: '1860 266 2666', tags: ['Bank', 'Customer Care'] },
      { id: 'pnb', name: 'Punjab National Bank', logo: '/company-logos/Bank/pnb_bank.svg', verified: true, phone: '1800 180 2222', tags: ['Bank', 'Customer Care'] },
      { id: 'union', name: 'Union Bank of India', logo: '/company-logos/Bank/union_bank.svg ', verified: true, phone: '1800 22 2244', tags: ['Bank', 'Customer Care'] },
      { id: 'canara', name: 'Canara Bank', logo: '/company-logos/Bank/canra_bank.png', verified: true, phone: '1800 425 0018', tags: ['Bank', 'Customer Care'] },
      { id: 'indusind', name: 'IndusInd Bank', logo: '', verified: true, phone: '1860 500 5004', tags: ['Bank', 'Customer Care'] },
      { id: 'yes', name: 'Yes Bank', logo: '', verified: true, phone: '1800 1200', tags: ['Bank', 'Customer Care'] },
      { id: 'idfc', name: 'IDFC FIRST Bank', logo: '', verified: true, phone: '1800 419 4332', tags: ['Bank', 'Customer Care'] },
      { id: 'uco', name: 'Jammu and Kashmir Bank', logo: '/company-logos/Bank/jk_bank.png', verified: true, phone: '1800 274 0123', tags: ['Bank', 'Customer Care'] },
      { id: 'central', name: 'Central Bank of India', logo: '', verified: true, phone: '1800 22 1911', tags: ['Bank', 'Customer Care'] },
      { id: 'iob', name: 'Indian Overseas Bank', logo: '', verified: true, phone: '1800 425 4445', tags: ['Bank', 'Customer Care'] },
      { id: 'bankindia', name: 'Bank of India', logo: '', verified: true, phone: '1800 220 229', tags: ['Bank', 'Customer Care'] },
      { id: 'federal', name: 'Federal Bank', logo: '', verified: true, phone: '1800 425 1199', tags: ['Bank', 'Customer Care'] },
      { id: 'bandhan', name: 'Bandhan Bank', logo: '', verified: true, phone: '1800 258 8181', tags: ['Bank', 'Customer Care'] },
      { id: 'rbl', name: 'RBL Bank', logo: '', verified: true, phone: '1800 419 0610', tags: ['Bank', 'Customer Care'] },
      { id: '', name: 'UPI Support', logo: '', verified: true, phone: '1800 120 1740', tags: ['UPI', 'Support'] },
    ]
  },
  {
    name: "Telecom Services",
    icon: Smartphone,
    subcategories: [
      { id: 'jio', name: 'Jio', logo: '', verified: true, phone: '1800 889 9999', tags: ['Telecom', 'Support'] },
      { id: 'airtel', name: 'Airtel', logo: '', verified: true, phone: '121', tags: ['Telecom', 'Support'] },
      { id: 'vi', name: 'Vi (Vodafone Idea)', logo: '', verified: true, phone: '199', tags: ['Telecom', 'Support'] },
      { id: 'bsnl', name: 'BSNL', logo: '', verified: true, phone: '1800 180 1503', tags: ['Telecom', 'Support'] },
      { id: 'mtnl', name: 'MTNL', logo: '', verified: true, phone: '1800 22 1500', tags: ['Telecom', 'Support'] },
      { id: 'tata', name: 'Tata Docomo', logo: '', verified: true, phone: '121', tags: ['Telecom', 'Support'] },
      { id: 'mtnl-delhi', name: 'MTNL Delhi', logo: '', verified: true, phone: '1500', tags: ['Telecom', 'Support'] },
      { id: 'mtnl-mumbai', name: 'MTNL Mumbai', logo: '', verified: true, phone: '1800 22 1500', tags: ['Telecom', 'Support'] },
      { id: 'reliance', name: 'Reliance Communications', logo: '', verified: true, phone: '3033 3333', tags: ['Telecom', 'Support'] },
      { id: 'telenor', name: 'Telenor', logo: '', verified: true, phone: '121', tags: ['Telecom', 'Support'] },
    ]
  },
  {
    name: "Ecommerce Platforms",
    icon: ShoppingBag,
    subcategories: [
      { id: 'amazon', name: 'Amazon', logo: '', verified: true, phone: '1800 3000 9009', tags: ['Shopping', 'Support'] },
      { id: 'flipkart', name: 'Flipkart', logo: '', verified: true, phone: '1800 208 9898', tags: ['Shopping', 'Support'] },
      { id: 'myntra', name: 'Myntra', logo: '', verified: true, phone: '080 6156 1999', tags: ['Shopping', 'Support'] },
      { id: 'snapdeal', name: 'Snapdeal', logo: '', verified: true, phone: '92126 92126', tags: ['Shopping', 'Support'] },
      { id: 'ajio', name: 'AJIO', logo: '', verified: true, phone: '1800 889 9991', tags: ['Shopping', 'Support'] },
      { id: 'tata-cliq', name: 'Tata CLiQ', logo: '', verified: true, phone: '90291 08282', tags: ['Shopping', 'Support'] },
      { id: 'paytm-mall', name: 'Paytm Mall', logo: '', verified: true, phone: '0120 4606060', tags: ['Shopping', 'Support'] },
      { id: 'shopclues', name: 'ShopClues', logo: '', verified: true, phone: '0124 441 4888', tags: ['Shopping', 'Support'] },
      { id: 'limeroad', name: 'LimeRoad', logo: '', verified: true, phone: '0124 6688 800', tags: ['Shopping', 'Support'] },
      { id: 'nykaa', name: 'Nykaa', logo: '', verified: true, phone: '1800 267 4444', tags: ['Shopping', 'Support'] },
    ]
  },
  {
    name: "Insurance Companies",
    icon: HeartPulse,
    subcategories: [
      { id: 'apollo', name: 'Apollo Munich', logo: '', verified: true, phone: '1800 102 0333', tags: ['Insurance', 'Support'] },
      { id: 'star', name: 'Star Health', logo: '', verified: true, phone: '1800 425 2255', tags: ['Insurance', 'Support'] },
      { id: 'hdfc-life', name: 'HDFC Life', logo: '', verified: true, phone: '1860 267 9999', tags: ['Insurance', 'Support'] },
      { id: 'icici-pru', name: 'ICICI Prudential', logo: '', verified: true, phone: '1860 266 7766', tags: ['Insurance', 'Support'] },
      { id: 'new-india', name: 'New India Assurance', logo: '', verified: true, phone: '1800 209 1415', tags: ['Insurance', 'Support'] },
      { id: 'max-bupa', name: 'Niva Bupa', logo: '', verified: true, phone: '1860 500 8888', tags: ['Insurance', 'Support'] },
      { id: 'policybazaar', name: 'PolicyBazaar', logo: '', verified: true, phone: '1800 258 5970', tags: ['Insurance', 'Support'] },
      { id: 'bajaj', name: 'Bajaj Allianz', logo: '', verified: true, phone: '1800 209 5858', tags: ['Insurance', 'Support'] },
      { id: 'sbi-life', name: 'SBI Life', logo: '', verified: true, phone: '1800 267 9090', tags: ['Insurance', 'Support'] },
      { id: 'lic', name: 'LIC', logo: '', verified: true, phone: '022 6827 6827', tags: ['Insurance', 'Support'] },
    ]
  },
  {
    name: "Digital Payment",
    icon: Wallet,
    subcategories: [
      { id: 'paytm', name: 'Paytm', logo: '', verified: true, phone: '0120 4456 456', tags: ['Payments', 'Support'] },
      { id: 'phonepe', name: 'PhonePe', logo: '', verified: true, phone: '080 6872 7388', tags: ['Payments', 'Support'] },
      { id: 'googlepay', name: 'Google Pay', logo: '', verified: true, phone: '1-800-419-0157', tags: ['Payments', 'Support'] },
      { id: 'amazonpay', name: 'Amazon Pay', logo: '', verified: true, phone: '1800 3000 9009', tags: ['Payments', 'Support'] },
      { id: 'mobikwik', name: 'Mobikwik', logo: '', verified: true, phone: '011 6126 6126', tags: ['Payments', 'Support'] },
      { id: 'freecharge', name: 'Freecharge', logo: '', verified: true, phone: '0124 663 4800', tags: ['Payments', 'Support'] },
      { id: 'airtelmoney', name: 'Airtel Money', logo: '', verified: true, phone: '400', tags: ['Payments', 'Support'] },
      { id: 'jio', name: 'Jio Money', logo: '', verified: true, phone: '1800 891 9999', tags: ['Payments', 'Support'] },
      { id: 'olamoney', name: 'Ola Money', logo: '', verified: true, phone: '080 6735 0900', tags: ['Payments', 'Support'] },
      { id: 'itc', name: 'ITC Wallet', logo: '', verified: true, phone: '1800 345 8248', tags: ['Payments', 'Support'] },
    ]
  },
  {
    name: "Payment Gateway",
    icon: Landmark,
    subcategories: [
      { id: 'razorpay', name: 'Razorpay', logo: '', verified: true, phone: '1800 123 1272', tags: ['Gateway', 'Support'] },
      { id: 'ccavenue', name: 'CCAvenue', logo: '', verified: true, phone: '022 6742 5555', tags: ['Gateway', 'Support'] },
      { id: 'payu', name: 'PayU', logo: '', verified: true, phone: '1800 102 9426', tags: ['Gateway', 'Support'] },
      { id: 'instamojo', name: 'Instamojo', logo: '', verified: true, phone: '080 6897 4477', tags: ['Gateway', 'Support'] },
      { id: 'billdesk', name: 'BillDesk', logo: '', verified: true, phone: '1800 102 9426', tags: ['Gateway', 'Support'] },
      { id: 'cashfree', name: 'Cashfree', logo: '', verified: true, phone: '1800 419 4932', tags: ['Gateway', 'Support'] },
      { id: 'paytm-pg', name: 'Paytm Payment Gateway', logo: '', verified: true, phone: '0120 4606060', tags: ['Gateway', 'Support'] },
      { id: 'atom', name: 'Atom', logo: '', verified: true, phone: '1800 209 1515', tags: ['Gateway', 'Support'] },
      { id: 'ebs', name: 'EBS', logo: '', verified: true, phone: '022 6112 0200', tags: ['Gateway', 'Support'] },
      { id: 'paykun', name: 'PayKun', logo: '', verified: true, phone: '1800 212 8376', tags: ['Gateway', 'Support'] },
    ]
  },
  {
    name: "Electronics Appliance",
    icon: MonitorSmartphone,
    subcategories: [
      { id: 'samsung', name: 'Samsung', logo: '', verified: true, phone: '1800 5 7267864', tags: ['Electronics', 'Support'] },
      { id: 'lg', name: 'LG', logo: '', verified: true, phone: '1800 315 9999', tags: ['Electronics', 'Support'] },
      { id: 'sony', name: 'Sony', logo: '', verified: true, phone: '1800 103 7799', tags: ['Electronics', 'Support'] },
      { id: 'panasonic', name: 'Panasonic', logo: '', verified: true, phone: '1800 103 1333', tags: ['Electronics', 'Support'] },
      { id: 'philips', name: 'Philips', logo: '', verified: true, phone: '1800 102 2929', tags: ['Electronics', 'Support'] },
      { id: 'whirlpool', name: 'Whirlpool', logo: '', verified: true, phone: '1800 208 1800', tags: ['Electronics', 'Support'] },
      { id: 'bosch', name: 'Bosch', logo: '', verified: true, phone: '1800 266 1880', tags: ['Electronics', 'Support'] },
      { id: 'haier', name: 'Haier', logo: '', verified: true, phone: '1800 102 9999', tags: ['Electronics', 'Support'] },
      { id: 'voltas', name: 'Voltas', logo: '', verified: true, phone: '1860 599 4555', tags: ['Electronics', 'Support'] },
      { id: 'ifb', name: 'IFB', logo: '', verified: true, phone: '1860 208 5678', tags: ['Electronics', 'Support'] },
    ]
  },
  {
    name: "Stock and Trading",
    icon: Briefcase,
    subcategories: [
      { id: 'zerodha', name: 'Zerodha', logo: '', verified: true, phone: '080 4718 1888', tags: ['Stock', 'Support'] },
      { id: 'upstox', name: 'Upstox', logo: '', verified: true, phone: '022 6130 9999', tags: ['Stock', 'Support'] },
      { id: 'angel', name: 'Angel One', logo: '', verified: true, phone: '1800 102 2728', tags: ['Stock', 'Support'] },
      { id: 'icici', name: 'ICICI Direct', logo: '', verified: true, phone: '1860 123 1122', tags: ['Stock', 'Support'] },
      { id: 'hdfc', name: 'HDFC Securities', logo: '', verified: true, phone: '022 3901 9400', tags: ['Stock', 'Support'] },
      { id: 'motilal', name: 'Motilal Oswal', logo: '', verified: true, phone: '022 4054 2424', tags: ['Stock', 'Support'] },
      { id: 'groww', name: 'Groww', logo: '', verified: true, phone: '91088 00604', tags: ['Stock', 'Support'] },
      { id: '5paisa', name: '5paisa', logo: '', verified: true, phone: '89766 89766', tags: ['Stock', 'Support'] },
      { id: 'sharekhan', name: 'Sharekhan', logo: '', verified: true, phone: '1800 22 7500', tags: ['Stock', 'Support'] },
      { id: 'edelweiss', name: 'Edelweiss', logo: '', verified: true, phone: '1800 102 3335', tags: ['Stock', 'Support'] },
    ]
  },
  {
    name: "Online Betting Apps",
    icon: Gamepad2,
    subcategories: [
      { id: 'dream11', name: 'Dream11', logo: '', verified: true, phone: '1800 572 9878', tags: ['Betting', 'Support'] },
      { id: 'my11circle', name: 'My11Circle', logo: '', verified: true, phone: '1800 572 9878', tags: ['Betting', 'Support'] },
      { id: 'betway', name: 'Betway', logo: '', verified: true, phone: '000 800 443 0067', tags: ['Betting', 'Support'] },
      { id: 'bet365', name: 'Bet365', logo: '', verified: true, phone: '000 800 100 4269', tags: ['Betting', 'Support'] },
      { id: 'adda52', name: 'Adda52', logo: '', verified: true, phone: '1800 3000 0611', tags: ['Betting', 'Support'] },
      { id: 'rummycircle', name: 'RummyCircle', logo: '', verified: true, phone: '1800 419 2929', tags: ['Betting', 'Support'] },
      { id: 'pokerbaazi', name: 'PokerBaazi', logo: '', verified: true, phone: '1800 3000 9648', tags: ['Betting', 'Support'] },
      { id: 'junglee', name: 'Junglee Rummy', logo: '', verified: true, phone: '1800 572 9878', tags: ['Betting', 'Support'] },
      { id: 'mpl', name: 'MPL', logo: '', verified: true, phone: '080 4719 0100', tags: ['Betting', 'Support'] },
      { id: 'winzo', name: 'WinZO', logo: '', verified: true, phone: '1800 572 9878', tags: ['Betting', 'Support'] },
    ]
  },
  {
    name: "Mobile Phone & Accessories",
    icon: Smartphone,
    subcategories: [
      { id: 'apple', name: 'Apple', logo: '', verified: true, phone: '000 800 100 9009', tags: ['Mobile', 'Support'] },
      { id: 'samsung', name: 'Samsung', logo: '', verified: true, phone: '1800 5 7267864', tags: ['Mobile', 'Support'] },
      { id: 'xiaomi', name: 'Xiaomi', logo: '', verified: true, phone: '1800 103 6286', tags: ['Mobile', 'Support'] },
      { id: 'oneplus', name: 'OnePlus', logo: '', verified: true, phone: '1800 102 8411', tags: ['Mobile', 'Support'] },
      { id: 'realme', name: 'Realme', logo: '', verified: true, phone: '1800 102 2777', tags: ['Mobile', 'Support'] },
      { id: 'oppo', name: 'Oppo', logo: '', verified: true, phone: '1800 103 2777', tags: ['Mobile', 'Support'] },
      { id: 'vivo', name: 'Vivo', logo: '', verified: true, phone: '1800 208 3388', tags: ['Mobile', 'Support'] },
      { id: 'motorola', name: 'Motorola', logo: '', verified: true, phone: '1800 102 2344', tags: ['Mobile', 'Support'] },
      { id: 'nokia', name: 'Nokia', logo: '', verified: true, phone: '1800 102 6162', tags: ['Mobile', 'Support'] },
      { id: 'itel', name: 'Itel', logo: '', verified: true, phone: '1800 419 0525', tags: ['Mobile', 'Support'] },
    ]
  },
];

const TOP_CONTACTS = [
  {
    id: 1,
    name: "Bank Of Baroda",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Bank_of_Baroda_logo.svg/512px-Bank_of_Baroda_logo.svg.png",
    verified: true,
    rating: 5,
    ratingCount: 1,
    address: "All India",
    timing: "Mon - Tue 9:00 AM - 5:00 PM",
    phone: "1800 5700",
    website: "#",
    tags: ["Bank", "Customer Care"],
  },
  {
    id: 2,
    name: "Netdhara",
    logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // Sample IT icon
    verified: true,
    rating: 5,
    ratingCount: 1,
    address: "Shantoshi Nagar Mathpurena",
    timing: "Mon - Sun 9:00 AM - 6:00 PM",
    phone: "9098391714",
    website: "#",
    tags: ["Social Media Ads", "App Designing", "Website Design"],
  },
 
];

const CategoryGridCompanyList = () => {
  const [copied, setCopied] = useState(null);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [search, setSearch] = useState("");
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);
  const navigate = useNavigate();

  const handleCopy = (number, id) => {
    navigator.clipboard.writeText(number);
    setCopied(id);
    setTimeout(() => setCopied(null), 1500);
  };

  const handleFavorite = (id) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // Voice search logic for right container
  const handleMicClick = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert('Speech recognition not supported in this browser.');
      return;
    }
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!recognitionRef.current) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.lang = 'en-IN';
      recognitionRef.current.interimResults = false;
      recognitionRef.current.maxAlternatives = 1;
      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearch(transcript);
        setListening(false);
      };
      recognitionRef.current.onend = () => setListening(false);
      recognitionRef.current.onerror = () => setListening(false);
    }
    if (!listening) {
      setListening(true);
      recognitionRef.current.start();
    } else {
      setListening(false);
      recognitionRef.current.stop();
    }
  };

  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState(0);
  const selectedCategory = CATEGORY_DATA[selectedCategoryIdx];
  const subcategoryContacts = selectedCategory.subcategories;
  // Filtered contacts for right container
  const filteredContacts = subcategoryContacts.filter(co =>
    co.name.toLowerCase().includes(search.toLowerCase()) ||
    (co.tags && co.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))) ||
    (co.phone && co.phone.includes(search))
  );

  return (
    <section className="relative py-10 bg-gradient-to-br from-orange-50 via-white to-orange-100 overflow-hidden">
      {/* Decorative abstract background shape */}
      <div className="absolute -top-24 -left-32 w-[480px] h-[480px] bg-gradient-to-tr from-orange-200 via-orange-100 to-white rounded-full blur-3xl opacity-60 z-0"></div>
      <div className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-4xl font-extrabold mb-4 tracking-tight text-gray-900 leading-tight">
            Discover <span className="text-orange-600 bg-orange-100 px-2 rounded">Top Categories</span> & Trusted Contacts
          </h1>
          <p className="text-lg md:text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Instantly access verified support and essential services for banking, telecom, shopping, healthcare, and more—all in one place.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-7 py-3 rounded-full shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all text-base"
              onClick={() => navigate('/category')}
            >
              Explore All Categories
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col md:flex-row items-start gap-0 overflow-hidden">
          {/* Left: Top Categories */}
          <div className="w-full md:w-[32%] flex flex-col p-6 pt-8 md:pt-8 border-b md:border-b-0 md:border-r border-gray-100">
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2 mt-0">Top Categories</h2>
              <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-3 gap-4 mb-0 mt-10">
                {CATEGORY_DATA.map((cat, idx) => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.name}
                      onClick={() => setSelectedCategoryIdx(idx)}
                      className={`flex flex-col items-center rounded-lg p-3 shadow-sm border transition-all duration-200 group 
                        ${selectedCategoryIdx === idx ? 'border-orange-500 bg-orange-50 scale-105 shadow-md' : 'border-gray-100 bg-white'}
                        hover:bg-orange-100 hover:shadow-lg hover:scale-105`}
                      style={{ outline: 'none' }}
                    >
                      <div className="w-8 h-8 flex items-center justify-center mb-1 text-xl">
                          <Icon className="h-5 w-5 text-orange-600" />
                      </div>
                      <span className="text-xs text-gray-700 font-semibold text-center">
                        {cat.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-end mt-8">
              <button className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all text-base"
                onClick={() => navigate('/category')}
              >
                <Newspaper className="h-5 w-5 text-white" />
                Explore All Categories
                <ArrowRight className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
          {/* Right: Company Cards */}
          <div className="w-full md:w-[68%] flex flex-col justify-between p-6 pt-8 md:pt-8">
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 mt-0">
                <h2 className="text-xl font-bold text-gray-800 mb-2 mt-0">Top Contacts</h2>
                <div className="relative w-full sm:w-auto sm:max-w-xs">
                  <svg className="lucide lucide-search absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
              <input
                type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search contacts..."
                className="w-full pl-12 pr-12 py-2.5 rounded-full bg-gray-50 border border-orange-200 focus:ring-2 focus:ring-orange-500 outline-none text-sm font-medium transition placeholder:text-orange-300 text-orange-700"
                  />
                  <button
                    type="button"
                    onClick={handleMicClick}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center rounded-full transition-colors ${listening ? 'bg-orange-100 text-orange-600 animate-pulse' : 'hover:bg-gray-200 text-gray-500'}`}
                  >
                    <svg className="lucide lucide-mic h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 10v2a7 7 0 0 0 14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" /><line x1="8" x2="16" y1="22" y2="22" /></svg>
                  </button>
            </div>
          </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-0 mt-0 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-orange-100">
                {subcategoryContacts.map((co, idx) => (
                  <div
                    key={co.id}
                    className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-200 p-6 flex flex-col group hover:-translate-y-1 hover:scale-[1.02]"
                  >
                    {/* Top: Logo, Name, Verified, Tag */}
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`w-12 h-12 flex items-center justify-center overflow-hidden`}>
                        {co.logo ? (
                          <img src={co.logo} alt={co.name} className="w-10 h-10 object-contain bg-transparent" style={{ background: 'transparent', borderRadius: 0, boxShadow: 'none' }} />
                        ) : (
                          <span className="text-gray-300 text-xl font-bold">{co.name[0]}</span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1">
                          <span
                            className="font-semibold text-gray-900 text-lg truncate cursor-pointer transition-colors duration-200 hover:text-orange-600 hover:underline"
                            onClick={() => {
                              if (co.id === 'hdfc') {
                                navigate('/category/banking/private-banks/hdfc-bank');
                              } else {
                                window.location.href = `/company/${co.id}`;
                              }
                            }}
                          >
                            {co.name}
                          </span>
                          {co.verified && <Check className="h-4 w-4 text-green-500" title="Verified" />}
                      </div>
                        <div className="text-xs text-gray-500 mt-0.5">Bank · Customer Care</div>
                      </div>
                    </div>
                    {/* Info Row */}
                    <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Globe className="h-4 w-4 text-gray-400" />
                        {co.address || 'All India'}
                      </span>
                      <span className="mx-1 text-gray-300">|</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-gray-400" />
                        {co.timing || 'Mon - Sat, 9 AM - 5 PM'}
                      </span>
                    </div>
                    {/* Divider */}
                    <div className="border-t border-gray-100 my-3" />
                    {/* Contact Row */}
                    <div className="flex items-center gap-2 mb-4">
                      <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      <span className="font-bold text-gray-900 text-[15px] md:text-[16px] whitespace-nowrap">{co.phone}</span>
                      <button onClick={() => handleCopy(co.phone, co.id)} className="ml-1 p-1 rounded hover:bg-gray-100 flex-shrink-0 transition" title="Copy">
                        {copied === co.id ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4 text-gray-400 group-hover:text-orange-500 transition" />}
                      </button>
                      <button onClick={() => handleFavorite(co.id)} className="ml-1 p-1 rounded hover:bg-gray-100 flex-shrink-0 transition" title="Favorite">
                        {favoriteIds.includes(co.id) ? <Heart className="h-4 w-4 text-orange-500 fill-orange-100" /> : <Heart className="h-4 w-4 text-gray-400 group-hover:text-orange-500 transition" />}
                        </button>
                    </div>
                    {/* Action Row: Call Now and View More buttons side by side */}
                    <div className="flex flex-nowrap gap-2 mt-1">
                      <button
                        onClick={() => window.open(`tel:${co.phone}`)}
                        className="w-1/2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 shadow-md transition-all text-sm whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-orange-300"
                        style={{ minWidth: 0 }}
                      >
                        <Phone className="h-5 w-5 text-white" /> Call Now
                      </button>
                      <button
                        onClick={() => {
                          if (co.id === 'hdfc') {
                            navigate('/category/banking/private-banks/hdfc-bank');
                          } else {
                            window.location.href = `/company/${co.id}`;
                          }
                        }}
                        className="w-1/2 bg-orange-50 border border-orange-200 text-orange-600 font-bold py-2 rounded-lg flex items-center justify-center gap-2 shadow-sm hover:bg-orange-100 transition-all text-sm whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-orange-200"
                        style={{ minWidth: 0 }}
                      >
                        View More <ArrowRight className="h-5 w-5 text-orange-600" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="mt-6  w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-2.5 rounded-lg shadow hover:from-orange-600 hover:to-orange-700 transition-all text-sm"
              onClick={() => navigate('/category')}
            >
              View All Categories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryGridCompanyList;
