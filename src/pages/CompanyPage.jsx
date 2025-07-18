import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Star,
  Clock,
  Shield,
  ShieldAlert,
  Lock,
  User2,
  MapPin,
  Globe,
  ChevronRight,
  ArrowLeft,
  Copy,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Users,
  TrendingUp,
  Award,
  Target,
  Zap,
  Eye,
  PlayCircle,
  Download,
  Share2,
  Bookmark,
  ThumbsUp,
  MessageCircle,
  Flag,
  Info,
  HelpCircle,
  FileText,
  Calendar,
  Mail,
  Building2,
  CreditCard,
  Headphones,
  Smartphone,
  PhoneCall,
  Check,
  MessageSquare,
  ChevronDown,
  Volume2,
  Menu,
  Settings,
  Search,
  X,
  Clock3,
  UserCheck,
  Scale,
} from "lucide-react";
const icons = [PhoneCall, AlertCircle, CreditCard, Shield];
const sbiContacts = {
  tollFree: [
    { number: "1930", label: "Cyber Crime" },
    { number: "1800 1234", label: "Phone Banking (24x7)" },
    { number: "1800 2100", label: "Alternate Phone Banking (24x7)" },
    { number: "1800 11 2211", label: "Customer Support (24x7)" },
    { number: "1800 425 3800", label: "Phone Banking Helpline (24x7)" },
    {
      number: "1800 11 1109",
      label: "Report Unauthorised Electronic Transactions",
    },
  ],
  allIndia: [
    {
      number: "080-2659 9990",
      label: "Phone Banking/Report Unauthorised Electronic Transactions (24x7)",
    },
    { number: "90226 90226", label: "WhatsApp Banking" },
    {
      number: "92237 66666",
      label: "Missed Call No. For Balance Enquiry (SMS)",
    },
    {
      number: "92238 66666",
      label: "Missed Call No. For Mini Statement (SMS)",
    },
    { number: "8008 20 20 20", label: "SMS No. For Bank Service Feedback" },
    {
      number: "9449 11 22 11",
      label: "Alternate No. To Report Unauthorised Electronic Transactions",
    },
  ],
  international: [
    { number: "+91-80-26599990", label: "International Toll Free No." },
  ],
};

const CompanyPage = () => {
  const { categoryId, companySlug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  // Map URL segment to tab id
  const tabUrlToId = {
    contactnumber: "numbers",
    complain: "complaints",
    quickhelp: "quickhelp",
    videoguide: "video",
    overview: "overview",
  };
  const tabIdToUrl = {
    numbers: "contactnumber",
    complaints: "complain",
    quickhelp: "quickhelp",
    video: "videoguide",
    overview: "overview",
  };
  // Get the last segment of the path
  const pathSegments = location.pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];
  const initialTab = tabUrlToId[lastSegment] || "numbers";
  const [activeTab, setActiveTab] = useState(initialTab);
  const [selectedState, setSelectedState] = useState("all");
  const [copiedNumber, setCopiedNumber] = useState("");
  const [showComplaintSteps, setShowComplaintSteps] = useState(false);
  const [showStatewiseNumbers, setShowStatewiseNumbers] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const faqs = [
    {
      question: "How do I contact customer care?",
      answer: "You can contact customer care by calling the toll-free number listed above or visiting the official website's support section."
    },
    {
      question: "What is the toll-free number for this company?",
      answer: "The toll-free number is displayed in the Contact Numbers tab and in the Quick Contact section above."
    },
    {
      question: "How can I block my debit or credit card?",
      answer: "To block your card, call the card block helpline immediately or use the mobile app/online banking portal if available."
    },
    {
      question: "How do I check my account balance?",
      answer: "You can check your account balance via internet banking, mobile app, or by giving a missed call to the balance enquiry number."
    },
    {
      question: "How to file a complaint with this company?",
      answer: "Go to the File Complaint tab above for step-by-step instructions, or use the customer care number to register your complaint."
    }
  ];
  const [toast, setToast] = useState(null);

  // Redirect to /contactnumber if no tab is present in the URL
  useEffect(() => {
    const pathSegments = location.pathname.split("/");
    const lastSegment = pathSegments[pathSegments.length - 1];
    // Only redirect if the last segment is the companySlug (i.e., no tab present)
    if (lastSegment === companySlug) {
      navigate(`/category/${categoryId}/${companySlug}/contactnumber`, { replace: true });
    }
  }, [categoryId, companySlug, location.pathname, navigate]);

  // Company data
  const companyData = {
    telecom: {
      "mobile-networks": {
        jio: {
          name: "Reliance Jio",
          logo: "https://logos-world.net/wp-content/uploads/2020/09/Jio-Logo.png",
          description:
            "India's largest 4G network provider offering comprehensive digital services including mobile plans, fiber broadband, and digital entertainment.",
          rating: 4.8,
          totalReviews: 2847,
          monthlySearches: "45K",
          founded: "2016",
          headquarters: "Mumbai, Maharashtra",
          website: "https://www.jio.com",
          parentCompany: "Reliance Industries Limited",
          services: [
            "Mobile Plans & Recharge",
            "JioFiber Broadband",
            "JioTV & Digital Services",
            "Enterprise Solutions",
            "IoT & 5G Services",
          ],
          nationalNumbers: [
            {
              type: "Customer Care",
              number: "199",
              description: "General customer support and service inquiries",
              available: "24x7",
              languages: ["Hindi", "English", "Regional Languages"],
              avgWaitTime: "2-3 minutes",
            },
            {
              type: "Technical Support",
              number: "198",
              description: "Network issues, internet connectivity problems",
              available: "24x7",
              languages: ["Hindi", "English"],
              avgWaitTime: "3-5 minutes",
            },
            {
              type: "Sales & New Connections",
              number: "1800-889-9999",
              description: "New connections, plan upgrades, sales inquiries",
              available: "9 AM - 9 PM",
              languages: ["Hindi", "English", "Regional Languages"],
              avgWaitTime: "1-2 minutes",
            },
          ],
          stateWiseNumbers: {
            Maharashtra: [
              {
                city: "Mumbai",
                number: "022-6666-7777",
                type: "Regional Office",
              },
              {
                city: "Pune",
                number: "020-6666-8888",
                type: "Regional Office",
              },
              {
                city: "Nagpur",
                number: "0712-666-9999",
                type: "Regional Office",
              },
            ],
            Delhi: [
              {
                city: "New Delhi",
                number: "011-6666-1111",
                type: "Regional Office",
              },
              {
                city: "Gurgaon",
                number: "0124-666-2222",
                type: "Regional Office",
              },
            ],
            Karnataka: [
              {
                city: "Bangalore",
                number: "080-6666-3333",
                type: "Regional Office",
              },
              {
                city: "Mysore",
                number: "0821-666-4444",
                type: "Regional Office",
              },
            ],
            "Tamil Nadu": [
              {
                city: "Chennai",
                number: "044-6666-5555",
                type: "Regional Office",
              },
              {
                city: "Coimbatore",
                number: "0422-666-6666",
                type: "Regional Office",
              },
            ],
          },
          complaintSteps: [
            {
              step: 1,
              title: "Try Customer Care First",
              description:
                "Call 199 for immediate assistance. Most issues are resolved within the first call.",
              icon: Phone,
            },
            {
              step: 2,
              title: "Use MyJio App",
              description:
                "Download MyJio app and use the complaint section for faster resolution.",
              icon: Smartphone,
            },
            {
              step: 3,
              title: "Visit Jio Store",
              description:
                "Visit your nearest Jio store with required documents for complex issues.",
              icon: Building2,
            },
            {
              step: 4,
              title: "Online Complaint Portal",
              description:
                "Use Jio's official website complaint portal for detailed issue reporting.",
              icon: Globe,
            },
            {
              step: 5,
              title: "Social Media",
              description:
                "Reach out via Twitter @JioCare or Facebook for public complaint resolution.",
              icon: MessageCircle,
            },
            {
              step: 6,
              title: "Consumer Forum",
              description:
                "If unresolved, approach consumer court or TRAI for regulatory intervention.",
              icon: FileText,
            },
          ],
          videoGuide: {
            title: "How to File a Complaint with Jio Customer Care",
            videoId: "dQw4w9WgXcQ",
            thumbnail:
              "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
            duration: "5:32",
            views: "1.2M",
            description:
              "Complete step-by-step guide on how to file and track complaints with Jio customer care through various channels.",
          },
        },
        airtel: {
          name: "Airtel",
          logo: "https://logos-world.net/wp-content/uploads/2020/09/Airtel-Logo.png",
          description:
            "Leading telecommunications company providing mobile, broadband, and digital TV services across India.",
          rating: 4.7,
          totalReviews: 2156,
          monthlySearches: "38K",
          founded: "1995",
          headquarters: "New Delhi, India",
          website: "https://www.airtel.in",
          parentCompany: "Bharti Enterprises",
          services: [
            "Mobile Plans & Recharge",
            "Airtel Xstream Fiber",
            "DTH Services",
            "Enterprise Solutions",
            "Digital Payments",
          ],
          nationalNumbers: [
            {
              type: "Customer Care",
              number: "121",
              description: "General customer support and service inquiries",
              available: "24x7",
              languages: ["Hindi", "English", "Regional Languages"],
              avgWaitTime: "2-4 minutes",
            },
            {
              type: "Technical Support",
              number: "198",
              description: "Network issues, internet connectivity problems",
              available: "24x7",
              languages: ["Hindi", "English"],
              avgWaitTime: "3-5 minutes",
            },
          ],
          stateWiseNumbers: {
            Delhi: [
              {
                city: "New Delhi",
                number: "011-4567-8901",
                type: "Regional Office",
              },
            ],
            Maharashtra: [
              {
                city: "Mumbai",
                number: "022-4567-8901",
                type: "Regional Office",
              },
            ],
          },
          complaintSteps: [
            {
              step: 1,
              title: "Call Customer Care",
              description:
                "Call 121 for immediate assistance and complaint registration.",
              icon: Phone,
            },
            {
              step: 2,
              title: "Use Airtel Thanks App",
              description:
                "Use the official Airtel Thanks app for complaint tracking.",
              icon: Smartphone,
            },
          ],
          videoGuide: {
            title: "Airtel Customer Care Guide",
            videoId: "dQw4w9WgXcQ",
            thumbnail:
              "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
            duration: "4:15",
            views: "850K",
            description:
              "How to contact Airtel customer care and resolve issues quickly.",
          },
        },
      },
    },
    banking: {
      "private-banks": {
        "hdfc-bank": {
          name: "HDFC Bank Customer Care – Toll-Free Numbers & Support ",
          logo: "/company-logos/bank-hdfc.png",
          description:
            "India's leading private sector bank offering comprehensive banking and financial services.",
          rating: 4.8,
          totalReviews: 3245,
          monthlySearches: "48K",
          founded: "1994",
          headquarters: "Mumbai, Maharashtra",
          website: "https://www.hdfcbank.com",
          parentCompany: "HDFC Limited",
          services: [
            "Savings & Current Accounts",
            "Credit Cards",
            "Personal & Home Loans",
            "Investment Services",
            "Digital Banking",
          ],
          nationalNumbers: [
            {
              type: "Customer Care",
              number: "1800-258-6161",
              description: "General banking support and account inquiries",
              available: "24x7",
              languages: ["Hindi", "English", "Regional Languages"],
              avgWaitTime: "1-2 minutes",
            },
            {
              type: "Credit Card Support",
              number: "1800-266-4332",
              description: "Credit card related queries and support",
              available: "24x7",
              languages: ["Hindi", "English"],
              avgWaitTime: "2-3 minutes",
            },
          ],
          stateWiseNumbers: {
            Maharashtra: [
              { city: "Mumbai", number: "022-6171-2000", type: "Head Office" },
            ],
          },
          complaintSteps: [
            {
              step: 1,
              title: "Call Customer Care",
              description:
                "Call the dedicated customer care number for your service.",
              icon: Phone,
            },
            {
              step: 2,
              title: "Visit Branch",
              description:
                "Visit your nearest HDFC Bank branch for assistance.",
              icon: Building2,
            },
          ],
          videoGuide: {
            title: "HDFC Bank Customer Support Guide",
            videoId: "dQw4w9WgXcQ",
            thumbnail:
              "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
            duration: "6:20",
            views: "1.5M",
            description:
              "Complete guide to HDFC Bank customer support services.",
          },
          smsServices: [
            { code: "BAL", description: "Check your account balance", number: "5676712" },
            { code: "MINI", description: "Get mini statement", number: "5676712" },
            { code: "CHQBOOK", description: "Request cheque book", number: "5676712" },
            { code: "STOP", description: "Stop cheque payment", number: "5676712" },
          ],
          ivrMenu: {
            mainMenu: [
              { option: "1", description: "Account Balance & Statement" },
              { option: "2", description: "Fund Transfer & Payment" },
              { option: "3", description: "Card Services" },
              { option: "4", description: "Loan Services" },
              { option: "5", description: "Fixed Deposit Services" },
              { option: "6", description: "Complaint Registration" },
              { option: "0", description: "Talk to Customer Service" },
            ],
            subMenus: {
              "1": [
                { option: "1", description: "Balance Enquiry" },
                { option: "2", description: "Mini Statement" },
              ],
              "2": [
                { option: "1", description: "Block Card" },
                { option: "2", description: "Card Limit Enquiry" },
              ],
            }
          }
        },
      },
    },
  };

  // Find the company by searching all subcategories
  let company = null;
  if (companyData[categoryId]) {
    for (const subcatKey of Object.keys(companyData[categoryId])) {
      if (companyData[categoryId][subcatKey][companySlug]) {
        company = companyData[categoryId][subcatKey][companySlug];
        break;
      }
    }
  }

  // Debugging log
  console.log({ categoryId, companySlug, company });

  useEffect(() => {
    if (!company) {
      navigate("/category");
    }
  }, [company, navigate]);

  // Sync activeTab with URL
  React.useEffect(() => {
    const seg = location.pathname.split("/").pop();
    setActiveTab(tabUrlToId[seg] || "numbers");
  }, [location.pathname]);

  if (!company) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading company information...</p>
        </div>
      </div>
    );
  }

  const handleCall = (number) => {
    if (window.confirm(`Call ${company.name} at ${number}?`)) {
      window.location.href = `tel:${number}`;
    }
  };

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 2000);
  };

  const copyToClipboard = (number) => {
    navigator.clipboard.writeText(number);
    setCopiedNumber(number);
    showToast(`Copied: ${number}`);
    setTimeout(() => setCopiedNumber(""), 2000);
  };

  const states = Object.keys(company.stateWiseNumbers);

  // List of all 36 states and union territories
  const allStates = [
    { state: "Andhra Pradesh", city: "", type: "", number: "" },
    { state: "Arunachal Pradesh", city: "", type: "", number: "" },
    { state: "Assam", city: "", type: "", number: "" },
    { state: "Bihar", city: "", type: "", number: "" },
    { state: "Chhattisgarh", city: "", type: "", number: "" },
    { state: "Goa", city: "", type: "", number: "" },
    { state: "Gujarat", city: "", type: "", number: "" },
    { state: "Haryana", city: "", type: "", number: "" },
    { state: "Himachal Pradesh", city: "", type: "", number: "" },
    { state: "Jharkhand", city: "", type: "", number: "" },
    { state: "Karnataka", city: "", type: "", number: "" },
    { state: "Kerala", city: "", type: "", number: "" },
    { state: "Madhya Pradesh", city: "", type: "", number: "" },
    {
      state: "Maharashtra",
      city: "Mumbai",
      type: "Head Office",
      number: "022-6171-2000",
    },
    { state: "Manipur", city: "", type: "", number: "" },
    { state: "Meghalaya", city: "", type: "", number: "" },
    { state: "Mizoram", city: "", type: "", number: "" },
    { state: "Nagaland", city: "", type: "", number: "" },
    { state: "Odisha", city: "", type: "", number: "" },
    { state: "Punjab", city: "", type: "", number: "" },
    { state: "Rajasthan", city: "", type: "", number: "" },
    { state: "Sikkim", city: "", type: "", number: "" },
    { state: "Tamil Nadu", city: "", type: "", number: "" },
    { state: "Telangana", city: "", type: "", number: "" },
    { state: "Tripura", city: "", type: "", number: "" },
    { state: "Uttar Pradesh", city: "", type: "", number: "" },
    { state: "Uttarakhand", city: "", type: "", number: "" },
    { state: "West Bengal", city: "", type: "", number: "" },
    { state: "Andaman and Nicobar Islands", city: "", type: "", number: "" },
    { state: "Chandigarh", city: "", type: "", number: "" },
    {
      state: "Dadra and Nagar Haveli and Daman and Diu",
      city: "",
      type: "",
      number: "",
    },
    { state: "Delhi", city: "", type: "", number: "" },
    { state: "Jammu and Kashmir", city: "", type: "", number: "" },
    { state: "Ladakh", city: "", type: "", number: "" },
    { state: "Lakshadweep", city: "", type: "", number: "" },
    { state: "Puducherry", city: "", type: "", number: "" },
  ];
  // Fill in data from company.stateWiseNumbers if available
  const stateTableRows = allStates.map((row) => {
    const offices = company.stateWiseNumbers[row.state];
    if (offices && offices.length > 0) {
      return {
        state: row.state,
        city: offices[0].city,
        type: offices[0].type,
        number: offices[0].number,
      };
    }
    return row;
  });

  const [smsDropdownOpen, setSmsDropdownOpen] = useState(false);
  const [copiedSms, setCopiedSms] = useState(null);

  // Toast notification component
  const Toast = ({ message, type = 'success', onClose }) => (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.9 }}
      className={`fixed bottom-4 right-4 z-50 px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 ${
        type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
      }`}
    >
      {type === 'success' ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
      {message}
    </motion.div>
  );

  return (
    <div className="min-h-screen  bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <AnimatePresence>
        {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      </AnimatePresence>
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6"> {/* Reduced vertical padding */}
          {/* Breadcrumb Dropdown */}
          <div className="mb-3 flex justify-start">
            <select
              className="bg-white/90 text-blue-900 rounded-lg px-3 py-2 text-sm font-semibold shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={location.pathname}
              onChange={e => navigate(e.target.value)}
              style={{ minWidth: 180 }}
            >
              <option value="/category">All Categories</option>
              <option value={`/category/${categoryId}`}>{categoryId === "telecom" ? "Telecommunications" : "Banking & Finance"}</option>
              <option value={`/category/${categoryId}/${companySlug}/contactnumber`}>{company.name}</option>
            </select>
          </div>
          {/* Company Header */}
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-4"> {/* Less gap/margin */}
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center overflow-hidden">
                  {company.name === 'HDFC Bank' ? (
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      width={65}
                      height={65}
                      fill="#E31B23"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>HDFC Bank</title>
                      <path d="M.572 0v10.842h3.712V4.485h6.381V0Zm12.413 0v4.485h6.383v6.357h4.06V0Zm-4.64 8.53v6.938h6.963V8.53ZM.572 13.153V24h10.093v-4.486h-6.38v-6.361zm18.796 0v6.361h-6.383V24h10.443V13.153Z"/>
                    </svg>
                  ) : (
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="w-16 h-16 object-contain"
                      onError={(e) => {
                        const target = e.target;
                        target.style.display = "none";
                        const fallback = target.nextElementSibling;
                        if (fallback) {
                          fallback.textContent = company.name.charAt(0);
                          fallback.classList.remove("hidden");
                        }
                      }}
                    />
                  )}
                  <div className="w-16 h-16 bg-blue-400 rounded-xl flex items-center justify-center text-white font-bold text-xl hidden">
                    {company.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h1 className="text-4xl md:text-3xl font-bold mb-2">
                    {company.name}
                  </h1>
                  <div className="flex items-center gap-4 text-white/90">
                    <div className="flex items-center gap-1">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="font-semibold">{company.rating}/5</span>
                      <span className="text-sm">
                        ({company.totalReviews.toLocaleString()} reviews)
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-5 w-5" />
                      <span className="font-semibold">
                        {company.monthlySearches} monthly searches
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg text-white/90 mb-4 leading-relaxed"> {/* Less margin below */}
                {company.description}
              </p>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => handleCall(company.nationalNumbers[0].number)}
                  className="bg-white text-blue-600 font-semibold px-3 py-1 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Call Now: {company.nationalNumbers[0].number}
                </button>
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center gap-2"
                >
                  <Globe className="h-5 w-5" />
                  Visit Website
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {company.name === 'HDFC Bank' ? (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20">
                <h3 className="text-base font-semibold text-white mb-2 text-center">How to Complain of HDFC Bank</h3>
                <a
                  href={`https://www.youtube.com/watch?v=${company.videoGuide?.videoId || ''}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <div className="relative rounded-xl overflow-hidden shadow-lg border border-white/20 mb-2 h-32">
                    <img
                      src={company.videoGuide?.thumbnail}
                      alt={company.videoGuide?.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/80 rounded-full p-2 shadow-lg">
                        <PlayCircle className="h-7 w-7 text-blue-700" />
                      </div>
                    </div>
                  </div>
                </a>
                <div className="text-white/90 text-xs text-center mb-1 font-semibold">{company.videoGuide?.title}</div>
                <div className="text-white/80 text-[11px] text-center mb-1">{company.videoGuide?.description}</div>
                <div className="text-white/60 text-[11px] text-center">Duration: {company.videoGuide?.duration} &bull; {company.videoGuide?.views} views</div>
              </div>
            ) : (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Company Information
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Founded</span>
                    <span className="font-bold text-white">
                      {company.founded}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Headquarters</span>
                    <span className="font-bold text-white">
                      {company.headquarters}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Parent Company</span>
                    <span className="font-bold text-white">
                      {company.parentCompany}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Rating</span>
                    <span className="font-bold text-white">
                      {company.rating}/5
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: "numbers", label: "Contact Numbers", icon: Phone },
              { id: "complaints", label: "Complaint Redressal Process", icon: FileText },
              { id: "quickhelp", label: "Quick Help", icon: HelpCircle },
              { id: "video", label: "Video Guide", icon: PlayCircle },
              { id: "overview", label: "Overview", icon: Building2 },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    navigate(`/category/${categoryId}/${companySlug}/${tabIdToUrl[tab.id]}`);
                  }}
                  className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto bg-[#F4F8FF] px-4 sm:px-6 lg:px-8 py-12">
        {/* Numbers Tab */}
        {activeTab === "numbers" && (
          <div className="w-full bg-[#F4F8FF]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8">
              {/* Main Content (Left) */}
              <div className="space-y-12">
                {/* Statewise Numbers Toggle Button */}
                {/* <div className="flex justify-end mb-4">
                  <button
                    onClick={() => setShowStatewiseNumbers(true)}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors font-semibold"
                  >
                    <MapPin className="h-5 w-5" />
                    Statewise Numbers
                  </button>
                </div> */}

                {/* Statewise Numbers Modal */}
                {showStatewiseNumbers && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                    <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-3xl w-full relative animate-fade-in">
                      <button
                        onClick={() => setShowStatewiseNumbers(false)}
                        className="absolute top-4 right-4 text-gray-500 hover:text-blue-600 text-xl font-bold"
                        title="Close"
                      >
                        ×
                      </button>
                      <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                        <MapPin className="w-6 h-6 text-blue-500" /> Statewise Contact Numbers
                      </h2>
                      <div className="overflow-x-auto max-h-[60vh]">
                        <table className="min-w-full text-sm border border-blue-100 rounded-xl">
                          <thead className="bg-blue-50 text-blue-900 font-bold">
                            <tr>
                              <th className="py-2 px-3">State/UT</th>
                              <th className="py-2 px-3">City</th>
                              <th className="py-2 px-3">Type</th>
                              <th className="py-2 px-3">Contact Number</th>
                            </tr>
                          </thead>
                          <tbody>
                            {stateTableRows.map((row, idx) => (
                              <tr key={row.state} className={idx % 2 === 0 ? "bg-blue-50/40" : "bg-white"}>
                                <td className="py-2 px-3 font-semibold text-gray-800">{row.state}</td>
                                <td className="py-2 px-3 text-gray-700">{row.city}</td>
                                <td className="py-2 px-3 text-gray-700">{row.type}</td>
                                <td className="py-2 px-3 text-blue-700 font-semibold whitespace-nowrap flex items-center gap-1">
                                  {row.number}
                                  {row.number && (
                                    <button
                                      onClick={() => copyToClipboard(row.number)}
                                      title="Copy"
                                      className="hover:text-blue-500"
                                    >
                                      <Copy className="w-4 h-4" />
                                    </button>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                {/* Top Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      title: "HDFC Phone Banking ",
                      number: "1800 2600",
                      subtitle: "Toll-free • 24x7",
                      cardBg: "bg-[#D0E7FF]",
                      iconBg: "bg-[#A8D8FF]",
                      textColor: "text-green-600",
                    },
                    {
                      title: "Alternate Phone Banking",
                      number: "1800 1600",
                      subtitle: "Block instantly • 24x7",
                      cardBg: "bg-[#FFEAEA]",
                      iconBg: "bg-[#FFCCCC]",
                      textColor: "text-red-600",
                    },
                    {
                      title: "Account/Loan Assistance",
                      number: "1800 266 3310 ",
                      subtitle: "Support • 10 AM – 5 PM",
                      cardBg: "bg-[#F5E9FF]",
                      iconBg: "bg-[#E6D7FF]",
                      textColor: "text-purple-600",
                    },
                    {
                      title: "WhatsApp Banking",
                      number: "70700 22222 ",
                      subtitle: "Report fraud • 24x7",
                      cardBg: "bg-[#FFF9E5]",
                      iconBg: "bg-[#FFF2B8]",
                      textColor: "text-yellow-600",
                    },
                  ].map((item, index) => {
                    const Icon = icons[index];
                    return (
                      <div
                        key={index}
                        className={`${item.cardBg} p-4 rounded-xl shadow hover:shadow-md transition`}
                      >
                        <div
                          className={`w-12 h-12 rounded-md flex items-center justify-center ${item.iconBg} mb-3`}
                        >
                          <Icon className={`w-6 h-6 ${item.textColor}`} />
                        </div>
                        <h4 className="text-sm font-semibold text-gray-800">
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <p className="text-xl font-extrabold text-blue-600">
                            {item.number}
                          </p>
                          <button
                            onClick={() => copyToClipboard(item.number)}
                            title="Copy Number"
                            className="hover:text-blue-500"
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-sm text-gray-600">{item.subtitle}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Helpline Numbers */}
                  <div className="bg-white rounded-xl shadow p-4">
                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-4">
                      <Phone className="w-5 h-5 text-blue-600" /> Helpline Numbers
                    </h3>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-100 text-gray-700 text-left font-semibold">
                          <th className="py-2 px-3">Service</th>
                          <th className="py-2 px-3">Number</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Account Balance", "1800 270 3333", "24x7"],
                          ["Fraud/Transaction Blocking", "1800 258 6161", "10 AM – 5 PM"],
                          ["Mini Statement", "1800 270 3355", "24x7"],
                      
                        ].map(([label, number, timing], idx) => (
                          <tr
                            key={label}
                            className={idx % 2 === 0 ? "bg-gray-50" : ""}
                          >
                            <td className="py-3 px-3 font-semibold text-[15px] text-gray-800">
                              <span className="inline-block border-l-4 border-blue-600 pl-2">
                                {label}
                              </span>
                            </td>
                            <td className="py-3 px-3 text-[16px] text-blue-600 font-semibold whitespace-nowrap">
                              <div className="flex items-center gap-2">
                                {number}
                                <button
                                  onClick={() => copyToClipboard(number)}
                                  title="Copy"
                                  className="hover:text-blue-500"
                                >
                                  <Copy className="w-4 h-4" />
                                </button>
                              </div>
                              <div className="text-xs text-gray-500">
                                {timing}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* All India Numbers - styled like Helpline Numbers */}
                  <div className="bg-white rounded-xl shadow p-4">
                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-4">
                      <Phone className="w-5 h-5 text-green-600" /> All India
                      Numbers
                    </h3>
                    <table className="w-full text-[15px]">
                      <thead>
                        <tr className="bg-gray-100 text-gray-700 text-left font-semibold">
                          <th className="py-2 px-3">Number</th>
                          <th className="py-2 px-3">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          [
                            "1860 266 0333",
                            "Generate New Credit Card PIN",
                          ],
                          ["72900 30000", "Report Fraud via WhatsApp"],
                         
                        ].map(([number, desc], idx) => (
                          <tr
                            key={number}
                            className={idx % 2 === 0 ? "bg-gray-50" : ""}
                          >
                            <td className="py-3 px-3 text-[16px] text-green-700 font-semibold whitespace-nowrap flex items-center gap-2">
                              {number}
                              <button
                                onClick={() => copyToClipboard(number)}
                                title="Copy"
                                className="hover:text-blue-500"
                              >
                                <Copy className="w-4 h-4" />
                              </button>
                            </td>
                            <td className="py-3 px-3 text-[14px] text-gray-700 leading-snug">
                              <span className="block max-w-sm">{desc}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              
                 <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                      <MessageSquare className="h-6 w-6 text-blue-600" />
                      SMS Services
                    </h3>
                    <button
                      onClick={() => setSmsDropdownOpen(!smsDropdownOpen)}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      View All SMS Codes
                      <ChevronDown className={`h-4 w-4 transition-transform ${smsDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  <AnimatePresence>
                    {smsDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          {[
                            { code: "BAL", description: "Account balance inquiry", number: "567676" },
                            { code: "MINI", description: "Mini statement", number: "567676" },
                            { code: "BLOCK", description: "Block debit/credit card", number: "567676" },
                            { code: "CHEQ", description: "Cheque status inquiry", number: "567676" },
                            { code: "LOAN", description: "Loan account details", number: "567676" },
                          ].map((service, index) => (
                            <div
                              key={index}
                              className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col justify-between min-h-[120px] shadow-sm"
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-bold text-blue-700 text-lg">{service.code}</span>
                                <button
                                  onClick={() => copyToClipboard(service.code)}
                                  className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                                  title="Copy code"
                                >
                                  <Copy className="h-5 w-5" />
                                </button>
                              </div>
                              <div className="mt-2 text-gray-700 text-[15px]">{service.description}</div>
                              <div className="mt-1 text-xs text-gray-500">Send to: {service.number}</div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* IVRS Menu - Highly Readable, Nested Format */}
                <div className="bg-white rounded-2xl shadow border border-gray-100 p-6 max-w-5xl mx-auto mt-10">
                  <div className="mb-4 text-center">
                    <span className="font-bold text-lg text-blue-900">IVRS Menu:</span>
                    <span className="ml-2 font-semibold text-blue-700">
                      <Phone className="inline h-5 w-5 mb-1" /> 1800 209 4324
                      <span className="mx-2 text-gray-400">/</span>
                      <Phone className="inline h-5 w-5 mb-1" /> 1800 22 1070
                    </span>
                  </div>
                  <div className="text-gray-700 text-sm mb-4 text-center">
                    <span className="font-semibold">After select Preferred language:</span> Hindi, English, Marathi, Others
                  </div>
                  <ul className="space-y-4">
                    {/* Press 1 */}
                    <li>
                      <div className="font-bold text-blue-800">Press 1: To block debit card, upi or other digital channels and for other card services</div>
                      <ul className="ml-6 mt-2 space-y-1 border-l-2 border-blue-100 pl-4 bg-blue-50 rounded">
                        <li><span className="font-semibold text-blue-700">Press 1:</span> For debit card blocking and replacement.</li>
                        <li><span className="font-semibold text-blue-700">Press 2:</span> To block upi services.</li>
                        <li><span className="font-semibold text-blue-700">Press 3:</span> To block internet or mobile banking.</li>
                      </ul>
                    </li>
                    {/* Press 2 */}
                    <li>
                      <div className="font-bold text-blue-800">Press 2: To generate ATM pin/reset IVR language / T-pin.</div>
                      <ul className="ml-6 mt-2 space-y-1 border-l-2 border-blue-100 pl-4 bg-blue-50 rounded">
                        <li><span className="font-semibold text-blue-700">Press 1:</span> To generate ATM pin.</li>
                        <li><span className="font-semibold text-blue-700">Press 2:</span> To generate T-pin.</li>
                        <li><span className="font-semibold text-blue-700">Press 3:</span> To reset IVR language / T-pin.</li>
                      </ul>
                    </li>
                    {/* Press 3 */}
                    <li>
                      <div className="font-bold text-blue-800">Press 3: For Bank account services.</div>
                      <ul className="ml-6 mt-2 space-y-1 border-l-2 border-blue-100 pl-4 bg-blue-50 rounded">
                        <li><span className="font-semibold text-blue-700">Press 1:</span> If you have customer ID and ATM.</li>
                        <li><span className="font-semibold text-blue-700">Press 2:</span> If you have debit card and atm.</li>
                      </ul>
                    </li>
                    {/* Press 4 */}
                    <li>
                      <div className="font-bold text-blue-800">Press 4: For loan, demat, and NPS</div>
                      <ul className="ml-6 mt-2 space-y-1 border-l-2 border-blue-100 pl-4 bg-blue-50 rounded">
                        <li><span className="font-semibold text-blue-700">Press 1:</span> For information on your loan account.</li>
                        <li><span className="font-semibold text-blue-700">Press 2:</span> For demat account information.</li>
                        <li><span className="font-semibold text-blue-700">Press 3:</span> For information on national Pension Scheme.</li>
                        <li><span className="font-semibold text-blue-700">Press 8:</span> To return to the previous menu.</li>
                        <li>
                          <span className="font-semibold text-blue-700">Press 9:</span>
                          <span className="font-bold text-yellow-700 bg-yellow-100 px-1 rounded ml-1">To speak to the phone banking executive.</span>
                        </li>
                      </ul>
                    </li>
                    {/* Press 5 */}
                    <li>
                      <div className="font-bold text-blue-800">Press 5: For interest rate, branch or ATM location and complaint registration.</div>
                      <ul className="ml-6 mt-2 space-y-1 border-l-2 border-blue-100 pl-4 bg-blue-50 rounded">
                        <li><span className="font-semibold text-blue-700">Press 1:</span> For interest and foreign exchange rate.</li>
                        <li><span className="font-semibold text-blue-700">Press 2:</span> For branch and ATM location.</li>
                        <li><span className="font-semibold text-blue-700">Press 3:</span> For my IVR.</li>
                        <li><span className="font-semibold text-blue-700">Press 4:</span> For complaint registration.</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                {/* Quick Links Card Section */}
                <div className="mb-8 bg-white rounded-2xl shadow-lg border border-gray-100 p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <ExternalLink className="h-5 w-5 text-blue-600" /> Quick Links
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                    {[
                      // Most Used
                      {
                        title: "HDFC NetBanking Login",
                        url: "https://netbanking.hdfcbank.com/netbanking/",
                        description: "Daily banking transactions",
                        icon: "🏦",
                        iconBg: "bg-blue-100 text-blue-700"
                      },
                      {
                        title: "Find HDFC Branch/ATM",
                        url: "https://near-me.hdfcbank.com/branch-atm-locator/",
                        description: "Location-based searches",
                        icon: "📍",
                        iconBg: "bg-blue-100 text-blue-700"
                      },
                      {
                        title: "Customer Care Helpline",
                        url: "https://www.hdfcbank.com/personal/need-help/customer-care",
                        description: "Customer support needs",
                        icon: "📞",
                        iconBg: "bg-blue-100 text-blue-700"
                      },
                      // High Priority
                      {
                        title: "Credit Card NetBanking",
                        url: "https://www.hdfcbank.com/personal/ways-to-bank/online-banking/credit-card-netbanking",
                        description: "Credit card management",
                        icon: "💳",
                        iconBg: "bg-green-100 text-green-700"
                      },
                      {
                        title: "Block Credit Card",
                        url: "https://www.hdfcbank.com/personal/pay/cards/credit-cards/block-loststolen-card",
                        description: "Block lost/stolen card",
                        icon: "🚨",
                        iconBg: "bg-red-100 text-red-700"
                      },
                      {
                        title: "Report Unauthorised Txn",
                        url: "https://www.hdfcbank.com/personal/need-help/contact-us/unauthorized-electronic-banking",
                        description: "Security-related",
                        icon: "🔒",
                        iconBg: "bg-red-100 text-red-700"
                      },
                      // Support & Complaints
                      {
                        title: "Complaint Form",
                        url: "https://leads.hdfcbank.com/applications/webforms/apply/complaint_form_new.asp",
                        description: "File a complaint",
                        icon: "📝",
                        iconBg: "bg-blue-100 text-blue-700"
                      },
                      {
                        title: "Track Complaint",
                        url: "https://leads.hdfcbank.com/applications/misc/CST/cstracker.aspx",
                        description: "Check complaint status",
                        icon: "📊",
                        iconBg: "bg-blue-100 text-blue-700"
                      },
                      {
                        title: "Support Center",
                        url: "https://www.hdfcbank.com/personal/about-us/corporate-governance/banking-customer-helpdesk",
                        description: "Escalation support",
                        icon: "🏢",
                        iconBg: "bg-blue-100 text-blue-700"
                      },
                      // Account & Services
                      {
                        title: "Open Savings Account",
                        url: "https://www.hdfcbank.com/personal/save/accounts/savings-accounts",
                        description: "New account opening",
                        icon: "🏦",
                        iconBg: "bg-indigo-100 text-indigo-700"
                      },
                      {
                        title: "Apply Credit Card",
                        url: "https://applyonline.hdfcbank.com/cards/credit-cards.html",
                        description: "New credit card",
                        icon: "💳",
                        iconBg: "bg-indigo-100 text-indigo-700"
                      },
                      {
                        title: "Instant Loan Online",
                        url: "https://www.hdfcbank.com/personal/borrow/popular-loans",
                        description: "Loan applications",
                        icon: "💰",
                        iconBg: "bg-indigo-100 text-indigo-700"
                      },
                      // Apps
                      {
                        title: "MobileBanking App",
                        url: "https://play.google.com/store/apps/details?id=com.snapwork.hdfc",
                        description: "All-in-one banking app",
                        icon: "📱",
                        iconBg: "bg-orange-100 text-orange-700"
                      },
                      {
                        title: "PayZapp App",
                        url: "https://play.google.com/store/apps/details?id=com.enstage.wibmo.hdfc",
                        description: "UPI, wallet, shopping",
                        icon: "💳",
                        iconBg: "bg-orange-100 text-orange-700"
                      },
                      {
                        title: "MyCards App",
                        url: "https://play.google.com/store/apps/details?id=com.hdfcbank.mycards",
                        description: "Credit card control",
                        icon: "🎴",
                        iconBg: "bg-orange-100 text-orange-700"
                      },
                      {
                        title: "Loan Assist App",
                        url: "https://play.google.com/store/apps/details?id=com.hdfc.loanassist",
                        description: "Track/apply loans",
                        icon: "🏠",
                        iconBg: "bg-orange-100 text-orange-700"
                      },
                      {
                        title: "InstaLoans App",
                        url: "https://play.google.com/store/apps/details?id=com.hdfc.instaloans",
                        description: "Instant loan check",
                        icon: "⚡",
                        iconBg: "bg-orange-100 text-orange-700"
                      }
                    ].map((link, idx) => (
                      <div
                        key={idx}
                        className={
                          `relative group bg-white border border-gray-100 rounded-xl p-3 flex flex-col items-start min-h-[120px] shadow-sm hover:shadow-lg hover:scale-[1.03] transition-all duration-150`}
                      >
                        <div className={`flex items-center justify-center rounded-full w-9 h-9 mb-2 text-xl font-bold ${link.iconBg}`}>{link.icon}</div>
                        <div className="font-semibold text-gray-900 text-[15px] leading-tight mb-1 truncate w-full" title={link.title}>{link.title}</div>
                        <div className="text-gray-500 text-xs mb-2 truncate w-full" title={link.description}>{link.description}</div>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute bottom-2 right-2 bg-blue-600 text-white rounded-full p-1.5 shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                          title="Open Link"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Email Support (full width, below) */}
                <div className="bg-white rounded-xl shadow p-4">
                  <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-4">
                    <Mail className="w-5 h-5 text-blue-600" /> Email Support
                  </h3>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-100 text-gray-700 text-left font-semibold">
                        <th className="py-2 px-3">Service</th>
                        <th className="py-2 px-3">Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["General Enquiries", "support@sbi.co.in", "24x7"],
                        [
                          "Credit Card Support",
                          "cards@sbi.co.in",
                          "10 AM – 5 PM",
                        ],
                        ["Internet Banking", "onlinesbi@sbi.co.in", "24x7"],
                        ["Complaints", "complaints@sbi.co.in", "24x7"],
                        ["Cyber Security", "cybersecurity@sbi.co.in", "24x7"],
                      ].map(([label, email, timing], idx) => (
                        <tr
                          key={label}
                          className={idx % 2 === 0 ? "bg-gray-50" : ""}
                        >
                          <td className="py-3 px-3 font-semibold text-[15px] text-gray-800">
                            <span className="inline-block border-l-4 border-blue-600 pl-2">
                              {label}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-blue-600 font-bold whitespace-nowrap flex items-center gap-2 text-[15px]">
                            {email}
                            <button
                              onClick={() => copyToClipboard(email)}
                              title="Copy"
                              className="hover:text-blue-500"
                            >
                              <Copy className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Service-wise Numbers Table (unique modern style) */}
                <div className="bg-white rounded-2xl shadow-lg p-4 overflow-x-auto">
                  <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                    <Phone className="w-6 h-6 text-blue-500" /> Service-wise Toll
                    Free Numbers
                  </h3>
                  <table className="min-w-full text-sm table-fixed border border-blue-100">
                    <thead className="bg-blue-50 text-blue-900 font-bold">
                      <tr>
                        <th className="py-2 px-3 w-10 text-center">#</th>
                        <th className="py-2 px-3">Service</th>
                        <th className="py-2 px-3">Toll Free No.</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Reporting Unauthorised Transactions", ["1800111109"]],
                        ["SBI YONO", ["1800111101"]],
                        [
                          "Pensioners",
                          ["1800110009", "18004253800", "1800112211"],
                        ],
                        ["PMJDY", ["1800110001"]],
                        ["SBI FASTag", ["1800110018"]],
                        ["Home Loan", ["1800112018"]],
                        ["Income Tax Refund Orders (ITRO)", ["18004259760"]],
                        ["Wealth & Platinum Customers", ["18008900"]],
                        ["Doorstep Banking Services", ["1800111103"]],
                        ["Senior Citizen & Differently-abled", ["18008888"]],
                        ["Other PMJDY Numbers", ["1800110001", "18001801111"]],
                        ["GST Related Queries", ["1800112017"]],
                        ["Credit Card Payment Queries", ["8422845515"]],
                        ["Available Credit Limit", ["8108100986"]],
                        ["Report Unauthorised Transactions", ["9449112211"]],
                        ["Doorstep Banking", ["9152202020"]],
                        ["Credit Card Queries", ["18001801290"]],
                      ].map(([service, numbers], idx) => (
                        <tr
                          key={service}
                          className={idx % 2 === 0 ? "bg-blue-50/40" : "bg-white"}
                        >
                          <td className="py-2 px-3 text-center text-gray-700 font-medium">
                            {idx + 1}
                          </td>
                          <td className="py-2 px-3 text-gray-800 truncate max-w-[250px]">
                            {service}
                          </td>
                          <td className="py-2 px-3">
                            <div className="flex flex-wrap gap-x-2 gap-y-1 text-blue-700 font-semibold">
                              {numbers.map((num) => (
                                <div
                                  key={num}
                                  className="flex items-center text-[15px] gap-1 whitespace-nowrap"
                                >
                                  {num}
                                  <button
                                    onClick={() => copyToClipboard(num)}
                                    title="Copy"
                                    className="hover:text-blue-500"
                                  >
                                    <Copy className="w-4 h-4" />
                                  </button>
                                </div>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Additional Tables from Uploaded Image */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Missed Call Service */}
                  <div className="bg-white rounded-xl shadow p-6 overflow-x-auto">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Missed Call Service
                    </h3>
                    <table className="min-w-full text-sm text-left table-auto">
                      <thead className="bg-gray-100 text-gray-700 font-semibold">
                        <tr>
                          <th className="py-2 px-3">Sr No.</th>
                          <th className="py-2 px-3">Service Name</th>
                          <th className="py-2 px-3">Contact No.</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["For Balance Enquiry", "9223766666"],
                          ["For Mini Statement", "9223866666"],
                          ["For Home Loan", "7208933140"],
                          ["For Car Loan", "7208933141"],
                          ["For Gold Loan", "7208933143"],
                          ["For Personal Loan", "7208933142"],
                          ["For SME", "7208933144"],
                        ].map(([service, number], idx) => (
                          <tr
                            key={service}
                            className={idx % 2 === 0 ? "bg-gray-50" : ""}
                          >
                            <td className="py-2 px-3 text-gray-700">{idx + 1}</td>
                            <td className="py-2 px-3 text-gray-800">{service}</td>
                            <td className="py-2 px-3 text-blue-700 text-[15px] font-semibold whitespace-nowrap flex items-center gap-1">
                              {number}
                              <button
                                onClick={() => copyToClipboard(number)}
                                title="Copy"
                                className="hover:text-blue-500"
                              >
                                <Copy className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Other Emails */}
                  <div className="bg-white rounded-xl shadow p-6 overflow-x-auto">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Other Emails
                    </h3>
                    <table className="min-w-full text-sm text-left table-auto">
                      <thead className="bg-gray-100 text-gray-700 font-semibold">
                        <tr>
                          <th className="py-2 px-3">Sr No.</th>
                          <th className="py-2 px-3">Services</th>
                          <th className="py-2 px-3">Email Address</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          [
                            "General Head",
                            "socialreply@sbi.co.in, gm.customer@sbi.co.in",
                          ],
                          [
                            "Aadhaar Seeding",
                            "nodalofficer.aadhaarseeding@sbi.co.in",
                          ],
                          ["Home Loan", "customercare.homeloans@sbi.co.in"],
                          [
                            "To block your card",
                            "unauthorisedtransaction@sbi.co.in",
                          ],
                          [
                            "To report any cyber incident",
                            "report.phishing@sbi.co.in",
                          ],
                          [
                            "For Home Loan Query",
                            "customercare.homeloans@sbi.co.in",
                          ],
                        ].map(([service, email], idx) => (
                          <tr
                            key={service}
                            className={idx % 2 === 0 ? "bg-gray-50" : ""}
                          >
                            <td className="py-2 px-3 text-gray-700">{idx + 1}</td>
                            <td className="py-2 px-3 text-gray-800">{service}</td>
                            <td className="py-2 px-3 text-blue-700 font-semibold whitespace-nowrap flex items-center gap-1">
                              {email}
                              <button
                                onClick={() => copyToClipboard(email)}
                                title="Copy"
                                className="hover:text-blue-500"
                              >
                                <Copy className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* Sidebar: Customer Care List */}
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <div className="bg-white rounded shadow border border-gray-200 max-w-[260px] w-full">
                    <div className="bg-blue-700 rounded-t px-4 py-3">
                      <h3 className="text-white text-lg font-bold text-center">Customer Care List</h3>
                    </div>
                    <ul className="divide-y divide-gray-100">
                      {[
                        { name: 'SBI Customer Care', href: '/category/banking/private-banks/sbi-bank/contactnumber' },
                        { name: 'Axis Bank Customer Care', href: '#' },
                        { name: 'Union Bank of India Customer Care', href: '#' },
                        { name: 'ICICI Bank Customer Care', href: '#' },
                        { name: 'Standard Chartered Customer Care', href: '#' },
                        { name: 'Kotak Mahindra Bank Customer Care', href: '#' },
                        { name: 'Indian Bank Customer Care', href: '#' },
                        { name: 'Bank of India Customer Care', href: '#' },
                        { name: 'Bank of Maharashtra Customer Care', href: '#' },
                        { name: 'IndusInd Bank Customer Care', href: '#' },
                        { name: 'Punjab National Bank Customer Care', href: '#' },
                      ].map(link => (
                        <li key={link.name}>
                          <a
                            href={link.href}
                            className="block px-4 py-2 text-blue-700 hover:bg-blue-100 hover:text-blue-900 transition-colors text-sm font-medium w-full"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        )}

        {/* Complaints Tab - Modern, Professional Visuals */}
        {activeTab === "complaints" && (
          <div className="w-full bg-[#F4F8FF] px-2 md:px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-2 lg:gap-4">
              {/* Main Content (Left, 60%) */}
              <div className="flex flex-col gap-3 p-0 md:p-1">
                {/* Unified Complaint Escalation Card */}
                <div className="bg-white border border-blue-200 rounded-2xl shadow-lg p-4 md:p-6 flex flex-col gap-4">
                  {/* Header + Standout Mandatory Steps */}
                  <div>
                    <h2 className="text-xl md:text-2xl font-extrabold text-blue-800 mb-1">HDFC Bank Step-by-Step Complaint/Grievance Filing Guide</h2>
                    <p className="text-xs md:text-sm text-gray-700 mb-2">If you've submitted a complaint to HDFC Bank—online or offline—and haven't received a resolution after 30 days, follow these steps to escalate your complaint and get it resolved faster.</p>
                    {/* Mandatory Prerequisite Section */}
                    <div className="bg-blue-50 border border-blue-400 rounded-xl shadow-sm p-3 md:p-4 mb-3 flex flex-col gap-2">
                      <div className="flex items-center gap-2 mb-2">
                        <Info className="w-5 h-5 text-blue-600" />
                        <h3 className="font-bold text-blue-700 text-base md:text-lg">Mandatory Prerequisite: SCORES Registration</h3>
                      </div>
                      <div className="text-xs md:text-sm text-gray-800 mb-1">
                        <span className="font-semibold">Before escalating, you must register your complaint on the <a href='https://scores.gov.in' className='text-blue-700 underline' target='_blank' rel='noopener noreferrer'>SCORES portal</a> (SEBI Complaints Redress System).</span> This is required for regulatory tracking and faster resolution.
                      </div>
                      <div className="text-sm md:text-sm text-gray-800 font-semibold mb-1">Details required for SCORES registration:</div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 list-none pl-0">
                        <li className="flex items-center gap-2 text-xs"><span className="text-green-600">✔️</span> <span className="text-[14px]">Name (as per bank records)</span></li>
                        <li className="flex items-center gap-2 text-xs"><span className="text-green-600">✔️</span> <span className="text-[14px]">PAN (Permanent Account Number)</span></li>
                        <li className="flex items-center gap-2 text-xs"><span className="text-green-600">✔️</span> <span className="text-[14px]">Address (current)</span></li>
                        <li className="flex items-center gap-2 text-xs"><span className="text-green-600">✔️</span> <span className="text-[14px]">Mobile Number (active)</span></li>
                        <li className="flex items-center gap-2 text-xs"><span className="text-green-600">✔️</span> <span className="text-[14px]">Email ID (registered)</span></li>
                      </ul>
                    </div>
                    <p className="text-blue-600 text-xs md:text-sm flex items-center gap-1 mb-1"><span>📹</span> If you're looking to file a fresh complaint, you can also watch the step-by-step video guide below.</p>
                  </div>
                  {/* Divider */}
                  <div className="border-t border-blue-100 my-2"></div>
                  {/* Level 1 */}
                  <div>
                    <h4 className="font-bold text-blue-700 text-base md:text-lg mb-1 flex items-center gap-1">Level 1: HDFC Bank Customer Care</h4>
                    <div className="text-xs md:text-sm text-gray-800">To register your complaint, reach out to HDFC Bank's Customer Care team through call, email, or online form. They are available 24x7 to help you with any  customer complaint:</div>
                    <div className="flex flex-col gap-0.5 mt-1">
                      <div className="flex items-center gap-2 text-xs md:text-sm"><span className="font-semibold">📞 Phone:</span> <span className="font-mono">1800 1600</span> / <span className="font-mono">1800 2600</span></div>
                      <div className="flex items-center gap-2 text-xs md:text-sm"><span className="font-semibold">✉️ Email:</span> <a href="mailto:support@hdfcbank.com" className="text-blue-700 underline">support@hdfcbank.com</a></div>
                    </div>
                    <div className="text-xs md:text-sm text-gray-700 font-semibold mt-1">Alternative Options:</div>
                    <ul className="list-disc list-inside ml-3 text-xs md:text-sm text-gray-700 space-y-0.5">
                      <li>Connect with Eva/Chat Bot for quick solutions</li>
                      <li>Visit/Contact your nearest branch</li>
                    </ul>
                  </div>
                  {/* Divider */}
                  <div className="border-t border-blue-100 my-2"></div>
                  {/* Level 2 */}
                  <div>
                    <h4 className="font-bold text-blue-700 text-base md:text-lg mb-1 flex items-center gap-1">Level 2: Grievance Redressal Officer</h4>
                    <div className="text-xs md:text-sm text-gray-800 mb-1">Still not satisfied after Level 2? You can escalate your complaint to HDFC Bank’s Principal Nodal Officer for faster resolution. This is the highest level of grievance redressal within the bank.</div>
                    <div className="overflow-x-auto mb-1">
                      <table className="min-w-full w-full text-xs md:text-sm border border-blue-100 rounded">
                        <thead className="bg-blue-50">
                          <tr>
                            <th className="py-1 px-2 border text-xs md:text-sm">Product</th>
                            <th className="py-1 px-2 border text-xs md:text-sm">Contact Number</th>
                            <th className="py-1 px-2 border text-xs md:text-sm">Hours</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white">
                            <td className="border px-2 py-1">Banking/Digital Lending</td>
                            <td className="border px-2 py-1 font-mono">1800 266 4060</td>
                            <td className="border px-2 py-1">Mon-Sat, 9:30am-5:30pm<br/>2nd & 4th Sat, Sun, Holidays: Closed</td>
                          </tr>
                          <tr className="bg-blue-50">
                            <td className="border px-2 py-1">Credit Cards</td>
                            <td className="border px-2 py-1 font-mono">044-61084900</td>
                            <td className="border px-2 py-1">Mon-Sat, 9:30am-5:30pm<br/>2nd & 4th Sat, Sun, Holidays: Closed</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mb-1">
                      <span className="font-semibold text-xs md:text-sm">Email:</span>
                      <ul className="list-disc list-inside ml-3 text-xs md:text-sm text-gray-700 space-y-0.5">
                        <li>Digital: <a href="mailto:grievance.redressaldl@hdfcbank.com" className="text-blue-700 underline">grievance.redressaldl@hdfcbank.com</a></li>
                        <li>Non-Credit Card: <a href="mailto:grievance.redressal@hdfcbank.com" className="text-blue-700 underline">grievance.redressal@hdfcbank.com</a></li>
                        <li>Credit Card: <a href="mailto:grievance.redressalcc@hdfcbank.com" className="text-blue-700 underline">grievance.redressalcc@hdfcbank.com</a></li>
                      </ul>
                    </div>
                    <div className="mb-1 text-xs md:text-sm">Fill out the <a href="#" className="text-blue-700 underline">Complaints/Query/Request Form</a></div>
                    <div className="mb-1 text-gray-600 text-xs md:text-sm">Resolution Time: 10 days</div>
                  </div>
                  {/* Divider */}
                  <div className="border-t border-blue-100 my-2"></div>
                  {/* Level 3 */}
                  <div>
                    <h4 className="font-bold text-blue-700 text-base md:text-lg mb-1 flex items-center gap-1">Level 3: Principal Nodal Officer</h4>
                    <div className="text-xs md:text-sm text-gray-800 mb-1">If Level 2 doesn't resolve your concern, contact the Principal Nodal Officer:</div>
                    <div className="flex flex-col gap-0.5 mb-1">
                      <div className="flex items-center gap-2 text-xs md:text-sm"><span className="font-semibold">✉️ Email:</span> <a href="mailto:pnohdfcbank@hdfcbank.com" className="text-blue-700 underline">pnohdfcbank@hdfcbank.com</a></div>
                      <div className="flex items-center gap-2 text-xs md:text-sm"><span className="font-semibold">🕒 Hours:</span> Mon-Sat, 9:30am-5:30pm (Excl. 2nd & 4th Sat, Holidays)</div>
                    </div>
                    <div className="mb-1 font-semibold text-xs md:text-sm">Regional Nodal Officers (sample):</div>
                    <div className="overflow-x-auto mb-1">
                      <table className="min-w-full w-full text-xs md:text-sm border border-blue-100 rounded">
                        <thead className="bg-blue-50">
                          <tr>
                            <th className="py-1 px-2 border text-xs md:text-sm">Region</th>
                            <th className="py-1 px-2 border text-xs md:text-sm">Contact</th>
                            <th className="py-1 px-2 border text-xs md:text-sm">Email</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white"><td className="border px-2 py-1">AP & Telangana</td><td className="border px-2 py-1 font-mono">040-67921327</td><td className="border px-2 py-1 font-mono">044-69039236</td></tr>
                          <tr className="bg-blue-50"><td className="border px-2 py-1">Bihar</td><td className="border px-2 py-1 font-mono">9973665832</td><td className="border px-2 py-1 font-mono">7267850740</td></tr>
                          <tr className="bg-white"><td className="border px-2 py-1">Delhi</td><td className="border px-2 py-1 font-mono">9211583131</td><td className="border px-2 py-1 font-mono">9354914683</td></tr>
                          <tr className="bg-blue-50"><td className="border px-2 py-1">Mumbai</td><td className="border px-2 py-1 font-mono">022-24811081</td><td className="border px-2 py-1 font-mono">022-62841505</td></tr>
                          <tr className="bg-white"><td className="border px-2 py-1">West Bengal</td><td className="border px-2 py-1 font-mono">033-44065165</td><td className="border px-2 py-1 font-mono">033-44065165</td></tr>
                        </tbody>
                      </table>
                    </div>
                    {/* Full Regional Email IDs Table */}
                    <div className="mt-4">
                      <h4 className="font-bold text-blue-700 text-xs md:text-sm mb-1">Regional Email IDs for Nodal Officers</h4>
                      <div className="overflow-x-auto">
                        <table className="min-w-full text-xs md:text-sm border border-blue-200 rounded bg-white">
                          <thead className="bg-blue-100">
                            <tr>
                              <th className="py-2 px-3 border text-left">Region</th>
                              <th className="py-2 px-3 border text-left">State(s)</th>
                              <th className="py-2 px-3 border text-left">Email ID</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr><td className="border px-3 py-1">Ahmedabad</td><td className="border px-3 py-1">Gujarat</td><td className="border px-3 py-1"><a href="mailto:bohdfcahm@hdfcbank.com" className="text-blue-700 underline">bohdfcahm@hdfcbank.com</a></td></tr>
                            <tr><td className="border px-3 py-1">Guwahati</td><td className="border px-3 py-1">Assam/Manipur/Meghalaya/Tripura/Sikkim/Mizoram/Arunachal Pradesh/Nagaland</td><td className="border px-3 py-1"><a href="mailto:bohdfcasm@hdfcbank.com" className="text-blue-700 underline">bohdfcasm@hdfcbank.com</a></td></tr>
                            <tr><td className="border px-3 py-1">Bengaluru</td><td className="border px-3 py-1">Karnataka</td><td className="border px-3 py-1"><a href="mailto:bohdfcblr@hdfcbank.com" className="text-blue-700 underline">bohdfcblr@hdfcbank.com</a></td></tr>
                            <tr><td className="border px-3 py-1">Bhubaneswar</td><td className="border px-3 py-1">Odisha</td><td className="border px-3 py-1"><a href="mailto:bohdfcbr@hdfcbank.com" className="text-blue-700 underline">bohdfcbr@hdfcbank.com</a></td></tr>
                            <tr><td className="border px-3 py-1">Bhopal</td><td className="border px-3 py-1">Madhya Pradesh</td><td className="border px-3 py-1"><a href="mailto:bohdfcbpl@hdfcbank.com" className="text-blue-700 underline">bohdfcbpl@hdfcbank.com</a></td></tr>
                            <tr><td className="border px-3 py-1">Chandigarh/Shimla</td><td className="border px-3 py-1">Himachal Pradesh/Punjab/Chandigarh</td><td className="border px-3 py-1"><a href="mailto:bohdfccgh@hdfcbank.com" className="text-blue-700 underline">bohdfccgh@hdfcbank.com</a></td></tr>
                            <tr><td className="border px-3 py-1">Chennai I & II</td><td className="border px-3 py-1">Tamil Nadu</td><td className="border px-3 py-1"><a href="mailto:bohdfccfn@hdfcbank.com" className="text-blue-700 underline">bohdfccfn@hdfcbank.com</a></td></tr>
                            <tr><td className="border px-3 py-1">Dehradun</td><td className="border px-3 py-1">Uttarakhand</td><td className="border px-3 py-1"><a href="mailto:bohdfccddn@hdfcbank.com" className="text-blue-700 underline">bohdfccddn@hdfcbank.com</a></td></tr>
                            <tr><td className="border px-3 py-1">Delhi I & II</td><td className="border px-3 py-1">Delhi & Haryana</td><td className="border px-3 py-1"><a href="mailto:bohdfcdel@hdfcbank.com" className="text-blue-700 underline">bohdfcdel@hdfcbank.com</a></td></tr>
                            <tr><td className="border px-3 py-1">Hyderabad</td><td className="border px-3 py-1">Andhra Pradesh/Telangana</td><td className="border px-3 py-1"><a href="mailto:bohdfchyd@hdfcbank.com" className="text-blue-700 underline">bohdfchyd@hdfcbank.com</a></td></tr>
                            <tr><td className="border px-3 py-1">Jammu</td><td className="border px-3 py-1">Jammu/Kashmir</td><td className="border px-3 py-1"><a href="mailto:bohdfcjammu@hdfcbank.com" className="text-blue-700 underline">bohdfcjammu@hdfcbank.com</a></td></tr>
                            <tr><td className="border px-3 py-1">Jaipur</td><td className="border px-3 py-1">Rajasthan</td><td className="border px-3 py-1"><a href="mailto:bohdfcjr@hdfcbank.com" className="text-blue-700 underline">bohdfcjr@hdfcbank.com</a></td></tr>
                            <tr><td className="border px-3 py-1">Kolkata I & II</td><td className="border px-3 py-1">West Bengal</td><td className="border px-3 py-1"><a href="mailto:bohdfckol@hdfcbank.com" className="text-blue-700 underline">bohdfckol@hdfcbank.com</a></td></tr>
                            <tr><td className="border px-3 py-1">Kanpur</td><td className="border px-3 py-1">Uttar Pradesh</td><td className="border px-3 py-1"><a href="mailto:bohdfckpr@hdfcbank.com" className="text-blue-700 underline">bohdfckpr@hdfcbank.com</a></td></tr>
                            <tr><td className="border px-3 py-1">Mumbai I & II</td><td className="border px-3 py-1">Maharashtra/Goa</td><td className="border px-3 py-1"><a href="mailto:bohdfcmum@hdfcbank.com" className="text-blue-700 underline">bohdfcmum@hdfcbank.com</a></td></tr>
                            <tr><td className="border px-3 py-1">Patna</td><td className="border px-3 py-1">Bihar</td><td className="border px-3 py-1"><a href="mailto:bohdfcptn@hdfcbank.com" className="text-blue-700 underline">bohdfcptn@hdfcbank.com</a></td></tr>
                            <tr><td className="border px-3 py-1">Raipur</td><td className="border px-3 py-1">Chhattisgarh</td><td className="border px-3 py-1"><a href="mailto:bohdfcraip@hdfcbank.com" className="text-blue-700 underline">bohdfcraip@hdfcbank.com</a></td></tr>
                            <tr><td className="border px-3 py-1">Ranchi</td><td className="border px-3 py-1">Jharkhand</td><td className="border px-3 py-1"><a href="mailto:bohdfcrnc@hdfcbank.com" className="text-blue-700 underline">bohdfcrnc@hdfcbank.com</a></td></tr>
                            <tr><td className="border px-3 py-1">Thiruvananthapuram</td><td className="border px-3 py-1">Kerala/Lakshadweep</td><td className="border px-3 py-1"><a href="mailto:bohdfctrv@hdfcbank.com" className="text-blue-700 underline">bohdfctrv@hdfcbank.com</a></td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="text-gray-600 text-xs md:text-sm mt-2">Resolution Time: 10 days</div>
                  </div>
                  {/* Divider */}
                  <div className="border-t border-blue-100 my-2"></div>
                  {/* Level 4 */}
                  <div>
                    <h4 className="font-bold text-blue-700 text-base md:text-lg mb-1 flex items-center gap-1">Level 4: Banking Ombudsman</h4>
                    <ul className="list-disc list-inside ml-3 text-xs md:text-sm text-gray-700 mb-1">
                      <li>If your issue remains unresolved after Level 1-3, or no reply within 30 days, contact the Banking Ombudsman (RBI).</li>
                      <li>Use the <a href="https://cms.rbi.org.in" className="text-blue-700 underline">RBI Banking Ombudsman</a> or Centralized Public Grievance Redress And Monitoring System.</li>
                    </ul>
                    <div className="text-xs md:text-sm text-gray-500">Note: Keep proof of all complaints filed for your records.</div>
                  </div>
                </div>
              </div>
              {/* Sidebar (Right, 40%) - Video and Complaint Tips, hidden on mobile */}
              <aside className="hidden lg:block">
                <div className="sticky top-24 flex flex-col gap-3">
                  {/* Video Card */}
                  <div className="bg-white rounded-xl shadow-md border border-gray-200 max-w-[320px] w-full overflow-hidden">
                    <div className="bg-blue-700 rounded-t px-3 py-2">
                      <h3 className="text-white text-base font-bold text-center">How to File a Complaint (Video)</h3>
                    </div>
                    <div className="p-2 flex flex-col items-center">
                      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" className="block w-full">
                        <div className="relative rounded-xl overflow-hidden shadow-lg border border-white/20 mb-2 h-32 w-full bg-black flex items-center justify-center">
                          <img src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" alt="How to File a Complaint" className="w-full h-full object-cover opacity-80" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white/80 rounded-full p-2 shadow-lg">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.25v13.5l13.5-6.75-13.5-6.75z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </a>
                      <div className="text-center text-gray-700 text-xs md:text-sm font-semibold">Watch this short video to learn how to file a complaint with HDFC Bank step by step.</div>
                    </div>
                  </div>
                  {/* Complaint Tips Card */}
                  <div className="bg-white rounded-xl shadow-md border border-gray-200 max-w-[320px] w-full overflow-hidden">
                    <div className="bg-orange-700 rounded-t px-3 py-2">
                      <h3 className="text-white text-base font-bold text-center">Complaint Tips</h3>
                    </div>
                    <ul className="divide-y divide-gray-100">
                      <li className="px-3 py-2 text-gray-700 text-xs md:text-sm">✔️ Keep all complaint reference numbers safe</li>
                      <li className="px-3 py-2 text-gray-700 text-xs md:text-sm">✔️ Always use your registered email/phone</li>
                      <li className="px-3 py-2 text-gray-700 text-xs md:text-sm">✔️ Attach supporting documents/screenshots</li>
                      <li className="px-3 py-2 text-gray-700 text-xs md:text-sm">✔️ Escalate only if not resolved in time</li>
                      <li className="px-3 py-2 text-gray-700 text-xs md:text-sm">✔️ For urgent issues, call customer care directly</li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        )}

        {/* Quick Help Tab */}
        {activeTab === "quickhelp" && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Help Center</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Get instant help for common issues. Find answers to frequently asked questions and get quick solutions.
                </p>
              </div>
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for help topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
          

    {/* Quick Services Section */}
<div className="mb-12">
  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
    <ExternalLink className="h-6 w-6 text-blue-600" />
    Explore Quick Services
  </h3>

  {/* Service Links Table */}
  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
      <h4 className="text-white font-bold text-lg flex items-center gap-2">
        <Globe className="h-5 w-5" />
        Essential Banking Services
      </h4>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Service</th>
            <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Description</th>
            <th className="px-6 py-4 text-center text-sm font-bold text-gray-700">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {[
            {
              title: "NetBanking Login",
              icon: "🏦",
              description: "Access your account online",
              url: "https://netbanking.hdfcbank.com/netbanking/",
              category: "primary"
            },
            {
              title: "Find ATM/Branch",
              icon: "📍",
              description: "Locate nearest ATM or branch",
              url: "https://near-me.hdfcbank.com/branch-atm-locator/",
              category: "primary"
            },
            {
              title: "Customer Care Numbers",
              icon: "📞",
              description: "Get help and support",
              url: "https://www.hdfcbank.com/personal/need-help/customer-care",
              category: "primary"
            },
            {
              title: "Credit Card NetBanking",
              icon: "💳",
              description: "Manage your credit cards",
              url: "https://www.hdfcbank.com/personal/ways-to-bank/online-banking/credit-card-netbanking",
              category: "card"
            },
            {
              title: "Block Credit Card",
              icon: "🚨",
              description: "Block lost or stolen card",
              url: "https://www.hdfcbank.com/personal/pay/cards/credit-cards/block-loststolen-card",
              category: "urgent"
            },
            {
              title: "Block Unauthorized Txn",
              icon: "🔒",
              description: "Report unauthorized transactions",
              url: "https://www.hdfcbank.com/personal/need-help/contact-us/unauthorized-electronic-banking",
              category: "urgent"
            },
            {
              title: "Complaint Form",
              icon: "📝",
              description: "File a new complaint",
              url: "https://leads.hdfcbank.com/applications/webforms/apply/complaint_form_new.asp",
              category: "support"
            },
            {
              title: "Track Complaint Status",
              icon: "📊",
              description: "Check complaint progress",
              url: "https://leads.hdfcbank.com/applications/misc/CST/cstracker.aspx",
              category: "support"
            },
            {
              title: "Alt. Complaint Tracker",
              icon: "🔄",
              description: "Alternative tracking portal",
              url: "https://osappsext.hdfc.com/TrackYourStatus/TrackingStatus?CaseType=Complaint",
              category: "support"
            },
            {
              title: "Customer Support Center",
              icon: "🏢",
              description: "Escalation and support",
              url: "https://www.hdfcbank.com/personal/about-us/corporate-governance/banking-customer-helpdesk",
              category: "support"
            },
            {
              title: "Open Savings Account",
              icon: "🏦",
              description: "Apply for new account",
              url: "https://www.hdfcbank.com/personal/save/accounts/savings-accounts",
              category: "account"
            },
            {
              title: "Apply for Credit Card",
              icon: "💳",
              description: "Get a new credit card",
              url: "https://applyonline.hdfcbank.com/cards/credit-cards.html",
              category: "card"
            },
            {
              title: "Apply for Loan Online",
              icon: "💰",
              description: "Quick loan application",
              url: "https://www.hdfcbank.com/personal/borrow/popular-loans",
              category: "loan"
            },
            {
              title: "Online Services – 24/7",
              icon: "🌐",
              description: "Round-the-clock banking",
              url: "https://www.hdfcbank.com/personal/resources/ways-to-bank/online-banking/insta-services",
              category: "primary"
            },
          ].map((item, index) => {
            const getCategoryColor = (category) => {
              switch(category) {
                case 'urgent': return 'bg-red-50 border-l-4 border-red-400';
                case 'primary': return 'bg-blue-50 border-l-4 border-blue-400';
                case 'card': return 'bg-purple-50 border-l-4 border-purple-400';
                case 'support': return 'bg-green-50 border-l-4 border-green-400';
                case 'account': return 'bg-indigo-50 border-l-4 border-indigo-400';
                case 'loan': return 'bg-orange-50 border-l-4 border-orange-400';
                default: return 'bg-gray-50 border-l-4 border-gray-400';
              }
            };
            
            return (
              <tr key={index} className={`hover:bg-gray-50 transition-colors ${getCategoryColor(item.category)}`}>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="font-semibold text-gray-900">{item.title}</div>
                      <div className="text-sm text-gray-500">{item.description}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-600 max-w-xs">
                    {item.description}
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
</div>

{/* App Install Section */}
<div className="mb-12">
  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
    <Smartphone className="h-6 w-6 text-orange-600" />
    Install HDFC Bank Apps
  </h3>

  {/* App Links Table */}
  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
    <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4">
      <h4 className="text-white font-bold text-lg flex items-center gap-2">
        <Smartphone className="h-5 w-5" />
        Mobile Banking Applications
      </h4>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">App</th>
            <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Features</th>
            <th className="px-6 py-4 text-center text-sm font-bold text-gray-700">Download</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {[
            {
              title: "MobileBanking App",
              icon: "📱",
              description: "All-in-one banking app",
              features: "Account, UPI, Bill Pay, FD/RD, Fund Transfer",
              url: "https://play.google.com/store/apps/details?id=com.snapwork.hdfc",
              category: "primary"
            },
            {
              title: "PayZapp",
              icon: "💳",
              description: "Digital payments & shopping",
              features: "UPI, recharges, wallet, shopping, rewards",
              url: "https://play.google.com/store/apps/details?id=com.enstage.wibmo.hdfc",
              category: "payment"
            },
            {
              title: "MyCards App",
              icon: "🎴",
              description: "Credit card management",
              features: "Card control, limits, alerts, transactions",
              url: "https://play.google.com/store/apps/details?id=com.hdfcbank.mycards",
              category: "card"
            },
            {
              title: "Loan Assist App",
              icon: "🏠",
              description: "Loan application & tracking",
              features: "Apply & track loans, EMI calculator, documents",
              url: "https://play.google.com/store/apps/details?id=com.hdfc.loanassist",
              category: "loan"
            },
            {
              title: "InstaLoans App",
              icon: "⚡",
              description: "Instant loan eligibility",
              features: "Check loan eligibility instantly, quick approval",
              url: "https://play.google.com/store/apps/details?id=com.hdfc.instaloans",
              category: "loan"
            },
          ].map((app, index) => {
            const getCategoryColor = (category) => {
              switch(category) {
                case 'primary': return 'bg-blue-50 border-l-4 border-blue-400';
                case 'payment': return 'bg-green-50 border-l-4 border-green-400';
                case 'card': return 'bg-purple-50 border-l-4 border-purple-400';
                case 'loan': return 'bg-orange-50 border-l-4 border-orange-400';
                default: return 'bg-gray-50 border-l-4 border-gray-400';
              }
            };
            
            return (
              <tr key={index} className={`hover:bg-gray-50 transition-colors ${getCategoryColor(app.category)}`}>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{app.icon}</span>
                    <div>
                      <div className="font-semibold text-gray-900">{app.title}</div>
                      <div className="text-sm text-gray-500">{app.description}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-600 max-w-xs">
                    {app.features}
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors font-semibold text-sm"
                  >
                    <Download className="h-4 w-4" />
                    Install
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
</div>


              {/* FAQ Section */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                                     {faqs.filter(faq => 
                     searchQuery === "" || 
                     faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                     faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
                   ).map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="border border-gray-200 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full text-left p-6 hover:bg-gray-50 transition-colors flex items-center justify-between"
                      >
                        <span className="font-semibold text-gray-900">{faq.question}</span>
                        <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openFaq === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 text-gray-700 bg-gray-50">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Video Guide Tab */}
        {activeTab === "video" && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PlayCircle className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Video Tutorials</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Watch step-by-step video guides to help you resolve issues and learn about our services.
                </p>
              </div>
              {/* Featured Video */}
              <div className="max-w-4xl mx-auto mb-8">
                <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden relative group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                      <PlayCircle className="h-12 w-12 text-gray-900 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-xl font-semibold mb-2">
                      How to Contact {company.name} Customer Support
                    </h3>
                    <div className="flex items-center gap-4 text-white/80 text-sm">
                      <span>Duration: 5:32</span>
                      <span>•</span>
                      <span>1.2M views</span>
                      <span>•</span>
                      <span>98% helpful</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 mt-6">
                  <button className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition-colors font-semibold">
                    <PlayCircle className="h-5 w-5" />
                    Watch Now
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                    <Download className="h-5 w-5" />
                    Download
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                    <Share2 className="h-5 w-5" />
                    Share
                  </button>
                </div>
              </div>
              {/* Related Videos */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Related Videos</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: "Check Account Balance", duration: "2:15", views: "500K" },
                    { title: "Recharge Your Account", duration: "3:45", views: "750K" },
                    { title: "Network Settings Guide", duration: "4:20", views: "300K" },
                    { title: "Complaint Resolution Process", duration: "6:10", views: "420K" },
                    { title: "Using Mobile App", duration: "5:30", views: "680K" },
                    { title: "Bill Payment Methods", duration: "3:55", views: "290K" },
                  ].map((video, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:shadow-lg transition-all cursor-pointer group"
                    >
                      <div className="aspect-video bg-gray-200 rounded-lg mb-3 flex items-center justify-center group-hover:bg-gray-300 transition-colors">
                        <PlayCircle className="h-8 w-8 text-gray-500 group-hover:text-gray-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {video.title}
                      </h4>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>{video.duration}</span>
                        <span>•</span>
                        <span>{video.views} views</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Company Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {[
                { label: "Founded", value: company.founded, icon: Calendar },
                { label: "Rating", value: `${company.rating}/5`, icon: Star },
                { label: "Monthly Searches", value: company.monthlySearches, icon: TrendingUp },
                { label: "Total Reviews", value: company.totalReviews.toLocaleString(), icon: Users },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 text-center border border-gray-100 shadow-lg"
                  >
                    <Icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
            {/* Services Grid */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Award className="h-6 w-6 text-blue-600" />
                Services Offered
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {company.services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Check className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-medium text-gray-900">{service}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Contact Information Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <Phone className="h-6 w-6 text-green-600" />
                  Primary Contact Numbers
                </h3>
                <div className="space-y-4">
                  {company.nationalNumbers.map((contact, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-semibold text-gray-900">{contact.type}</div>
                        <div className="text-sm text-gray-600">{contact.available}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleCall(contact.number)}
                          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                        >
                          {contact.number}
                        </button>
                        <button
                          onClick={() => copyToClipboard(contact.number)}
                          className="p-2 text-gray-600 hover:text-green-600 transition-colors"
                        >
                          <Copy className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <Globe className="h-6 w-6 text-blue-600" />
                  Online Presence
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-gray-900">Official Website</div>
                      <div className="text-sm text-gray-600">Complete services online</div>
                    </div>
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center gap-2"
                    >
                      Visit
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-gray-900">Customer Rating</div>
                      <div className="text-sm text-gray-600">{company.totalReviews.toLocaleString()} reviews</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="font-bold text-gray-900">{company.rating}/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Trust Indicators */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex flex-wrap items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-green-500" />
                <span className="font-medium">Verified Information</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-blue-500" />
                <span className="font-medium">Updated Daily</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-orange-500" />
                <span className="font-medium">Trusted by Millions</span>
              </div>
            </div>
            <div className="text-sm text-gray-500 font-medium">
              Last verified:{" "}
              {new Date().toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;

// CollapsibleTable component (add above export default)
const CollapsibleTable = ({ title, icon, description, columns, rows, copyIndex }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="mb-6">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 text-blue-700 font-semibold mb-2 focus:outline-none hover:underline"
        aria-expanded={open}
      >
        {icon}
        {title}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className="text-xs text-gray-500 mb-2 ml-7">{description}</div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border border-blue-100 mb-2">
                <thead className="bg-blue-50 text-blue-900 font-bold">
                  <tr>
                    {columns.map((col) => (
                      <th key={col} className="py-2 px-3">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, idx) => (
                    <tr key={row[0]} className={idx % 2 === 0 ? "bg-blue-50/40" : "bg-white"}>
                      {row.map((cell, i) => (
                        <td key={i} className="py-2 px-3 text-gray-800">
                          {i === copyIndex ? (
                            <span className="flex items-center gap-1">
                              {cell}
                              <button onClick={() => navigator.clipboard.writeText(cell)} className="hover:text-blue-500" title="Copy">
                                <Copy className="w-4 h-4" />
                              </button>
                            </span>
                          ) : (
                            cell
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};