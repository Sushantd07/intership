// src/pages/CategoryPage.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard.jsx';
import { categories } from '../data';

const CategoryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState([]);

  // Extract search query from URL
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const searchParam = queryParams.get('search') || '';
    setSearchQuery(searchParam);
  }, [location]);

  // Filter categories based on search query
 useEffect(() => {
    if (searchQuery) {
      const filtered = categories.filter(category => 
        category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.subcategories.some(sub => 
          sub.name.toLowerCase().includes(searchQuery.toLowerCase())
        )  // Added closing parenthesis here
      );
      setFilteredCategories(filtered);
    } else {
      setFilteredCategories(categories);
    }
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/home/category?search=${searchQuery}`);
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">All Categories</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our extensive list of categories to find the customer care numbers you need
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto mb-12">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search for a category or company..."
              className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              type="submit"
              className="absolute right-3 top-3 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Search
            </button>
          </form>
        </div>
        
        {filteredCategories.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold mb-4">No results found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any categories or companies matching "{searchQuery}"
            </p>
            <button 
              onClick={() => {
                setSearchQuery('');
                navigate('/home/category');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              View All Categories
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 border-b">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <div className="text-blue-700 text-xl">
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="font-bold text-xl">{category.name}</h3>
                  </div>
                  <p className="text-gray-600">{category.description}</p>
                </div>
                
                <div className="p-6">
                  <h4 className="font-semibold mb-3">Popular Companies:</h4>
                  <div className="space-y-3">
                    {category.subcategories.slice(0, 4).map((sub, idx) => (
                      <Link 
                        key={idx}
                        to={`/home/category/${sub.slug}`}
                        className="flex items-center py-2 hover:bg-gray-50 rounded-lg px-2 transition"
                      >
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                        <div className="ml-4">
                          <div className="font-medium">{sub.name}</div>
                          <div className="text-sm text-gray-500">{sub.tollFreeNumbers.length} contact numbers</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  {category.subcategories.length > 4 && (
                    <Link 
                      to={`/home/category/${category.slug}`}
                      className="block mt-4 text-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View all {category.subcategories.length} companies
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;