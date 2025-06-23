// src/components/CategoryGrid.js
import React from 'react';
import {
  Phone,
  Banknote,
  ShoppingCart,
  Hospital,
  Pill,
  GraduationCap,
  Plane,
  ShieldCheck,
  HeartHandshake,
  Briefcase,
  Truck,
  Package,
  Building,
  Users,
  Hotel,
  Dumbbell,
  Layers
} from 'lucide-react';

const categories = [
  { name: 'Telecom', icon: Phone, count: 24 },
  { name: 'Banking', icon: Banknote, count: 30 },
  { name: 'E-commerce', icon: ShoppingCart, count: 18 },
  { name: 'Hospitals', icon: Hospital, count: 22 },
  { name: 'Supplements', icon: Pill, count: 15 },
  { name: 'Education', icon: GraduationCap, count: 27 },
  { name: 'Travel', icon: Plane, count: 12 },
  { name: 'Insurance', icon: ShieldCheck, count: 16 },
  { name: 'Event Services', icon: HeartHandshake, count: 9 },
  { name: 'Jobs & Careers', icon: Briefcase, count: 14 },
  { name: 'Packers & Movers', icon: Truck, count: 11 },
  { name: 'Courier Service', icon: Package, count: 10 },
  { name: 'Real Estate', icon: Building, count: 20 },
  { name: 'Customer Support', icon: Users, count: 25 },
  { name: 'Hotels', icon: Hotel, count: 13 },
  { name: 'Fitness & Gym', icon: Dumbbell, count: 8 },
];

const CategoryGrid = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 mt-20 mb-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Browse by Category
        </h2>
        <p className="text-gray-500 mb-10 text-sm sm:text-base">
          Find toll-free numbers organized by industry and service type
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <div
                key={index}
                className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-1 hover:border-[#138808] transition-all duration-200 group cursor-pointer relative"
              >
                <div className="w-14 h-14 mb-3 bg-[#FF9933]/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-[#138808]/10 transition">
                  <Icon className="w-6 h-6 text-[#FF9933] group-hover:text-[#138808] transition" />
                </div>
                <p className="text-sm font-medium text-gray-800 group-hover:text-[#138808]">
                  {cat.name}
                </p>
                <p className="text-xs text-gray-500 mt-1">+{cat.count} companies</p>
              </div>
            );
          })}

          {/* Popular Categories Tile */}
          <div className="bg-gradient-to-br from-[#FF9933] to-[#138808] p-5 rounded-2xl text-white flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer">
            <div className="w-14 h-14 mb-3 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Layers className="w-6 h-6" />
            </div>
            <p className="text-sm font-medium">Popular Categories</p>
            <p className="text-xs text-white/80 mt-1">+50 listed</p>
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-12">
          <button className="px-6 py-3 bg-[#FF9933] text-white font-medium rounded-lg shadow-md hover:bg-[#E07C24] hover:shadow-lg transition-all duration-200">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;