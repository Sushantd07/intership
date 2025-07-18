// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection.jsx';
import CategorySection from './components/CategoryGrid';
import TrendingTicker from './components/TrendingTicker';
import ContactUs from './components/ContactUs';
import ScrollToTop from './components/ScrollToTop';
import FAQSection from './components/FAQSection.jsx'
import Chatbot from './components/Chatbot.jsx';


import AllCategories from './pages/AllCategories.jsx';
import CategoryPage from './pages/CategoryPage.jsx';
import CompanyPage from './pages/CompanyPage.jsx';
import StateWiseSection from './components/StateWiseSection.jsx';
import MaharashtraHelplinePage from './pages/MaharashtraHelpline';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <ScrollToTop />
      <Header />
      <TrendingTicker />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <>
            <HeroSection />
            <CategorySection />
            <StateWiseSection/>
            <ContactUs />
            <FAQSection/>
          </>
        } />

        {/* All Categories Page */}
        <Route path="/category" element={<AllCategories />} />

        {/* Category Page - shows all companies under a category */}
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        
        {/* Company Page - shows individual company under a subcategory and category */}
        <Route path="/category/:categoryId/:subcategoryId/:companySlug" element={<CompanyPage />} />

        {/* Company Page - SEO-friendly tab routes */}
        <Route path="/category/:categoryId/:companySlug/contactnumber" element={<CompanyPage />} />
        <Route path="/category/:categoryId/:companySlug/complain" element={<CompanyPage />} />
        <Route path="/category/:categoryId/:companySlug/quickhelp" element={<CompanyPage />} />
        <Route path="/category/:categoryId/:companySlug/videoguide" element={<CompanyPage />} />
        <Route path="/category/:categoryId/:companySlug/overview" element={<CompanyPage />} />

        {/* Company Page - fallback for old route (if needed) */}
        <Route path="/category/:categoryId/:companySlug" element={<CompanyPage />} />
        {/* <Route path="/home/state-wise" lelement={<StateWiseCreative />} /> */}
        <Route path="/home/state-wise/maharashtra" element={<MaharashtraHelplinePage />} />
      </Routes>
<Chatbot/>
      <Footer />
    </div>
  );
}

export default App;
