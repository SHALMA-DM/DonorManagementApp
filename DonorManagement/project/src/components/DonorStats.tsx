import React from 'react';
import { DollarSign, Users, TrendingUp } from 'lucide-react';
import type { Donor } from '../types/donor';

interface Props {
  donors: Donor[];
}

const DonorStats: React.FC<Props> = ({ donors }) => {
  const totalDonations = donors.reduce((sum, donor) => sum + donor.amount, 0);
  const averageDonation = donors.length ? totalDonations / donors.length : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-rose-100 text-rose-600">
            <DollarSign className="h-6 w-6" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">Total Donations</p>
            <p className="text-2xl font-semibold text-gray-900">
              ${totalDonations.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-blue-100 text-blue-600">
            <TrendingUp className="h-6 w-6" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">Average Donation</p>
            <p className="text-2xl font-semibold text-gray-900">
              ${averageDonation.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-green-100 text-green-600">
            <Users className="h-6 w-6" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">Total Donors</p>
            <p className="text-2xl font-semibold text-gray-900">{donors.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorStats;