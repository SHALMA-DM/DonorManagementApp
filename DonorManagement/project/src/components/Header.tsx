import React from 'react';
import { NavLink } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-rose-500" />
            <h1 className="ml-2 text-2xl font-bold text-gray-900">Donor Management</h1>
          </div>
          <nav className="flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-rose-50 text-rose-600'
                    : 'text-gray-700 hover:text-gray-900'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/donors"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-rose-50 text-rose-600'
                    : 'text-gray-700 hover:text-gray-900'
                }`
              }
            >
              Donors
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-rose-50 text-rose-600'
                    : 'text-gray-700 hover:text-gray-900'
                }`
              }
            >
              About
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;