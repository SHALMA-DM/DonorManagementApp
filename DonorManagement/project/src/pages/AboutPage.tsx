import React from 'react';
import { Heart, Users, LineChart, Shield } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          About Donor Management
        </h1>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Donor Management is a comprehensive solution designed to help organizations
            efficiently manage their donor relationships and track contributions. Our
            platform provides intuitive tools for maintaining donor records, monitoring
            donations, and generating insights to help you make informed decisions.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Key Features
          </h2>

          <div className="grid gap-6 mb-8">
            <div className="flex items-start">
              <div className="p-2 bg-rose-100 dark:bg-rose-900 rounded-lg mr-4">
                <Users className="h-6 w-6 text-rose-500 dark:text-rose-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Donor Management
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Easily add, edit, and organize donor information in one centralized
                  location.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                <LineChart className="h-6 w-6 text-blue-500 dark:text-blue-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Analytics Dashboard
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Track donation trends and gain valuable insights with our
                  comprehensive analytics tools.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg mr-4">
                <Shield className="h-6 w-6 text-green-500 dark:text-green-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Data Security
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Your donor information is protected with industry-standard security
                  measures.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Our Mission
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            We believe in empowering organizations to build stronger relationships
            with their donors through efficient management tools and meaningful
            insights. Our goal is to simplify the donation process while providing
            powerful features that help you grow your impact.
          </p>

          <div className="text-center">
            <Heart className="h-12 w-12 text-rose-500 mx-auto mb-4" />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Made with love for the nonprofit community
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;