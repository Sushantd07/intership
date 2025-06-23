// src/pages/SubcategoryPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories } from '../data';

const SubcategoryPage = () => {
  const { subcategory } = useParams();
  let company = null;
  let categoryName = '';

  // Find the company data
  for (const cat of categories) {
    const found = cat.subcategories.find(
      sub => sub.slug === subcategory
    );
    if (found) {
      company = found;
      categoryName = cat.name;
      break;
    }
  }

  if (!company) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Company Not Found</h2>
        <p className="text-gray-600 mb-8">
          The company you're looking for doesn't exist in our directory.
        </p>
        <Link 
          to="/home/category" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Browse All Companies
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <nav className="flex mb-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="text-blue-600 hover:text-blue-800">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <Link to="/home/category" className="text-blue-600 hover:text-blue-800">
                    Categories
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <Link to={`/home/category/${company.categorySlug}`} className="text-blue-600 hover:text-blue-800">
                    {categoryName}
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-gray-500">{company.name}</span>
                </div>
              </li>
            </ol>
          </nav>
          
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mr-6" />
            <div>
              <h1 className="text-3xl font-bold mb-2">{company.name}</h1>
              <p className="text-gray-600 mb-4">{company.description}</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {categoryName}
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  Toll-Free Service
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Toll-Free Numbers by State</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      State
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Toll-Free Number
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {company.tollFreeNumbers.map((number, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {number.state}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-bold">
                        {number.number}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Complaint Procedure</h2>
              <ol className="space-y-4">
                {company.complaintSteps.map((step, index) => (
                  <li key={index} className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white">
                        {index + 1}
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-gray-700">{step}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700">Customer Support Email:</h3>
                  <a href={`mailto:${company.complaintEmail}`} className="text-blue-600 hover:underline">
                    {company.complaintEmail}
                  </a>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-700">Website:</h3>
                  <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {company.website}
                  </a>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-700">Operating Hours:</h3>
                  <p className="text-gray-700">{company.operatingHours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubcategoryPage;