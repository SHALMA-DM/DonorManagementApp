import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { US_STATES } from '../constants/states';
import type { DonorFormData } from '../types/donor';

interface Props {
  onSubmit: (data: DonorFormData) => void;
}

const DonorForm: React.FC<Props> = ({ onSubmit }) => {
  const initialState = { name: '', state: '', amount: '' };
  const [formData, setFormData] = useState<DonorFormData>(initialState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    handleClear();
  };

  const handleClear = () => {
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <div className="flex items-center">
              Donor Name
              <div className="group relative ml-1">
                <HelpCircle className="h-4 w-4 text-gray-400" />
                <span className="invisible group-hover:visible absolute z-10 bg-gray-900 text-white text-xs rounded py-1 px-2 -right-4 top-6 w-48">
                  Enter the full name of the donor
                </span>
              </div>
            </div>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <div className="flex items-center">
              State
              <div className="group relative ml-1">
                <HelpCircle className="h-4 w-4 text-gray-400" />
                <span className="invisible group-hover:visible absolute z-10 bg-gray-900 text-white text-xs rounded py-1 px-2 -right-4 top-6 w-48">
                  Select the donor's state of residence
                </span>
              </div>
            </div>
          </label>
          <select
            required
            value={formData.state}
            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
          >
            <option value="">Select a state</option>
            {US_STATES.map((state) => (
              <option key={state.value} value={state.value}>
                {state.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <div className="flex items-center">
              Donation Amount ($)
              <div className="group relative ml-1">
                <HelpCircle className="h-4 w-4 text-gray-400" />
                <span className="invisible group-hover:visible absolute z-10 bg-gray-900 text-white text-xs rounded py-1 px-2 -right-4 top-6 w-48">
                  Enter the donation amount in USD
                </span>
              </div>
            </div>
          </label>
          <input
            type="number"
            required
            min="0"
            step="0.01"
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
          />
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            className="flex-1 bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition-colors"
          >
            Add Donation
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
          >
            Clear Form
          </button>
        </div>
      </div>
    </form>
  );
};

export default DonorForm;