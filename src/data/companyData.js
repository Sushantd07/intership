import {
  Phone,
  Smartphone,
  Building2,
  Globe,
  MessageCircle,
  FileText,
} from 'lucide-react';

export const companyData = {
  telecom: {
    "mobile-networks": {
      jio: {
        name: "Reliance Jio",
        logo: "https://logos-world.net/wp-content/uploads/2020/09/Jio-Logo.png",
        description: "India's largest 4G network provider offering comprehensive digital services including mobile plans, fiber broadband, and digital entertainment.",
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
            { city: "Mumbai", number: "022-6666-7777", type: "Regional Office" },
            { city: "Pune", number: "020-6666-8888", type: "Regional Office" },
            { city: "Nagpur", number: "0712-666-9999", type: "Regional Office" },
          ],
          Delhi: [
            { city: "New Delhi", number: "011-6666-1111", type: "Regional Office" },
            { city: "Gurgaon", number: "0124-666-2222", type: "Regional Office" },
          ],
          Karnataka: [
            { city: "Bangalore", number: "080-6666-3333", type: "Regional Office" },
            { city: "Mysore", number: "0821-666-4444", type: "Regional Office" },
          ],
          "Tamil Nadu": [
            { city: "Chennai", number: "044-6666-5555", type: "Regional Office" },
            { city: "Coimbatore", number: "0422-666-6666", type: "Regional Office" },
          ],
        },
        complaintSteps: [
          {
            step: 1,
            title: "Try Customer Care First",
            description: "Call 199 for immediate assistance. Most issues are resolved within the first call.",
            icon: Phone,
          },
          {
            step: 2,
            title: "Use MyJio App",
            description: "Download MyJio app and use the complaint section for faster resolution.",
            icon: Smartphone,
          },
          {
            step: 3,
            title: "Visit Jio Store",
            description: "Visit your nearest Jio store with required documents for complex issues.",
            icon: Building2,
          },
          {
            step: 4,
            title: "Online Complaint Portal",
            description: "Use Jio's official website complaint portal for detailed issue reporting.",
            icon: Globe,
          },
          {
            step: 5,
            title: "Social Media",
            description: "Reach out via Twitter @JioCare or Facebook for public complaint resolution.",
            icon: MessageCircle,
          },
          {
            step: 6,
            title: "Consumer Forum",
            description: "If unresolved, approach consumer court or TRAI for regulatory intervention.",
            icon: FileText,
          },
        ],
        videoGuide: {
          title: "How to File a Complaint with Jio Customer Care",
          videoId: "dQw4w9WgXcQ",
          thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
          duration: "5:32",
          views: "1.2M",
          description: "Complete step-by-step guide on how to file and track complaints with Jio customer care through various channels.",
        },
      },
      airtel: {
        name: "Airtel",
        logo: "https://logos-world.net/wp-content/uploads/2020/09/Airtel-Logo.png",
        description: "Leading telecommunications company providing mobile, broadband, and digital TV services across India.",
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
          Delhi: [{ city: "New Delhi", number: "011-4567-8901", type: "Regional Office" }],
          Maharashtra: [{ city: "Mumbai", number: "022-4567-8901", type: "Regional Office" }],
        },
        complaintSteps: [
          {
            step: 1,
            title: "Call Customer Care",
            description: "Call 121 for immediate assistance and complaint registration.",
            icon: Phone,
          },
          {
            step: 2,
            title: "Use Airtel Thanks App",
            description: "Use the official Airtel Thanks app for complaint tracking.",
            icon: Smartphone,
          },
        ],
        videoGuide: {
          title: "Airtel Customer Care Guide",
          videoId: "dQw4w9WgXcQ",
          thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
          duration: "4:15",
          views: "850K",
          description: "How to contact Airtel customer care and resolve issues quickly.",
        },
      },
    },
  },
  banking: {
    "private-banks": {
      "hdfc-bank": {
        name: "HDFC Bank",
        logo: "/company-logos/bank-hdfc.png",
        description: "India's leading private sector bank offering comprehensive banking and financial services.",
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
          Maharashtra: [{ city: "Mumbai", number: "022-6171-2000", type: "Head Office" }],
        },
        complaintSteps: [
          {
            step: 1,
            title: "Call Customer Care",
            description: "Call the dedicated customer care number for your service.",
            icon: Phone,
          },
          {
            step: 2,
            title: "Visit Branch",
            description: "Visit your nearest HDFC Bank branch for assistance.",
            icon: Building2,
          },
        ],
        videoGuide: {
          title: "HDFC Bank Customer Support Guide",
          videoId: "dQw4w9WgXcQ",
          thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
          duration: "6:20",
          views: "1.5M",
          description: "Complete guide to HDFC Bank customer support services.",
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

// Helper function to find company data
export const findCompany = (categoryId, companySlug) => {
  if (companyData[categoryId]) {
    for (const subcatKey of Object.keys(companyData[categoryId])) {
      if (companyData[categoryId][subcatKey][companySlug]) {
        return companyData[categoryId][subcatKey][companySlug];
      }
    }
  }
  return null;
}; 