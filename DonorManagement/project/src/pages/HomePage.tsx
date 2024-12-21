import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <Heart className="h-16 w-16 text-rose-500" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to Donor Management
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Streamline your donation process with our comprehensive donor management system.
          Track donations, manage donor information, and generate insights with ease.
        </p>
        <Link
          to="/donors"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-rose-500 hover:bg-rose-600 transition-colors"
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
        <div className="bg-white rounded-lg shadow-sm p-8 max-w-3xl mx-auto mt-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-rose-100 rounded-full p-4 inline-block mb-4">
                <Heart className="h-8 w-8 text-rose-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Track Donations</h3>
              <p className="text-gray-600">Easily record and manage all donations in one place</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                <Heart className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Donor Insights</h3>
              <p className="text-gray-600">Generate valuable insights from donation data</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 inline-block mb-4">
                <Heart className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Easy Management</h3>
              <p className="text-gray-600">Simple and intuitive donor management interface</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;