// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard.jsx';
import { categories } from '../data';

const HomePage = () => {
  // Get first 8 categories for the homepage
  const featuredCategories = categories.slice(0, 8);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Find Toll-Free Numbers Easily</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Access customer care numbers for thousands of companies across various categories
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for a company or category..."
                className="w-full px-6 py-4 rounded-full text-gray-800 focus:outline-none shadow-lg"
              />
              <button className="absolute right-2 top-2 bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Browse by Category</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Find toll-free numbers categorized by industry for easier navigation
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {featuredCategories.map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/home/category" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              View All Categories
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Simple steps to find the customer care numbers you need
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <div className="bg-blue-100 text-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">1</div>
              <h3 className="font-bold text-xl mb-2">Browse Categories</h3>
              <p className="text-gray-600">
                Select from our comprehensive list of industry categories
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <div className="bg-blue-100 text-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">2</div>
              <h3 className="font-bold text-xl mb-2">Find Company</h3>
              <p className="text-gray-600">
                Locate the specific company you need assistance with
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <div className="bg-blue-100 text-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">3</div>
              <h3 className="font-bold text-xl mb-2">Get Contact Info</h3>
              <p className="text-gray-600">
                Access toll-free numbers and complaint procedures
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;