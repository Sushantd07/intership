import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Search, Filter, Grid3x3, List, ChevronDown, ChevronRight, Phone, Star, TrendingUp, Building2, Shield, Clock, Users, ArrowRight, ArrowLeft, MapPin, Globe, Award, Target, Zap, Eye, CheckCircle, ExternalLink } from 'lucide-react';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('popular');

  // Category data with subcategories
  const categoryData = {
    telecom: {
      name: 'Telecommunications',
      description: 'Complete directory of mobile networks, internet providers, cable TV, and communication services across India',
      gradient: 'from-slate-900 via-blue-900 to-indigo-900',
      bgGradient: 'from-blue-50 to-indigo-50',
      totalBusinesses: 2847,
      totalSearches: '2.8M',
      avgRating: 4.6,
      subcategories: [
        {
          id: 'mobile-networks',
          name: 'Mobile Networks',
          description: 'Leading mobile network operators providing voice, data, and digital services',
          count: 1024,
          avgRating: 4.7,
          trending: true,
          companies: [
            {
              name: 'Jio',
              slug: 'jio',
              logo: 'https://img.icons8.com/color/96/000000/phone.png',
              rating: 4.8,
              searches: '45K',
              available24x7: true,
              description: 'India\'s largest 4G network with digital services',
              services: ['Mobile Plans', 'JioFiber', 'JioTV', 'Digital Services']
            },
            {
              name: 'Airtel',
              slug: 'airtel',
              logo: 'https://img.icons8.com/color/96/000000/phone.png',
              rating: 4.7,
              searches: '38K',
              available24x7: true,
              description: 'Leading telecommunications company with pan-India presence',
              services: ['Mobile Plans', 'Airtel Xstream', 'DTH', 'Broadband']
            },
            {
              name: 'Vi (Vodafone Idea)',
              slug: 'vi-vodafone-idea',
              logo: 'https://img.icons8.com/color/96/000000/phone.png',
              rating: 4.5,
              searches: '25K',
              available24x7: true,
              description: 'Merged entity of Vodafone and Idea with strong network coverage',
              services: ['Mobile Plans', 'Vi Movies & TV', 'Data Plans', 'Roaming']
            },
            {
              name: 'BSNL',
              slug: 'bsnl',
              logo: 'https://img.icons8.com/color/96/000000/phone.png',
              rating: 4.3,
              searches: '15K',
              available24x7: true,
              description: 'Government telecom provider with extensive rural coverage',
              services: ['Mobile Plans', 'Landline', 'Broadband', 'Enterprise Solutions']
            }
          ]
        },
        {
          id: 'internet-providers',
          name: 'Internet Providers',
          description: 'High-speed broadband and fiber internet service providers',
          count: 567,
          avgRating: 4.5,
          trending: false,
          companies: [
            {
              name: 'JioFiber',
              slug: 'jiofiber',
              logo: 'https://img.icons8.com/color/96/000000/wifi.png',
              rating: 4.6,
              searches: '32K',
              available24x7: true,
              description: 'High-speed fiber broadband with digital services',
              services: ['Fiber Internet', 'JioTV', 'Digital Services', 'Gaming']
            },
            {
              name: 'Airtel Xstream Fiber',
              slug: 'airtel-xstream-fiber',
              logo: 'https://img.icons8.com/color/96/000000/wifi.png',
              rating: 4.5,
              searches: '28K',
              available24x7: true,
              description: 'Premium fiber broadband with entertainment benefits',
              services: ['Fiber Internet', 'Xstream App', 'Netflix', 'Amazon Prime']
            }
          ]
        },
        {
          id: 'cable-dth',
          name: 'Cable & DTH',
          description: 'Direct-to-home and cable television service providers',
          count: 445,
          avgRating: 4.4,
          trending: false,
          companies: [
            {
              name: 'Tata Sky',
              slug: 'tata-sky',
              logo: 'https://img.icons8.com/color/96/000000/tv.png',
              rating: 4.6,
              searches: '22K',
              available24x7: true,
              description: 'Leading DTH service provider with HD channels',
              services: ['DTH Service', 'HD Channels', 'Tata Sky Binge', 'Recording']
            },
            {
              name: 'Dish TV',
              slug: 'dish-tv',
              logo: 'https://img.icons8.com/color/96/000000/tv.png',
              rating: 4.4,
              searches: '18K',
              available24x7: true,
              description: 'Popular DTH service with diverse channel packages',
              services: ['DTH Service', 'HD Channels', 'Recording', 'Multi-TV']
            }
          ]
        }
      ]
    },
    banking: {
      name: 'Banking & Finance',
      description: 'Comprehensive banking services, credit cards, loans, and financial solutions',
      gradient: 'from-slate-900 via-emerald-900 to-green-900',
      bgGradient: 'from-emerald-50 to-green-50',
      totalBusinesses: 3456,
      totalSearches: '3.2M',
      avgRating: 4.7,
      subcategories: [
        {
          id: 'public-banks',
          name: 'Public Banks',
          description: 'Government-owned banks providing comprehensive banking services',
          count: 892,
          avgRating: 4.6,
          trending: true,
          companies: [
            {
              name: 'State Bank of India',
              slug: 'state-bank-of-india',
              logo: 'https://img.icons8.com/color/96/000000/bank.png',
              rating: 4.6,
              searches: '52K',
              available24x7: true,
              description: 'India\'s largest public sector bank with nationwide presence',
              services: ['Savings Account', 'Loans', 'Credit Cards', 'Digital Banking']
            },
            {
              name: 'Punjab National Bank',
              slug: 'punjab-national-bank',
              logo: 'https://img.icons8.com/color/96/000000/bank.png',
              rating: 4.4,
              searches: '22K',
              available24x7: true,
              description: 'Leading public sector bank with heritage and trust',
              services: ['Savings Account', 'Home Loans', 'Business Banking', 'NRI Services']
            }
          ]
        },
        {
          id: 'private-banks',
          name: 'Private Banks',
          description: 'Private sector banks offering innovative banking solutions',
          count: 756,
          avgRating: 4.8,
          trending: true,
          companies: [
            {
              name: 'HDFC Bank',
              slug: 'hdfc-bank',
              logo: 'https://img.icons8.com/color/96/000000/bank.png',
              rating: 4.8,
              searches: '48K',
              available24x7: true,
              description: 'Leading private bank with excellent customer service',
              services: ['Savings Account', 'Credit Cards', 'Personal Loans', 'NetBanking']
            },
            {
              name: 'ICICI Bank',
              slug: 'icici-bank',
              logo: 'https://img.icons8.com/color/96/000000/bank.png',
              rating: 4.7,
              searches: '45K',
              available24x7: true,
              description: 'Technology-driven bank with comprehensive services',
              services: ['Digital Banking', 'Investment Services', 'Insurance', 'Loans']
            }
          ]
        }
      ]
    },
    healthcare: {
      name: 'Healthcare & Medical',
      description: 'Hospitals, clinics, medical services, and health insurance providers',
      gradient: 'from-slate-900 via-red-900 to-pink-900',
      bgGradient: 'from-red-50 to-pink-50',
      totalBusinesses: 4123,
      totalSearches: '2.1M',
      avgRating: 4.5,
      subcategories: [
        {
          id: 'private-hospitals',
          name: 'Private Hospitals',
          description: 'Leading private healthcare providers and hospital chains',
          count: 1245,
          avgRating: 4.7,
          trending: true,
          companies: [
            {
              name: 'Apollo Hospitals',
              slug: 'apollo-hospitals',
              logo: 'https://img.icons8.com/color/96/000000/hospital.png',
              rating: 4.8,
              searches: '35K',
              available24x7: true,
              description: 'Leading healthcare provider with advanced medical facilities',
              services: ['Emergency Care', 'Specialty Treatment', 'Health Checkups', 'Telemedicine']
            }
          ]
        }
      ]
    },
    ecommerce: {
      name: 'E-commerce & Shopping',
      description: 'Online shopping platforms, delivery services, and marketplace solutions',
      gradient: 'from-slate-900 via-purple-900 to-indigo-900',
      bgGradient: 'from-purple-50 to-indigo-50',
      totalBusinesses: 1892,
      totalSearches: '4.5M',
      avgRating: 4.4,
      subcategories: [
        {
          id: 'online-marketplaces',
          name: 'Online Marketplaces',
          description: 'Major e-commerce platforms and online shopping destinations',
          count: 567,
          avgRating: 4.6,
          trending: true,
          companies: [
            {
              name: 'Amazon',
              slug: 'amazon',
              logo: 'https://img.icons8.com/color/96/000000/shopping-cart.png',
              rating: 4.7,
              searches: '65K',
              available24x7: true,
              description: 'World\'s largest online marketplace with fast delivery',
              services: ['Online Shopping', 'Prime Delivery', 'Digital Services', 'Cloud Computing']
            }
          ]
        }
      ]
    }
  };

  const currentCategory = categoryData[categoryId];

  useEffect(() => {
    if (!currentCategory) {
      navigate('/category');
    }
  }, [categoryId, currentCategory, navigate]);

  if (!currentCategory) {
    return <div>Loading...</div>;
  }

  // Filter and sort subcategories
  const filteredSubcategories = currentCategory.subcategories.filter(subcategory => {
    const matchesSearch = subcategory.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         subcategory.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === 'all' || 
                         (selectedFilter === 'trending' && subcategory.trending) ||
                         (selectedFilter === 'popular' && subcategory.count > 500);
    
    return matchesSearch && matchesFilter;
  });

  const sortedSubcategories = [...filteredSubcategories].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'count':
        return b.count - a.count;
      case 'rating':
        return b.avgRating - a.avgRating;
      case 'popular':
      default:
        return b.count - a.count;
    }
  });

  const handleSubcategoryClick = (subcategoryId) => {
    navigate(`/category/${categoryId}/${subcategoryId}`);
  };

  const handleCompanyClick = (subcategoryId, companySlug) => {
    navigate(`/category/${categoryId}/${subcategoryId}/${companySlug}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Premium Header Section */}
      <div className={`relative bg-gradient-to-br ${currentCategory.gradient} text-white overflow-hidden`}>
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Professional Breadcrumb */}
          <div className="flex items-center gap-3 text-white/80 mb-8">
            <button 
              onClick={() => navigate('/category')}
              className="hover:text-white transition-colors flex items-center gap-2 font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              All Categories
            </button>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white font-semibold">{currentCategory.name}</span>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                {currentCategory.name}
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {currentCategory.description}
              </p>
              
              {/* Professional Category Stats */}
              <div className="flex flex-wrap items-center gap-8 text-white/80">
                <div className="flex items-center gap-3">
                  <Building2 className="h-6 w-6" />
                  <span className="font-semibold text-lg">{currentCategory.totalBusinesses.toLocaleString()} businesses</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-6 w-6" />
                  <span className="font-semibold text-lg">{currentCategory.totalSearches} monthly searches</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="h-6 w-6 text-yellow-400 fill-current" />
                  <span className="font-semibold text-lg">{currentCategory.avgRating}/5 average rating</span>
                </div>
              </div>
            </div>

            {/* Premium Quick Stats Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6">Category Overview</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/80 font-medium">Total Subcategories</span>
                  <span className="font-bold text-white text-xl">{currentCategory.subcategories.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80 font-medium">Average Rating</span>
                  <span className="font-bold text-white text-xl">{currentCategory.avgRating}/5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80 font-medium">24x7 Available</span>
                  <span className="font-bold text-green-300 text-xl">95%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80 font-medium">Verified Data</span>
                  <span className="font-bold text-green-300 text-xl">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Search and Filter Section */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Premium Search Bar */}
            <div className="relative flex-1 max-w-2xl">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder={`Search in ${currentCategory.name}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-4 text-lg border-2 border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-300 bg-slate-50 hover:bg-white font-medium"
              />
            </div>

            {/* Professional Controls */}
            <div className="flex items-center gap-4">
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-6 py-4 border-2 border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none bg-white font-medium text-slate-700"
              >
                <option value="all">All Subcategories</option>
                <option value="trending">Trending</option>
                <option value="popular">Most Popular</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-6 py-4 border-2 border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none bg-white font-medium text-slate-700"
              >
                <option value="popular">Most Popular</option>
                <option value="name">Alphabetical</option>
                <option value="count">Most Companies</option>
                <option value="rating">Highest Rated</option>
              </select>

              <div className="flex items-center bg-slate-100 rounded-xl p-1 border-2 border-slate-200">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-white shadow-md text-blue-600' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <Grid3x3 className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' ? 'bg-white shadow-md text-blue-600' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 text-sm text-slate-600 font-medium">
            Showing <span className="font-bold text-slate-900">{sortedSubcategories.length}</span> of{' '}
            <span className="font-bold text-slate-900">{currentCategory.subcategories.length}</span> subcategories
            {searchTerm && (
              <span className="ml-2">
                for "<span className="font-bold text-blue-600">{searchTerm}</span>"
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Premium Subcategories Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {viewMode === 'grid' ? (
          /* Premium Grid View */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {sortedSubcategories.map((subcategory) => (
              <div
                key={subcategory.id}
                className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                {/* Premium Subcategory Header */}
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 border-b border-slate-200">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{subcategory.name}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{subcategory.description}</p>
                    </div>
                    {subcategory.trending && (
                      <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-xs font-bold">
                        <TrendingUp className="h-3 w-3" />
                        <span>TRENDING</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Building2 className="h-5 w-5" />
                        <span className="font-semibold">{subcategory.count} companies</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <Star className="h-5 w-5 text-yellow-500 fill-current" />
                        <span className="font-semibold">{subcategory.avgRating}/5</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleSubcategoryClick(subcategory.id)}
                      className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
                    >
                      View All
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Premium Top Companies */}
                <div className="p-8">
                  <h4 className="font-bold text-slate-900 mb-6 text-lg">Top Companies</h4>
                  <div className="space-y-4">
                    {subcategory.companies.slice(0, 3).map((company, index) => (
                      <div
                        key={index}
                        onClick={() => handleCompanyClick(subcategory.id, company.slug)}
                        className="flex items-center gap-6 p-6 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 cursor-pointer transition-all duration-300 group border border-slate-100 hover:border-blue-200 hover:shadow-lg"
                      >
                        <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center overflow-hidden border border-slate-200">
                          <img 
                            src={company.logo} 
                            alt={`${company.name} logo`}
                            className="w-10 h-10 object-contain"
                            onError={(e) => {
                              const target = e.target;
                              target.style.display = 'none';
                              const fallback = target.nextElementSibling;
                              if (fallback) {
                                fallback.textContent = company.name.charAt(0);
                                fallback.classList.remove('hidden');
                              }
                            }}
                          />
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg hidden">
                            {company.name.charAt(0)}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                            {company.name}
                          </div>
                          <div className="text-sm text-slate-500 mb-3 leading-relaxed">{company.description}</div>
                          <div className="flex items-center gap-4 text-xs text-slate-400">
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 text-yellow-500 fill-current" />
                              <span className="font-medium">{company.rating}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <TrendingUp className="h-3 w-3" />
                              <span className="font-medium">{company.searches} searches</span>
                            </div>
                            {company.available24x7 && (
                              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">24x7</span>
                            )}
                          </div>
                        </div>
                        <ArrowRight className="h-6 w-6 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    ))}
                  </div>
                  
                  {subcategory.companies.length > 3 && (
                    <button
                      onClick={() => handleSubcategoryClick(subcategory.id)}
                      className="w-full mt-6 text-center py-4 text-blue-600 hover:text-blue-700 font-semibold bg-blue-50 hover:bg-blue-100 rounded-xl transition-all duration-300"
                    >
                      View All {subcategory.companies.length} Companies
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Premium List View */
          <div className="space-y-10">
            {sortedSubcategories.map((subcategory) => (
              <div
                key={subcategory.id}
                className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="p-10">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-3xl font-bold text-slate-900">{subcategory.name}</h3>
                        {subcategory.trending && (
                          <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                            <TrendingUp className="h-4 w-4" />
                            <span>TRENDING</span>
                          </div>
                        )}
                      </div>
                      <p className="text-slate-600 mb-6 max-w-3xl leading-relaxed text-lg">{subcategory.description}</p>
                      <div className="flex items-center gap-8 text-sm text-slate-500">
                        <div className="flex items-center gap-3">
                          <Building2 className="h-5 w-5 text-blue-500" />
                          <span className="font-semibold">{subcategory.count} companies</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Star className="h-5 w-5 text-yellow-500 fill-current" />
                          <span className="font-semibold">{subcategory.avgRating}/5 rating</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleSubcategoryClick(subcategory.id)}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-10 py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Explore Companies
                    </button>
                  </div>

                  {/* Premium Companies Grid */}
                  <div className="border-t border-slate-200 pt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {subcategory.companies.map((company, index) => (
                        <div
                          key={index}
                          onClick={() => handleCompanyClick(subcategory.id, company.slug)}
                          className="flex items-center gap-6 p-6 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 cursor-pointer transition-all duration-300 group border border-slate-100 hover:border-blue-200 hover:shadow-lg"
                        >
                          <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center overflow-hidden border border-slate-200">
                            <img 
                              src={company.logo} 
                              alt={`${company.name} logo`}
                              className="w-12 h-12 object-contain"
                              onError={(e) => {
                                const target = e.target;
                                target.style.display = 'none';
                                const fallback = target.nextElementSibling;
                                if (fallback) {
                                  fallback.textContent = company.name.charAt(0);
                                  fallback.classList.remove('hidden');
                                }
                              }}
                            />
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl hidden">
                              {company.name.charAt(0)}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                              {company.name}
                            </div>
                            <div className="text-sm text-slate-500 mb-3 leading-relaxed">{company.description}</div>
                            <div className="flex items-center gap-3 text-xs text-slate-400">
                              <div className="flex items-center gap-1">
                                <Star className="h-3 w-3 text-yellow-500 fill-current" />
                                <span className="font-medium">{company.rating}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <TrendingUp className="h-3 w-3" />
                                <span className="font-medium">{company.searches}</span>
                              </div>
                              {company.available24x7 && (
                                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">24x7</span>
                              )}
                            </div>
                          </div>
                          <ArrowRight className="h-6 w-6 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Results */}
        {sortedSubcategories.length === 0 && (
          <div className="text-center py-20">
            <div className="w-32 h-32 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mx-auto mb-8">
              <Search className="h-16 w-16 text-slate-400" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">No Subcategories Found</h3>
            <p className="text-slate-600 mb-8 max-w-md mx-auto text-lg">
              We couldn't find any subcategories matching your search. Try adjusting your search terms or filters.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedFilter('all');
              }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>

      {/* Premium Trust Indicators */}
      <div className="bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="flex flex-wrap items-center gap-8 text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-green-500" />
                <span className="font-semibold">All numbers verified daily</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-blue-500" />
                <span className="font-semibold">Updated in real-time</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-orange-500" />
                <span className="font-semibold">Trusted by millions</span>
              </div>
            </div>
            <div className="text-sm text-slate-500 font-semibold">
              Last updated: {new Date().toLocaleDateString('en-IN', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;