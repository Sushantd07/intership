import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
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
          name: "HDFC Bank",
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/80 mb-6">
            <button
              onClick={() => navigate("/category")}
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              All Categories
            </button>
            <ChevronRight className="h-4 w-4" />
            <button
              onClick={() => navigate(`/category/${categoryId}`)}
              className="hover:text-white transition-colors"
            >
              {categoryId === "telecom"
                ? "Telecommunications"
                : "Banking & Finance"}
            </button>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white font-medium">{company.name}</span>
          </div>

          {/* Company Header */}
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center overflow-hidden">
                  {company.name === 'HDFC Bank' ? (
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      width={64}
                      height={64}
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
                  <div className="w-16 h-16 bg-blue-400 rounded-xl flex items-center justify-center text-white font-bold text-2xl hidden">
                    {company.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">
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

              <p className="text-xl text-white/90 mb-6 leading-relaxed">
                {company.description}
              </p>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => handleCall(company.nationalNumbers[0].number)}
                  className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
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

            {/* Company Info Card */}
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
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: "numbers", label: "Contact Numbers", icon: Phone },
              { id: "complaints", label: "File Complaint", icon: FileText },
              { id: "quickhelp", label: "Quick Help", icon: HelpCircle },
              { id: "video", label: "Video Guide", icon: PlayCircle },
              { id: "overview", label: "Overview", icon: Building2 },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
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
          <div className="w-full bg-[#F4F8FF] ">
            <div className="max-w-7xl mx-auto space-y-12">
              {/* Statewise Numbers Toggle Button */}
              <div className="flex justify-end mb-4">
                <button
                  onClick={() => setShowStatewiseNumbers(true)}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors font-semibold"
                >
                  <MapPin className="h-5 w-5" />
                  Statewise Numbers
                </button>
              </div>

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

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <Volume2 className="h-6 w-6 text-green-600" />
                  IVR Menu Guide
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <Menu className="h-5 w-5 text-blue-600" />
                      Main Menu Options
                    </h4>
                    <div className="space-y-3">
                      {company.ivrMenu?.mainMenu.map((option, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border">
                          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                            {option.option}
                          </div>
                          <span className="text-gray-700">{option.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                 
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <Settings className="h-5 w-5 text-green-600" />
                      Sub Menu Examples
                    </h4>
                    <div className="space-y-4">
                      {Object.entries(company.ivrMenu?.subMenus || {}).map(([key, submenu]) => (
                        <div key={key} className="border border-gray-200 rounded-lg p-4">
                          <h5 className="font-semibold text-gray-800 mb-2">Option {key} Sub-menu:</h5>
                          <div className="space-y-2">
                            {submenu.map((option, index) => (
                              <div key={index} className="flex items-center gap-2 text-sm">
                                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                                  {option.option}
                                </div>
                                <span className="text-gray-600">{option.description}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Info className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-blue-800">Pro Tip:</span>
                  </div>
                  <p className="text-blue-700 text-sm">
                    When calling, have your account number or customer ID ready. Listen carefully to the options and press the number slowly for better recognition.
                  </p>
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
          </div>




        )}

        {/* Complaints Tab */}
        {activeTab === "complaints" && (
          <div className="space-y-8">
            {/* Header Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">HDFC Bank Complaint Filing Guide</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Follow our comprehensive step-by-step guide to file complaints with HDFC Bank. We provide multiple channels and escalation procedures to ensure your concerns are addressed promptly and effectively.
                </p>
              </div>

              {/* Quick Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-red-50 rounded-xl border border-red-100">
                  <Phone className="h-8 w-8 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Customer Care</h3>
                  <button
                    onClick={() => handleCall("1800-258-6161")}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                  >
                    1800-258-6161
                  </button>
                  <p className="text-xs text-gray-500 mt-2">24x7 Available</p>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <Mail className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                  <button
                    onClick={() => copyToClipboard("grievance.redressal@hdfcbank.com")}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm"
                  >
                    Copy Email
                  </button>
                  <p className="text-xs text-gray-500 mt-2">Response within 24 hours</p>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-xl border border-green-100">
                  <Globe className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Online Portal</h3>
                  <a
                    href="https://www.hdfcbank.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold inline-block"
                  >
                    Visit Website
                  </a>
                  <p className="text-xs text-gray-500 mt-2">24x7 Online Access</p>
                </div>
              </div>
            </div>

            {/* Step-by-Step Complaint Process */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <Flag className="h-6 w-6 text-red-600" />
                Step-by-Step Complaint Filing Process
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Contact Customer Care First",
                    description: "Call our 24x7 customer care number 1800-258-6161 for immediate assistance. Most issues are resolved at this level.",
                    icon: Phone,
                    color: "blue",
                    details: [
                      "Have your account number and customer ID ready",
                      "Clearly explain your issue to the representative",
                      "Note down the complaint reference number",
                      "Ask for expected resolution timeline"
                    ]
                  },
                  {
                    step: 2,
                    title: "Use Digital Banking Channels",
                    description: "Log complaints through HDFC Bank Mobile App, NetBanking, or official website for faster tracking and resolution.",
                    icon: Smartphone,
                    color: "green",
                    details: [
                      "Login to HDFC Bank Mobile App or NetBanking",
                      "Navigate to 'Service Requests' or 'Complaints' section",
                      "Fill in complaint details with supporting documents",
                      "Track complaint status in real-time"
                    ]
                  },
                  {
                    step: 3,
                    title: "Visit Branch or Write to Bank",
                    description: "If unresolved, visit your home branch or write to the bank with complete details and supporting documents.",
                    icon: Building2,
                    color: "orange",
                    details: [
                      "Visit your home branch with ID proof and account details",
                      "Submit written complaint with supporting documents",
                      "Get acknowledgment receipt with complaint number",
                      "Follow up within 7-10 working days"
                    ]
                  },
                  {
                    step: 4,
                    title: "Escalate to Nodal Officer",
                    description: "If not satisfied with branch response, escalate to the Nodal Officer for your region within 30 days.",
                    icon: Users,
                    color: "purple",
                    details: [
                      "Write to Nodal Officer with previous complaint details",
                      "Include timeline of previous interactions",
                      "Attach all relevant documents and correspondence",
                      "Expect response within 7 working days"
                    ]
                  },
                  {
                    step: 5,
                    title: "Approach Principal Nodal Officer",
                    description: "If still unresolved, contact the Principal Nodal Officer as the final internal escalation point.",
                    icon: Award,
                    color: "indigo",
                    details: [
                      "Email: pnohdfcbank@hdfcbank.com",
                      "Include complete case history and documentation",
                      "Mention previous escalation attempts",
                      "Final response expected within 30 days"
                    ]
                  },
                  {
                    step: 6,
                    title: "External Regulatory Bodies",
                    description: "If internal channels fail, approach RBI Ombudsman or other regulatory authorities for resolution.",
                    icon: Flag,
                    color: "red",
                    details: [
                      "File complaint with RBI Ombudsman online",
                      "Contact Banking Ombudsman for your region",
                      "Approach Consumer Court if monetary compensation sought",
                      "Consider SEBI for investment-related complaints"
                    ]
                  }
                ].map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                    >
                      <div className="flex gap-6">
                        <div className="flex-shrink-0">
                          <div className={`w-12 h-12 ${
                            step.color === 'blue' ? 'bg-blue-600' : 
                            step.color === 'green' ? 'bg-green-600' : 
                            step.color === 'orange' ? 'bg-orange-600' : 
                            step.color === 'purple' ? 'bg-purple-600' :
                            step.color === 'indigo' ? 'bg-indigo-600' : 'bg-red-600'
                          } rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                            {step.step}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <Icon className={`h-6 w-6 ${
                              step.color === 'blue' ? 'text-blue-600' : 
                              step.color === 'green' ? 'text-green-600' : 
                              step.color === 'orange' ? 'text-orange-600' : 
                              step.color === 'purple' ? 'text-purple-600' :
                              step.color === 'indigo' ? 'text-indigo-600' : 'text-red-600'
                            }`} />
                            <h4 className="text-xl font-semibold text-gray-900">{step.title}</h4>
                          </div>
                          <p className="text-gray-700 mb-4">{step.description}</p>
                          <div className="bg-white rounded-lg p-4 border">
                            <h5 className="font-semibold text-gray-800 mb-2">📋 Action Items:</h5>
                            <ul className="space-y-1">
                              {step.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="text-sm text-gray-600 flex items-start gap-2">
                                  <Check className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Specialized Complaint Channels */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Specialized Complaint Channels</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Digital Banking Complaints */}
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <h4 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Digital Banking & Cards
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium text-blue-800">Email:</span>
                      <button
                        onClick={() => copyToClipboard("grievance.redressaldl@hdfcbank.com")}
                        className="ml-2 text-blue-600 hover:text-blue-800 underline"
                      >
                        grievance.redressaldl@hdfcbank.com
                      </button>
                    </div>
                    <div>
                      <span className="font-medium text-blue-800">For:</span>
                      <span className="ml-2 text-blue-700">NetBanking, Mobile Banking, Debit/Credit Cards</span>
                    </div>
                  </div>
                </div>

                {/* General Banking */}
                <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                  <h4 className="text-lg font-semibold text-green-900 mb-4 flex items-center gap-2">
                    <Building2 className="h-5 w-5" />
                    General Banking
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium text-green-800">Email:</span>
                      <button
                        onClick={() => copyToClipboard("grievance.redressal@hdfcbank.com")}
                        className="ml-2 text-green-600 hover:text-green-800 underline"
                      >
                        grievance.redressal@hdfcbank.com
                      </button>
                    </div>
                    <div>
                      <span className="font-medium text-green-800">For:</span>
                      <span className="ml-2 text-green-700">Savings, Current Accounts, Loans, Deposits</span>
                    </div>
                  </div>
                </div>

                {/* Credit Cards */}
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                  <h4 className="text-lg font-semibold text-purple-900 mb-4 flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Credit Cards
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium text-purple-800">Email:</span>
                      <button
                        onClick={() => copyToClipboard("grievance.redressalcc@hdfcbank.com")}
                        className="ml-2 text-purple-600 hover:text-purple-800 underline"
                      >
                        grievance.redressalcc@hdfcbank.com
                      </button>
                    </div>
                    <div>
                      <span className="font-medium text-purple-800">For:</span>
                      <span className="ml-2 text-purple-700">Credit Card billing, rewards, disputes</span>
                    </div>
                  </div>
                </div>

                {/* Principal Nodal Officer */}
                <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                  <h4 className="text-lg font-semibold text-red-900 mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Principal Nodal Officer
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium text-red-800">Email:</span>
                      <button
                        onClick={() => copyToClipboard("pnohdfcbank@hdfcbank.com")}
                        className="ml-2 text-red-600 hover:text-red-800 underline"
                      >
                        pnohdfcbank@hdfcbank.com
                      </button>
                    </div>
                    <div>
                      <span className="font-medium text-red-800">For:</span>
                      <span className="ml-2 text-red-700">Final escalation for unresolved complaints</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Nodal Officers */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Regional Nodal Officers</h3>
              <p className="text-gray-600 mb-6">Contact the Nodal Officer for your region if your complaint is not resolved at the branch level.</p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Region</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Coverage</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Email</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      { region: "Ahmedabad", coverage: "Gujarat", email: "bohdfcahm@hdfcbank.com" },
                      { region: "Assam", coverage: "North East", email: "bohdfcasm@hdfcbank.com" },
                      { region: "Bangalore", coverage: "Karnataka", email: "bohdfcblr@hdfcbank.com" },
                      { region: "Bhubaneswar", coverage: "Odisha", email: "bohdfcbnr@hdfcbank.com" },
                      { region: "Bhopal", coverage: "Madhya Pradesh", email: "bohdfcbpl@hdfcbank.com" },
                      { region: "Chandigarh", coverage: "Punjab, Haryana, HP", email: "bohdfccgh@hdfcbank.com" },
                      { region: "Chennai", coverage: "Tamil Nadu", email: "bohdfcchn@hdfcbank.com" },
                      { region: "Dehradun", coverage: "Uttarakhand", email: "bohdfcddn@hdfcbank.com" },
                      { region: "Delhi", coverage: "Delhi NCR", email: "bohdfcdel@hdfcbank.com" },
                      { region: "Hyderabad", coverage: "Telangana, AP", email: "bohdfchyd@hdfcbank.com" },
                      { region: "Jammu", coverage: "J&K, Ladakh", email: "bohdfcjammu@hdfcbank.com" },
                      { region: "Jaipur", coverage: "Rajasthan", email: "bohdfcjpr@hdfcbank.com" },
                      { region: "Kolkata", coverage: "West Bengal", email: "bohdfckol@hdfcbank.com" },
                      { region: "Kochi", coverage: "Kerala", email: "bohdfckpr@hdfcbank.com" },
                      { region: "Mumbai", coverage: "Maharashtra, Goa", email: "bohdfcmum@hdfcbank.com" },
                      { region: "Patna", coverage: "Bihar, Jharkhand", email: "bohdfcptn@hdfcbank.com" },
                      { region: "Raipur", coverage: "Chhattisgarh", email: "bohdfcrai@hdfcbank.com" },
                      { region: "Ranchi", coverage: "Jharkhand", email: "bohdfcrnc@hdfcbank.com" },
                      { region: "Trivandrum", coverage: "Kerala South", email: "bohdfctrv@hdfcbank.com" }
                    ].map((officer, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{officer.region}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{officer.coverage}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <button
                            onClick={() => copyToClipboard(officer.email)}
                            className="text-blue-600 hover:text-blue-800 underline flex items-center gap-1"
                          >
                            {officer.email}
                            <Copy className="h-3 w-3" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* External Regulatory Bodies */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">External Regulatory Bodies</h3>
              <p className="text-gray-600 mb-6">If your complaint is not resolved through internal channels, you can approach these regulatory authorities:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <h4 className="text-lg font-semibold text-blue-900 mb-4">RBI Banking Ombudsman</h4>
                  <div className="space-y-2 text-sm text-blue-800">
                    <p><strong>Website:</strong> <a href="https://rbi.org.in/Scripts/bs_viewcontent.aspx?Id=159" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">RBI Ombudsman Portal</a></p>
                    <p><strong>For:</strong> Banking service complaints</p>
                    <p><strong>Timeline:</strong> File within 1 year of bank's final reply</p>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                  <h4 className="text-lg font-semibold text-green-900 mb-4">Consumer Court</h4>
                  <div className="space-y-2 text-sm text-green-800">
                    <p><strong>For:</strong> Monetary compensation claims</p>
                    <p><strong>Jurisdiction:</strong> Based on complaint value</p>
                    <p><strong>Timeline:</strong> File within 2 years of cause of action</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Guidelines */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8 border border-blue-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <Info className="h-6 w-6 text-blue-600" />
                Important Guidelines
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">📝 Documentation Required</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Account number and customer ID
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Transaction details and receipts
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Previous correspondence with bank
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Supporting documents and evidence
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">⏰ Response Timelines</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      Customer Care: Immediate to 24 hours
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      Branch Level: 7 working days
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      Nodal Officer: 7 working days
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      Principal Nodal Officer: 30 days
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Original complaint section content continues below... */}
        {activeTab === "complaints" && false && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">HDFC Bank Complaint Filing Guide</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Follow our comprehensive step-by-step guide to file and resolve complaints with HDFC Bank effectively. We provide multiple channels for complaint resolution with proper escalation procedures.
                </p>
              </div>

              {/* Quick Contact Actions */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-6 bg-red-50 rounded-xl border border-red-100">
                  <Phone className="h-8 w-8 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Customer Care</h3>
                  <button
                    onClick={() => handleCall("1800-258-6161")}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors font-semibold text-sm"
                  >
                    1800-258-6161
                  </button>
                  <p className="text-xs text-gray-500 mt-1">24x7 Support</p>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <Mail className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Email Grievance</h3>
                  <button
                    onClick={() => copyToClipboard("grievance.redressal@hdfcbank.com")}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm"
                  >
                    Copy Email
                  </button>
                  <p className="text-xs text-gray-500 mt-1">General Complaints</p>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-xl border border-green-100">
                  <Globe className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Online Portal</h3>
                  <a
                    href="https://www.hdfcbank.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold inline-block text-sm"
                  >
                    Visit Portal
                  </a>
                  <p className="text-xs text-gray-500 mt-1">Online Complaints</p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-100">
                  <Building2 className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Branch Visit</h3>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors font-semibold text-sm">
                    Find Branch
                  </button>
                  <p className="text-xs text-gray-500 mt-1">In-Person Support</p>
                </div>
              </div>

              {/* Detailed Complaint Steps */}
              <div className="space-y-6 mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <Flag className="h-6 w-6 text-red-600" />
                  Step-by-Step Complaint Process
                </h3>
                {[
                  {
                    step: 1,
                    title: "Initial Contact - Customer Care",
                    description: "Start by calling HDFC Bank customer care for immediate assistance. Most issues are resolved at this level.",
                    icon: Phone,
                    color: "blue",
                    details: [
                      "Call 1800-258-6161 for general banking issues",
                      "Call 1800-266-4332 for credit card related complaints",
                      "Have your account number and customer ID ready",
                      "Note down the complaint reference number provided"
                    ],
                    timeframe: "Immediate - 24x7 availability"
                  },
                  {
                    step: 2,
                    title: "Branch Complaint Registration",
                    description: "Visit your nearest HDFC Bank branch if phone support doesn't resolve your issue.",
                    icon: Building2,
                    color: "green",
                    details: [
                      "Carry valid ID proof and account documents",
                      "Fill out the complaint form provided by the branch",
                      "Request a written acknowledgment with complaint number",
                      "Branch manager should address your concern within 3 working days"
                    ],
                    timeframe: "3-7 working days for resolution"
                  },
                  {
                    step: 3,
                    title: "Email Grievance Department",
                    description: "For unresolved issues, escalate to the bank's dedicated grievance department via email.",
                    icon: Mail,
                    color: "orange",
                    details: [
                      "General complaints: grievance.redressal@hdfcbank.com",
                      "Delhi region: grievance.redressaldl@hdfcbank.com", 
                      "Credit card issues: grievance.redressalcc@hdfcbank.com",
                      "Include all previous complaint details and reference numbers"
                    ],
                    timeframe: "7-15 working days for response"
                  },
                  {
                    step: 4,
                    title: "Principal Nodal Officer",
                    description: "If still unresolved, escalate to the Principal Nodal Officer for higher-level intervention.",
                    icon: UserCheck,
                    color: "purple",
                    details: [
                      "Email: pnohdfcbank@hdfcbank.com",
                      "Provide complete timeline of complaint journey",
                      "Include all previous communication and reference numbers",
                      "This is the final internal escalation level"
                    ],
                    timeframe: "15-30 days for final resolution"
                  },
                  {
                    step: 5,
                    title: "Banking Ombudsman",
                    description: "As the final resort, approach the RBI Banking Ombudsman for regulatory intervention.",
                    icon: Scale,
                    color: "red",
                    details: [
                      "File complaint online at RBI's CMS portal",
                      "Complaint must be filed within 30 days of final bank response",
                      "Visit: https://rbi.org.in/Scripts/bs_viewcontent.aspx?Id=159",
                      "Free service - no charges for filing complaints"
                    ],
                    timeframe: "30-60 days as per RBI guidelines"
                  }
                ].map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                    >
                      <div className="flex gap-6">
                        <div className="flex-shrink-0">
                          <div className={`w-12 h-12 ${step.color === 'blue' ? 'bg-blue-600' : step.color === 'green' ? 'bg-green-600' : step.color === 'orange' ? 'bg-orange-600' : step.color === 'purple' ? 'bg-purple-600' : 'bg-red-600'} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                            {step.step}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <Icon className={`h-6 w-6 ${step.color === 'blue' ? 'text-blue-600' : step.color === 'green' ? 'text-green-600' : step.color === 'orange' ? 'text-orange-600' : step.color === 'purple' ? 'text-purple-600' : 'text-red-600'}`} />
                            <h4 className="text-xl font-semibold text-gray-900">{step.title}</h4>
                            <div className="ml-auto flex items-center gap-1 text-sm text-gray-500">
                              <Clock3 className="h-4 w-4" />
                              {step.timeframe}
                            </div>
                          </div>
                          <p className="text-gray-700 mb-4">{step.description}</p>
                          <div className="bg-white rounded-lg p-4 border">
                            <h5 className="font-semibold text-gray-800 mb-2">📋 Required Actions:</h5>
                            <ul className="space-y-1">
                              {step.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="text-sm text-gray-600 flex items-start gap-2">
                                  <Check className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Grievance Contact Details */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Mail className="h-6 w-6 text-blue-600" />
                  HDFC Bank Grievance Email Directory
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      type: "General Complaints",
                      email: "grievance.redressal@hdfcbank.com",
                      description: "For all general banking complaints and grievances"
                    },
                    {
                      type: "Delhi Region",
                      email: "grievance.redressaldl@hdfcbank.com", 
                      description: "Specific grievance handling for Delhi region"
                    },
                    {
                      type: "Credit Card Issues",
                      email: "grievance.redressalcc@hdfcbank.com",
                      description: "Dedicated support for credit card related complaints"
                    },
                    {
                      type: "Principal Nodal Officer",
                      email: "pnohdfcbank@hdfcbank.com",
                      description: "Final internal escalation level for unresolved issues"
                    }
                  ].map((contact, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">{contact.type}</h4>
                      <div className="flex items-center gap-2 mb-2">
                        <code className="bg-gray-100 px-2 py-1 rounded text-sm text-blue-600 font-medium">
                          {contact.email}
                        </code>
                        <button
                          onClick={() => copyToClipboard(contact.email)}
                          className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                          title="Copy email"
                        >
                          <Copy className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-sm text-gray-600">{contact.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Banking Ombudsman Information */}
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-6 border border-red-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Scale className="h-6 w-6 text-red-600" />
                  Banking Ombudsman - Final Resolution Authority
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">When to Approach Banking Ombudsman:</h4>
                    <ul className="space-y-2">
                      {[
                        "Bank has not replied to your complaint within 30 days",
                        "You are not satisfied with the bank's response",
                        "Bank has not implemented the solution within agreed timeframe",
                        "You face service deficiencies not addressed by the bank"
                      ].map((point, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                          <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">How to File with Banking Ombudsman:</h4>
                    <ul className="space-y-2">
                      {[
                        "Visit RBI's online CMS portal for complaint filing",
                        "Submit complaint within 30 days of bank's final response",
                        "Include all previous complaint documentation",
                        "No fees required - completely free service"
                      ].map((point, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://rbi.org.in/Scripts/bs_viewcontent.aspx?Id=159"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors font-semibold text-sm"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Visit RBI Portal
                    </a>
                  </div>
                </div>
              </div>

              {/* Important Tips */}
              <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Info className="h-5 w-5 text-yellow-600" />
                  Important Complaint Filing Tips
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Always keep a record of complaint numbers and communications
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Provide complete details and supporting documents
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Follow up regularly within the specified timeframes
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Be clear and specific about the issue and expected resolution
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Escalate only after giving sufficient time for resolution
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Maintain professional and courteous communication
                    </li>
                  </ul>
                </div>
              </div>
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
              {/* Quick Contact Methods */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-lg transition-all">
                  <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Support</h3>
                  <p className="text-gray-600 text-sm mb-4">24x7 customer support available</p>
                  <button
                    onClick={() => handleCall(company.nationalNumbers[0].number)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    {company.nationalNumbers[0].number}
                  </button>
                  <p className="text-xs text-gray-500 mt-2">Average wait: 2-3 minutes</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 hover:shadow-lg transition-all">
                  <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
                  <p className="text-gray-600 text-sm mb-4">Chat with our support team</p>
                  <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                    Start Chat
                  </button>
                  <p className="text-xs text-gray-500 mt-2">Usually replies instantly</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200 hover:shadow-lg transition-all">
                  <Mail className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
                  <p className="text-gray-600 text-sm mb-4">Send us a detailed email</p>
                  <button
                    onClick={() => copyToClipboard("support@company.com")}
                    className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
                  >
                    Copy Email
                  </button>
                  <p className="text-xs text-gray-500 mt-2">Response within 2 hours</p>
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