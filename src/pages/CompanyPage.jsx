import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ImageThumbnail from "../components/ImageThumbnail";
import CompanyPageService from "../services/companyPageService";
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
  Home,
  User,
  Smile,
  UserPlus,
} from "lucide-react";
import CommentSection from '../components/CommentSection';
import ComplaintsTab from '../components/ComplaintsTab';
import AdminToggle from '../components/admin/AdminToggle';
import InlineEditor from '../components/admin/InlineEditor';
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
  const { categoryId, companySlug, companyId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Determine which routing structure is being used
  const isObjectIdRoute = location.pathname.includes('/company/');
  const companyIdentifier = isObjectIdRoute ? companyId : companySlug;
  
  // Debug logging for route determination
  console.log('Route Debug:', {
    pathname: location.pathname,
    categoryId,
    companySlug,
    companyId,
    isObjectIdRoute,
    companyIdentifier
  });
  
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
  const [searchQuery, setSearchQuery] = useState("");
  const [toast, setToast] = useState(null);

  // New state for API data
  const [contactNumbersData, setContactNumbersData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [smsDropdownOpen, setSmsDropdownOpen] = useState(false);
  // Add at the top of the component, after other useState hooks
  const [selectedIVRS, setSelectedIVRS] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [copiedSms, setCopiedSms] = useState(null);
  const [isAdminMode, setIsAdminMode] = useState(false);

  // Fetch company page data from API
  const fetchCompanyPageData = async (isManualRefresh = false) => {
    if (isManualRefresh) {
      setIsRefreshing(true);
    } else {
      setLoading(true);
    }
    setError(null);
    try {
      // Use the new consolidated API
      const url = `http://localhost:3000/api/subcategories/company/${companyIdentifier}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch company page data');
      }
      const result = await response.json();
      if (result.success) {
        setContactNumbersData(result.data);
        setLastUpdated(new Date());
      } else {
        throw new Error(result.message || 'Failed to fetch data');
      }
    } catch (err) {
      console.error('Error in fetchCompanyPageData:', err);
      setError(err.message);
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  // Fetch dynamic company data based on slug
  const fetchDynamicCompanyData = async (isManualRefresh = false) => {
    if (isManualRefresh) {
      setIsRefreshing(true);
    } else {
      setLoading(true);
    }
    setError(null);
    
    try {
      // Use the CompanyPageService to fetch data by slug
      const companyData = await CompanyPageService.getCompanyPageBySlug(companySlug);
      setContactNumbersData(companyData);
          setLastUpdated(new Date());
    } catch (error) {
      console.error('Error fetching dynamic company data:', error);
      setError('Failed to load company data');
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  // Fetch contact numbers data from API (for backward compatibility)
  const fetchContactNumbersData = async (isManualRefresh = false) => {
    if (isObjectIdRoute) {
      // Use new consolidated API
      return fetchCompanyPageData(isManualRefresh);
    } else {
      // Use CompanyPageService for all company data
      if (isManualRefresh) {
        setIsRefreshing(true);
      } else {
        setLoading(true);
      }
      setError(null);
      
      try {
        console.log('Fetching contact numbers data for companySlug:', companySlug);
        
        // Use the CompanyPageService to fetch data by slug
        const companyData = await CompanyPageService.getCompanyPageBySlug(companySlug);
        setContactNumbersData(companyData);
            setLastUpdated(new Date());
      } catch (err) {
        setError(err.message);
        console.error('Error fetching contact numbers:', err);
      } finally {
        setLoading(false);
        setIsRefreshing(false);
      }
    }
  };

  // Fetch data when component mounts or when switching to numbers or complaints tab
  useEffect(() => {
    if (activeTab === "numbers" || activeTab === "complaints") {
      if (isObjectIdRoute) {
        fetchCompanyPageData();
      } else if (companySlug) {
        // For all company pages, fetch from company API first
        fetchCompanyPageData();
      } else {
        fetchContactNumbersData();
      }
    }
  }, [activeTab, companyIdentifier, companySlug, isObjectIdRoute]);

  // Real-time data fetching with polling
  useEffect(() => {
    let intervalId;
    
    if (activeTab === "numbers" || activeTab === "complaints") {
      // Initial fetch
      if (isObjectIdRoute) {
        fetchCompanyPageData();
      } else if (companySlug) {
        fetchCompanyPageData();
      } else {
        fetchContactNumbersData();
      }
      
      // Set up polling every 30 seconds for real-time updates
      intervalId = setInterval(() => {
        if (isObjectIdRoute) {
          fetchCompanyPageData(false); // Auto-refresh, not manual
        } else if (companySlug) {
          fetchCompanyPageData(false); // Auto-refresh, not manual
        } else {
          fetchContactNumbersData(false); // Auto-refresh, not manual
        }
      }, 30000); // 30 seconds interval
    }

    // Cleanup interval on component unmount or tab change
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [activeTab]);

  // Redirect to /contactnumber if no tab is present in the URL
  useEffect(() => {
    const pathSegments = location.pathname.split("/");
    const lastSegment = pathSegments[pathSegments.length - 1];
    // Only redirect if the last segment is the companySlug (i.e., no tab present)
    if (lastSegment === companySlug) {
      navigate(`/category/${categoryId}/${companySlug}/contactnumber`, { replace: true });
    }
  }, [categoryId, companySlug, location.pathname, navigate]);

  // Use only backend data - no hardcoded fallbacks
  const displayData = contactNumbersData;
  

  
  // Create unified data structure for rendering
  const unifiedData = {
    _id: displayData?._id || contactNumbersData?._id,
    name: displayData?.name || displayData?.companyName || 'Company',
    logo: displayData?.logo || '/company-logos/default.svg',
    description: displayData?.description || 'Company description',
    rating: displayData?.rating || 4.0,
    totalReviews: displayData?.totalReviews || 1000,
    monthlySearches: displayData?.monthlySearches || '1K',
    founded: displayData?.founded || 'N/A',
    headquarters: displayData?.headquarters || 'N/A',
    parentCompany: displayData?.parentCompany || 'N/A',
    website: displayData?.website || '#',
    phone: displayData?.phone || displayData?.mainPhone || 'N/A',
    nationalNumbers: displayData?.tabs?.numbers?.nationalNumbersSection?.items || [],
    stateWiseNumbers: displayData?.tabs?.numbers?.stateWiseNumbersSection?.states || {},
    smsServices: displayData?.tabs?.numbers?.smsServicesSection?.services || [],
    services: displayData?.services || [],
    videoGuide: displayData?.videoGuide || null,
    complaintContent: contactNumbersData?.complaintContent || displayData?.complaintContent || '',
    // Add the full contact numbers data for rendering
    contactNumbersData: displayData?.tabs?.numbers || null
  };
  
  // Use the contact numbers data directly for rendering
  const contactData = unifiedData.contactNumbersData || contactNumbersData;

  // Only redirect if we're not using ObjectId route and no company found in API data
  useEffect(() => {
    // Only redirect if we're not loading and have no data after a delay
    const redirectTimeout = setTimeout(() => {
      if (!isObjectIdRoute && !contactNumbersData && !loading) {
        navigate("/category");
      }
    }, 2000); // Wait 2 seconds for API data to load
    
    return () => clearTimeout(redirectTimeout);
  }, [contactNumbersData, navigate, isObjectIdRoute, companySlug, categoryId, loading]);

  // Sync activeTab with URL
  React.useEffect(() => {
    const seg = location.pathname.split("/").pop();
    setActiveTab(tabUrlToId[seg] || "numbers");
  }, [location.pathname]);

  // Show loading state if no data is available and still loading
  if (!contactNumbersData && loading) {
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
    if (window.confirm(`Call ${unifiedData.name} at ${number}?`)) {
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

  const handleSaveCompanyData = async (updatedData) => {
    try {
      // Check if we have a valid ID
      if (!unifiedData._id) {
        showToast('Error: Company ID not found', 'error');
        return;
      }
      
      // Optimize the data before sending
      const optimizedData = {
        ...updatedData,
        // Only send essential fields to reduce payload size
        name: updatedData.name,
        description: updatedData.description,
        founded: updatedData.founded,
        headquarters: updatedData.headquarters,
        rating: updatedData.rating,
        website: updatedData.website,
        phone: updatedData.phone,
        complaintContent: updatedData.complaintContent
      };
      
      // Make API call to save the data
      const response = await fetch(`http://localhost:3000/api/subcategories/company-page/${unifiedData._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(optimizedData)
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (result.success) {
        showToast('Company data saved successfully!', 'success');
        
        // Update the local state with the new data
        if (result.data) {
          // Force update the contact numbers data with the new data
          setContactNumbersData(prevData => {
            const newData = {
              ...prevData,
              ...result.data
            };
            return newData;
          });
        }
        
        // Force a complete refresh of the page data
        await fetchCompanyPageData(true);
        
        // Also force a re-render by updating the last updated timestamp
        setLastUpdated(new Date());
      } else {
        showToast(result.message || 'Error saving company data', 'error');
      }
      
    } catch (error) {
      console.error('Error saving company data:', error);
      showToast(`Error saving company data: ${error.message}`, 'error');
    }
  };

  // Handle inline editing saves
  const handleInlineSave = async (field, value) => {
    try {
      if (!unifiedData._id) {
        showToast('Error: Company ID not found', 'error');
        return;
      }

      // Create update data with only the changed field
      const updateData = {
        [field]: value
      };

      // Make API call to save the specific field
      const response = await fetch(`http://localhost:3000/api/subcategories/company-page/${unifiedData._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        showToast(`${field} updated successfully!`, 'success');
        
        // Update local state
        setContactNumbersData(prevData => ({
          ...prevData,
          [field]: value
        }));
        
        // Force refresh
        await fetchCompanyPageData(true);
        setLastUpdated(new Date());
      } else {
        showToast(result.message || 'Error updating field', 'error');
      }

    } catch (error) {
      console.error('Error saving inline edit:', error);
      showToast(`Error updating ${field}: ${error.message}`, 'error');
    }
  };

  const states = Object.keys(unifiedData.stateWiseNumbers);

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
  // Fill in data from unifiedData.stateWiseNumbers if available
  const stateTableRows = allStates.map((row) => {
    const offices = unifiedData.stateWiseNumbers[row.state];
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
      
      {/* Admin Toggle */}
      <AdminToggle 
        companyData={unifiedData}
        onSave={handleSaveCompanyData}
        onInlineSave={handleInlineSave}
        isAdminMode={isAdminMode}
        setIsAdminMode={setIsAdminMode}
      />
      

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
          {/* Last Verified Badge - Top Right Corner */}
          <div className="absolute top-4 right-4 z-10">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1.5 shadow-sm">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-xs font-medium text-gray-700">
                Verified: {new Date().toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
          
          {/* Professional Breadcrumb */}
          <div className="flex items-center gap-3 text-white/80 mb-3">
            <button 
              onClick={() => navigate('/category')}
              className="hover:text-white transition-colors flex items-center gap-2 font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              All Categories
            </button>
            <ChevronRight className="h-4 w-4" />
            <button 
              onClick={() => navigate(`/category/${categoryId}`)}
              className="hover:text-white transition-colors font-medium"
            >
              {categoryId === "telecom" ? "Telecommunications" : "Banking & Finance"}
            </button>
            <ChevronRight className="h-4 w-4" />
            <InlineEditor
              value={unifiedData.name}
              onSave={handleInlineSave}
              field="name"
              isAdminMode={isAdminMode}
              className="text-white font-semibold"
            >
              {unifiedData.name}
            </InlineEditor>
          </div>
          {/* Company Header */}
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-4"> {/* Less gap/margin */}
                <div className={`w-20 h-20 rounded-xl flex items-center justify-center overflow-hidden ${
                  unifiedData.name.includes('HDFC Bank') 
                    ? 'bg-white/95 shadow-lg border border-gray-200/50' 
                    : 'bg-white/95 shadow-lg border border-gray-200/50'
                }`}>
                  {unifiedData.name.includes('HDFC Bank') ? (
                    <img
                      src="/company-logos/Bank/hdfc_bank.svg"
                      alt="HDFC Bank logo"
                      className="w-16 h-16 object-contain shadow-md rounded-lg"
                      onError={(e) => {
                        const target = e.target;
                        target.style.display = "none";
                        const fallback = target.nextElementSibling;
                        if (fallback) {
                          fallback.textContent = unifiedData.name.charAt(0);
                          fallback.classList.remove("hidden");
                        }
                      }}
                    />
                  ) : (
                    <img
                      src={unifiedData.logo}
                      alt={`${unifiedData.name} logo`}
                      className="w-16 h-16 object-contain"
                      onError={(e) => {
                        const target = e.target;
                        target.style.display = "none";
                        const fallback = target.nextElementSibling;
                        if (fallback) {
                          fallback.textContent = unifiedData.name.charAt(0);
                          fallback.classList.remove("hidden");
                        }
                      }}
                    />
                  )}
                </div>
                <div>
                  <h1 className="text-4xl md:text-3xl font-bold mb-2">
                    <InlineEditor
                      value={unifiedData.name}
                      onSave={handleInlineSave}
                      field="name"
                      isAdminMode={isAdminMode}
                      className="text-white"
                    >
                      {unifiedData.name}
                    </InlineEditor>
                  </h1>
                  {unifiedData.role && (
                    <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium border border-white/30">
                      {unifiedData.role}
                    </div>
                  )}
                </div>
              </div>

              <p className="text-lg text-white/90 mb-4 leading-relaxed"> {/* Less margin below */}
                <InlineEditor
                  value={unifiedData.description}
                  onSave={handleInlineSave}
                  field="description"
                  type="textarea"
                  isAdminMode={isAdminMode}
                  className="text-white/90"
                >
                  {unifiedData.description}
                </InlineEditor>
              </p>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => handleCall(unifiedData.nationalNumbers[0]?.number || unifiedData.phone)}
                  className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 text-sm"
                >
                  <Phone className="h-4 w-4" />
                  Call Now: <InlineEditor
                    value={unifiedData.nationalNumbers[0]?.number || unifiedData.phone}
                    onSave={handleInlineSave}
                    field="phone"
                    isAdminMode={isAdminMode}
                    className="text-blue-600"
                  >
                    {unifiedData.nationalNumbers[0]?.number || unifiedData.phone}
                  </InlineEditor>
                </button>
                <a
                  href={unifiedData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm text-white font-semibold px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center gap-2 text-sm"
                >
                  <Globe className="h-4 w-4" />
                  Visit Website
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {unifiedData.name === 'HDFC Bank' ? (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20">
                <h3 className="text-base font-semibold text-white mb-2 text-center">How to Complain of HDFC Bank</h3>
                <a
                  href={`https://www.youtube.com/watch?v=${unifiedData.videoGuide?.videoId || ''}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <div className="relative rounded-xl overflow-hidden shadow-lg border border-white/20 mb-2 h-32">
                    <img
                      src={unifiedData.videoGuide?.thumbnail}
                      alt={unifiedData.videoGuide?.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/80 rounded-full p-2 shadow-lg">
                        <PlayCircle className="h-7 w-7 text-blue-700" />
                      </div>
                    </div>
                  </div>
                </a>
                <div className="text-white/90 text-xs text-center mb-1 font-semibold">{unifiedData.videoGuide?.title}</div>
                <div className="text-white/80 text-[11px] text-center mb-1">{unifiedData.videoGuide?.description}</div>
                <div className="text-white/60 text-[11px] text-center">Duration: {unifiedData.videoGuide?.duration} &bull; {unifiedData.videoGuide?.views} views</div>
              </div>
            ) : (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Company Information
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Founded</span>
                    <InlineEditor
                      value={unifiedData.founded}
                      onSave={handleInlineSave}
                      field="founded"
                      isAdminMode={isAdminMode}
                      className="font-bold text-white"
                    >
                      {unifiedData.founded}
                    </InlineEditor>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Headquarters</span>
                    <InlineEditor
                      value={unifiedData.headquarters}
                      onSave={handleInlineSave}
                      field="headquarters"
                      isAdminMode={isAdminMode}
                      className="font-bold text-white"
                    >
                      {unifiedData.headquarters}
                    </InlineEditor>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Parent Company</span>
                    <span className="font-bold text-white">
                      {unifiedData.parentCompany}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Role/Department</span>
                    <span className="font-bold text-white">
                      {unifiedData.role || 'Support'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Rating</span>
                    <InlineEditor
                      value={unifiedData.rating}
                      onSave={handleInlineSave}
                      field="rating"
                      type="number"
                      isAdminMode={isAdminMode}
                      className="font-bold text-white"
                    >
                      {unifiedData.rating}/5
                    </InlineEditor>
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

                {/* Loading State */}
                {loading && (
                  <div className="flex items-center justify-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                    <span className="ml-3 text-gray-600">Loading contact numbers...</span>
                  </div>
                )}

                {/* Error State */}
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                    <AlertCircle className="w-8 h-8 text-red-500 mx-auto mb-2" />
                    <h3 className="text-lg font-semibold text-red-800 mb-2">Error Loading Data</h3>
                    <p className="text-red-600 mb-4">{error}</p>
                    <button
                      onClick={fetchContactNumbersData}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Try Again
                    </button>
                  </div>
                )}

                {/* Top Contact Cards */}
                {contactData?.topContactCards && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contactData.topContactCards.cards.map((item, index) => {
                      const Icon = icons[index] || PhoneCall;
                      
                      // Permanent color schemes for 4 cards (like HDFC)
                      const colorSchemes = [
                        {
                          cardBg: "#D0E7FF",
                          iconBg: "#A8D8FF", 
                          textColor: "#16a34a"
                        },
                        {
                          cardBg: "#FFEAEA",
                          iconBg: "#FFCCCC",
                          textColor: "#e11d48"
                        },
                        {
                          cardBg: "#F5E9FF",
                          iconBg: "#E6D7FF",
                          textColor: "#9333ea"
                        },
                        {
                          cardBg: "#FFF9E5",
                          iconBg: "#FFF2B8",
                          textColor: "#ca8a04"
                        }
                      ];
                      
                      const colors = colorSchemes[index] || colorSchemes[0];
                      
                      return (
                        <div
                          key={index}
                          className="p-4 rounded-xl shadow hover:shadow-md transition"
                          style={{ backgroundColor: colors.cardBg }}
                        >
                          <div
                            className="w-12 h-12 rounded-md flex items-center justify-center mb-3"
                            style={{ backgroundColor: colors.iconBg }}
                          >
                            <Icon 
                              className="w-6 h-6" 
                              style={{ color: colors.textColor }}
                            />
                          </div>
                          <h4 className="text-sm font-semibold text-gray-800">
                            {item.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            <p 
                              className="text-lg font-extrabold"
                              style={{ color: colors.textColor }}
                            >
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
                )}

                {/* Bottom Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Helpline Numbers */}
                  {contactData?.helplineNumbersSection && (
                    <div className="bg-white rounded-xl shadow p-4">
                      <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-4">
                        <Phone className="w-5 h-5 text-blue-600" /> 
                        {contactData?.helplineNumbersSection?.heading?.text || "Helpline Numbers"}
                      </h3>
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-gray-100 text-gray-700 text-left font-semibold">
                            <th className="py-2 px-3">Service</th>
                            <th className="py-2 px-3">Number</th>
                          </tr>
                        </thead>
                        <tbody>
                          {contactData?.helplineNumbersSection?.table?.rows?.map((row, idx) => (
                            <tr
                              key={idx}
                              className={idx % 2 === 0 ? "bg-gray-50" : ""}
                            >
                              <td className="py-3 px-3 text-[15px] text-gray-800">
                                <div className="flex items-center h-full">
                                  <span className="inline-block border-l-4 border-blue-600 pl-2 font-semibold">
                                    {row[0]}
                                  </span>
                                </div>
                              </td>
                              <td className="py-3 px-3">
                                <div className="flex items-center gap-2">
                                  <span className="text-[16px] text-blue-600 font-semibold whitespace-nowrap">
                                    {row[1]}
                                  </span>
                                  <button
                                    onClick={() => copyToClipboard(row[1])}
                                    title="Copy"
                                    className="hover:text-blue-500"
                                  >
                                    <Copy className="w-4 h-4" />
                                  </button>
                                </div>
                                <div className="flex items-center gap-1 mt-1">
                                  {/* <div className="w-2 h-2 bg-green-500 rounded-full"></div> */}
                                  <span className="text-xs text-green-600 font-medium">24x7 Available</span>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* All India Numbers */}
                  {contactData?.allIndiaNumbersSection && (
                    <div className="bg-white rounded-xl shadow p-4 h-fit">
                      <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-4">
                        <Phone className="w-5 h-5 text-green-600" /> 
                        {contactData?.allIndiaNumbersSection?.heading?.text || "All India Numbers"}
                      </h3>
                      <table className="w-full text-[15px]">
                        <thead>
                          <tr className="bg-gray-100 text-gray-700 text-left font-semibold">
                            {contactData?.allIndiaNumbersSection?.table?.headers?.map((header, idx) => (
                              <th key={idx} className="py-2 px-3">{header}</th>
                            )) || (
                              <>
                                <th className="py-2 px-3">Number</th>
                                <th className="py-2 px-3">Description</th>
                              </>
                            )}
                          </tr>
                        </thead>
                        <tbody>
                          {contactData?.allIndiaNumbersSection?.table?.rows?.map((row, idx) => (
                            <tr
                              key={idx}
                              className={idx % 2 === 0 ? "bg-gray-50" : ""}
                            >
                              {row.map((cell, cellIdx) => (
                                <td key={cellIdx} className="py-3 px-3">
                                  {cellIdx === 0 ? (
                                    <div className="text-[16px] text-green-700 font-semibold whitespace-nowrap flex items-center gap-2">
                                      {cell}
                                      <button
                                        onClick={() => copyToClipboard(cell)}
                                        title="Copy"
                                        className="hover:text-blue-500"
                                      >
                                        <Copy className="w-4 h-4" />
                                      </button>
                                    </div>
                                  ) : (
                                    <span className="text-[14px] text-gray-700 leading-snug block max-w-sm">
                                      {cell}
                                    </span>
                                  )}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

              
                {/* SMS & WhatsApp Services */}
                {contactData?.smsServicesSection && (
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                        <MessageSquare className="h-6 w-6 text-blue-600" />
                        {contactData?.smsServicesSection?.heading?.text || "SMS & WhatsApp Services"}
                      </h3>
                      <button
                        onClick={() => setSmsDropdownOpen(!smsDropdownOpen)}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        View All SMS/WhatsApp Codes
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
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                            {contactData?.smsServicesSection?.services?.map((service, index) => {
                              const colors = [
                                { bg: 'bg-blue-50', border: 'border-blue-500', text: 'text-blue-700', borderText: 'text-blue-900' },
                                { bg: 'bg-green-50', border: 'border-green-500', text: 'text-green-700', borderText: 'text-green-900' },
                                { bg: 'bg-yellow-50', border: 'border-yellow-500', text: 'text-yellow-700', borderText: 'text-yellow-900' },
                                { bg: 'bg-red-50', border: 'border-red-500', text: 'text-red-700', borderText: 'text-red-900' },
                                { bg: 'bg-orange-50', border: 'border-orange-500', text: 'text-orange-700', borderText: 'text-orange-900' }
                              ];
                              const color = colors[index % colors.length];
                              
                              return (
                                <div key={service.code} className={`${color.bg} border-l-4 ${color.border} rounded-xl p-5 flex flex-col gap-2 shadow-sm`}>
                                  <div>
                                    <div className={`font-bold ${color.text} text-lg mb-1`}>{service.description}</div>
                                    <div className="text-gray-700 text-[15px] mb-1">Send the following SMS:</div>
                                    <div className="flex items-center gap-2 mb-1">
                                      <span className={`font-mono bg-white px-2 py-1 rounded border ${color.border} ${color.borderText} text-sm`}>
                                        {service.code}
                                      </span>
                                      <button 
                                        onClick={() => copyToClipboard(service.code)} 
                                        className="p-1 text-gray-400 hover:text-blue-600 transition-colors" 
                                        title="Copy message"
                                      >
                                        <Copy className="h-5 w-5" />
                                      </button>
                                    </div>
                                    <div className="text-xs text-gray-600">
                                      To: <span className={`font-mono ${color.text} font-bold`}>{service.number}</span> 
                                      <button 
                                        onClick={() => copyToClipboard(service.number)} 
                                        className="hover:text-blue-500" 
                                        title="Copy number"
                                      >
                                        <Copy className="w-4 h-4" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}

                {/* IVRS Menu */}
                {contactData?.ivrMenuSection && (
                  <div className="mb-8">
                    <div className="bg-gray-50 rounded-2xl shadow border border-gray-100 p-6 max-w-5xl mx-auto">
                      <div className="mb-4 text-center flex justify-center items-center gap-0">
                        <span className="font-bold text-lg text-blue-900 mr-3">IVRS Menu:</span>
                        {contactData?.ivrMenuSection?.menus?.map((menu, idx) => {
                          const isActive = selectedIVRS === idx;
                          return (
                            <React.Fragment key={idx}>
                              {idx > 0 && <span className="mx-2 text-gray-300 font-bold text-lg">/</span>}
                              <button
                                onClick={() => setSelectedIVRS(idx)}
                                className={
                                  `flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200
                                  text-base font-medium shadow-sm
                                  ${isActive
                                    ? 'bg-blue-600 text-white border-blue-700 shadow-md'
                                    : 'bg-white text-blue-700 border-blue-300 hover:bg-blue-100 hover:shadow'}
                                  `
                                }
                                style={{ minWidth: 140 }}
                              >
                                <Phone className="inline h-5 w-5 mb-1" />
                                {menu.title}
                              </button>
                            </React.Fragment>
                          );
                        })}
                      </div>
                      <div className="text-gray-700 text-sm mb-4 text-center font-normal">
                        <span className="font-medium">
                          {contactData?.ivrMenuSection?.description}
                        </span>
                      </div>
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={selectedIVRS}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.4 }}
                        >
                          <ul className="space-y-4">
                            {contactData?.ivrMenuSection?.menus?.[selectedIVRS]?.options?.map((item, index) => (
                              <li key={index}>
                                <div className="font-medium text-blue-800">
                                  Press {item.option}: {item.description}
                                </div>
                                {item.subOptions && item.subOptions.length > 0 && (
                                  <ul className="ml-6 mt-2 space-y-1 border-l-2 border-blue-100 pl-4 bg-blue-50 rounded">
                                    {item.subOptions.map((child, childIndex) => (
                                      <li key={childIndex}>
                                        <span className="font-medium text-blue-700">Press {child.option}: {child.description}</span>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                )}

                {/* Compact Modern Quick Links Section */}
                {/* <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <ExternalLink className="h-5 w-5 text-blue-600" />
                    <h3 className="text-xl font-bold text-blue-900 leading-tight">Quick Links</h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {[
                      { title: "NetBanking", url: "https://netbanking.hdfcbank.com/netbanking/", icon: Building2, color: 'bg-blue-100 text-blue-600' },
                      { title: "Branch/ATM", url: "https://near-me.hdfcbank.com/branch-atm-locator/", icon: MapPin, color: 'bg-green-100 text-green-600' },
                      { title: "Customer Care", url: "https://www.hdfcbank.com/personal/need-help/customer-care", icon: Phone, color: 'bg-indigo-100 text-indigo-600' },
                      { title: "Credit Card", url: "https://www.hdfcbank.com/personal/ways-to-bank/online-banking/credit-card-netbanking", icon: CreditCard, color: 'bg-yellow-100 text-yellow-600' },
                      { title: "Block Card", url: "https://www.hdfcbank.com/personal/pay/cards/credit-cards/block-loststolen-card", icon: ShieldAlert, color: 'bg-red-100 text-red-600' },
                      { title: "Report Fraud", url: "https://www.hdfcbank.com/personal/need-help/contact-us/unauthorized-electronic-banking", icon: Shield, color: 'bg-pink-100 text-pink-600' },
                      { title: "Complaint", url: "https://leads.hdfcbank.com/applications/webforms/apply/complaint_form_new.asp", icon: FileText, color: 'bg-purple-100 text-purple-600' },
                      { title: "Track Complaint", url: "https://leads.hdfcbank.com/applications/misc/CST/cstracker.aspx", icon: TrendingUp, color: 'bg-blue-100 text-blue-600' },
                      { title: "Support", url: "https://www.hdfcbank.com/personal/about-us/corporate-governance/banking-customer-helpdesk", icon: Headphones, color: 'bg-green-100 text-green-600' },
                      { title: "Savings Acct", url: "https://www.hdfcbank.com/personal/save/accounts/savings-accounts", icon: Building2, color: 'bg-blue-100 text-blue-600' },
                      { title: "Apply Card", url: "https://applyonline.hdfcbank.com/cards/credit-cards.html", icon: CreditCard, color: 'bg-yellow-100 text-yellow-600' },
                      { title: "Loan", url: "https://www.hdfcbank.com/personal/borrow/popular-loans", icon: Zap, color: 'bg-indigo-100 text-indigo-600' },
                      { title: "Mobile App", url: "https://play.google.com/store/apps/details?id=com.snapwork.hdfc", icon: Smartphone, color: 'bg-blue-100 text-blue-600' },
                      { title: "PayZapp", url: "https://play.google.com/store/apps/details?id=com.enstage.wibmo.hdfc", icon: CreditCard, color: 'bg-yellow-100 text-yellow-600' },
                      { title: "MyCards", url: "https://play.google.com/store/apps/details?id=com.hdfcbank.mycards", icon: CreditCard, color: 'bg-purple-100 text-purple-600' },
                      { title: "Loan Assist", url: "https://www.hdfcbank.com/personal/borrow/loans/loan-assist", icon: Home, color: 'bg-green-100 text-green-600' },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.title}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group bg-white rounded-xl border border-gray-200 shadow-sm p-3 flex flex-col items-center gap-2 hover:border-blue-500 hover:shadow-lg transition-all duration-150 focus:outline-none scale-100 hover:scale-105"
                        >
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-1 text-lg font-bold ${item.color} transition-colors`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="text-xs font-semibold text-gray-900 text-center truncate w-full group-hover:text-blue-700 transition-colors">
                            {item.title}
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div> */}

                {/* Email Support (full width, below) */}
                {contactData?.emailSupportSection && (
                  <div className="bg-white rounded-xl shadow p-4">
                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-4">
                      <Mail className="w-5 h-5 text-blue-600" /> {contactData.emailSupportSection.heading?.text || "Email Support"}
                    </h3>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-100 text-gray-700 text-left font-semibold">
                          {contactData.emailSupportSection.table?.headers?.map((header, idx) => (
                            <th key={idx} className="py-2 px-3">{header}</th>
                          )) || (
                            <>
                              <th className="py-2 px-3">Service</th>
                              <th className="py-2 px-3">Email</th>
                            </>
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {contactData.emailSupportSection.table?.rows?.map((row, idx) => (
                          <tr
                            key={idx}
                            className={idx % 2 === 0 ? "bg-gray-50" : ""}
                          >
                            <td className="py-3 px-3 font-semibold text-[15px] text-gray-800">
                              <span className="inline-block border-l-4 border-blue-600 pl-2">
                                {row[0]}
                              </span>
                            </td>
                            <td className="py-3 px-3 text-blue-600 font-bold whitespace-nowrap flex items-center gap-2 text-[15px]">
                              {row[1]}
                              <button
                                onClick={() => copyToClipboard(row[1])}
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
                )}

                {/* NRI Phone Banking Support and Missed Call Service */}
                {contactData?.nriPhoneBankingSection && contactData?.missedCallServiceSection && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* NRI Phone Banking Support */}
                    <div className="bg-white rounded-xl shadow p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <Phone className="w-5 h-5 text-blue-600" /> {contactData.nriPhoneBankingSection.heading?.text || "NRI Phone Banking Support"}
                      </h3>
                      
                      {contactData.nriPhoneBankingSection.subsections?.map((subsection, subIdx) => (
                        <div key={subIdx} className={subIdx > 0 ? "" : "mb-8"}>
                          <h4 className="text-base font-medium text-gray-600 mb-3 flex items-center gap-2">
                            {subIdx === 0 ? <Clock className="w-4 h-4 text-green-500" /> : <UserPlus className="w-4 h-4 text-blue-500" />}
                            {subsection.title}
                          </h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-[15px] border border-gray-200 rounded-lg">
                              <thead className="bg-gray-50 text-gray-700 font-semibold">
                                <tr>
                                  {subsection.table?.headers?.map((header, idx) => (
                                    <th key={idx} className="py-3 px-4 text-left">{header}</th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {subsection.table?.rows?.map((row, idx) => (
                                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                    {row.map((cell, cellIdx) => (
                                      <td key={cellIdx} className="py-3 px-4">
                                        {cellIdx === 0 ? (
                                          <span className="text-gray-700 font-medium text-center">{cell}</span>
                                        ) : cellIdx === 1 ? (
                                          <span className="text-gray-800 font-medium">{cell}</span>
                                        ) : (
                                          <div className="flex items-center justify-between gap-2">
                                            <span className="text-blue-600 font-semibold text-[14px] break-all">{cell}</span>
                                            <button
                                              onClick={() => copyToClipboard(cell)}
                                              title="Copy"
                                              className="hover:text-blue-500 flex-shrink-0"
                                            >
                                              <Copy className="w-4 h-4" />
                                            </button>
                                          </div>
                                        )}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Missed Call Service */}
                    <div className="bg-white rounded-xl h-fit shadow p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <Phone className="w-5 h-5 text-blue-600" /> {contactData.missedCallServiceSection.heading?.text || "Missed Call Service"}
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-[15px] text-left">
                          <thead className="bg-gray-100 text-gray-700 font-semibold">
                            <tr>
                              {contactData.missedCallServiceSection.table?.headers?.map((header, idx) => (
                                <th key={idx} className="py-2 px-3">{header}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {contactData.missedCallServiceSection.table?.rows?.map((row, idx) => (
                              <tr
                                key={idx}
                                className={idx % 2 === 0 ? "bg-gray-50" : ""}
                              >
                                {row.map((cell, cellIdx) => (
                                  <td key={cellIdx} className="py-2 px-3">
                                    {cellIdx === 0 ? (
                                      <span className="text-gray-700 text-center">{cell}</span>
                                    ) : cellIdx === 1 ? (
                                      <span className="text-gray-800">{cell}</span>
                                    ) : (
                                      <div className="flex items-center justify-between gap-2">
                                        <span className="text-blue-700 text-[14px] font-semibold break-all">{cell}</span>
                                        <button
                                          onClick={() => copyToClipboard(cell)}
                                          title="Copy"
                                          className="hover:text-blue-500 flex-shrink-0"
                                        >
                                          <Copy className="w-4 h-4" />
                                        </button>
                                      </div>
                                    )}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                {/* Comment Section */}
                <CommentSection 
                  pageId={`banking-${companySlug}`}
                  pageType="company"
                />
              </div>
              {/* Sidebar: Customer Care List */}
              {contactData?.customerCareListSection && (
                <aside className="hidden lg:block">
                  <div className="sticky top-24">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 max-w-[260px] w-full">
                      <div className="bg-blue-700 rounded-t-2xl px-4 py-3">
                        <h3 className="text-white text-lg font-bold text-center">{contactData.customerCareListSection.heading?.text || "Customer Care List"}</h3>
                      </div>
                      <ul className="divide-y divide-gray-100">
                        {contactData.customerCareListSection.links?.map(link => (
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
              )}
            </div>
          </div>
        )}

        {/* Complaints Tab - Dynamic Data from API */}
        {activeTab === "complaints" && (
          <ComplaintsTab 
            complaintsData={contactNumbersData?.tabs?.complaints || null}
            loading={loading}
            error={error}
            complaintContent={unifiedData.complaintContent || contactNumbersData?.complaintContent || ''}
          />
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

              {/* Professional Quick Links Section */}
              <div className="mb-8 bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                    <ExternalLink className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Quick Links</h3>
                    <p className="text-sm text-gray-600">Access HDFC Bank services</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {[
                    // Banking Services
                    {
                      title: "NetBanking Login",
                      url: "https://netbanking.hdfcbank.com/netbanking/",
                      description: "Daily banking transactions",
                      icon: Building2
                    },
                    {
                      title: "Find Branch/ATM",
                      url: "https://near-me.hdfcbank.com/branch-atm-locator/",
                      description: "Location-based searches",
                      icon: MapPin
                    },
                    {
                      title: "Customer Care",
                      url: "https://www.hdfcbank.com/personal/need-help/customer-care",
                      description: "24/7 customer support",
                      icon: Phone
                    },
                    // Credit Card Services
                    {
                      title: "Credit Card NetBanking",
                      url: "https://www.hdfcbank.com/personal/ways-to-bank/online-banking/credit-card-netbanking",
                      description: "Manage your credit cards",
                      icon: CreditCard
                    },
                    {
                      title: "Block Credit Card",
                      url: "https://www.hdfcbank.com/personal/pay/cards/credit-cards/block-loststolen-card",
                      description: "Block lost/stolen card",
                      icon: ShieldAlert
                    },
                    // Security & Complaints
                    {
                      title: "Report Fraud",
                      url: "https://www.hdfcbank.com/personal/need-help/contact-us/unauthorized-electronic-banking",
                      description: "Report unauthorized transactions",
                      icon: Shield
                    },
                    {
                      title: "File Complaint",
                      url: "https://leads.hdfcbank.com/applications/webforms/apply/complaint_form_new.asp",
                      description: "Submit a complaint",
                      icon: FileText
                    },
                    {
                      title: "Track Complaint",
                      url: "https://leads.hdfcbank.com/applications/misc/CST/cstracker.aspx",
                      description: "Check complaint status",
                      icon: TrendingUp
                    },
                    {
                      title: "Support Center",
                      url: "https://www.hdfcbank.com/personal/about-us/corporate-governance/banking-customer-helpdesk",
                      description: "Escalation support",
                      icon: Headphones
                    },
                    // Account Services
                    {
                      title: "Open Savings Account",
                      url: "https://www.hdfcbank.com/personal/save/accounts/savings-accounts",
                      description: "New account opening",
                      icon: Building2
                    },
                    {
                      title: "Apply Credit Card",
                      url: "https://applyonline.hdfcbank.com/cards/credit-cards.html",
                      description: "New credit card application",
                      icon: CreditCard
                    },
                    {
                      title: "Instant Loan",
                      url: "https://www.hdfcbank.com/personal/borrow/popular-loans",
                      description: "Quick loan applications",
                      icon: Zap
                    },
                    // Mobile Apps
                    {
                      title: "Mobile Banking",
                      url: "https://play.google.com/store/apps/details?id=com.snapwork.hdfc",
                      description: "All-in-one banking app",
                      icon: Smartphone
                    },
                    {
                      title: "PayZapp",
                      url: "https://play.google.com/store/apps/details?id=com.enstage.wibmo.hdfc",
                      description: "UPI, wallet, shopping",
                      icon: CreditCard
                    },
                    {
                      title: "MyCards",
                      url: "https://play.google.com/store/apps/details?id=com.hdfcbank.mycards",
                      description: "Credit card control",
                      icon: CreditCard
                    },
                    {
                      title: "Loan Assist",
                      url: "https://www.hdfcbank.com/personal/borrow/loans/loan-assist",
                      description: "Track/apply loans",
                      icon: Home
                    },
                  ].map((link, idx) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all duration-200"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="h-5 w-5 text-blue-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-900 text-sm leading-tight group-hover:text-blue-600 transition-colors mb-1">
                              {link.title}
                            </h4>
                            <p className="text-gray-500 text-xs leading-relaxed">
                              {link.description}
                            </p>
                          </div>
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <ExternalLink className="h-4 w-4 text-blue-500" />
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500 text-center">
                    All links open in new tabs • Secure and verified connections
                  </p>
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
                      How to Contact {unifiedData.name} Customer Support
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
                { label: "Founded", value: unifiedData.founded, icon: Calendar },
                { label: "Rating", value: `${unifiedData.rating}/5`, icon: Star },
                { label: "Monthly Searches", value: unifiedData.monthlySearches, icon: TrendingUp },
                { label: "Total Reviews", value: unifiedData.totalReviews.toLocaleString(), icon: Users },
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
                {unifiedData.services.map((service, index) => (
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
                  {unifiedData.nationalNumbers.map((contact, index) => (
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
                      href={unifiedData.website}
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
                      <div className="text-sm text-gray-600">{unifiedData.totalReviews.toLocaleString()} reviews</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="font-bold text-gray-900">{unifiedData.rating}/5</span>
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