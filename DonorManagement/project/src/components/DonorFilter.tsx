import React from 'react';
import { Search } from 'lucide-react';
import { US_STATES } from '../constants/states';

interface Props {
  nameFilter: string;
  stateFilter: string;
  onNameFilterChange: (value: string) => void;
  onStateFilterChange: (value: string) => void;
}

const DonorFilter: React.FC<Props> = ({
  nameFilter,
  stateFilter,
  onNameFilterChange,
  onStateFilterChange,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm space-y-4 md:space-y-0 md:flex md:space-x-4">
      {/* Name Filter */}
      <div className="flex-1 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={nameFilter}
          onChange={(e) => onNameFilterChange(e.target.value)}
          placeholder="Search donors..."
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
        />
      </div>

      {/* State Filter */}
      <div className="flex-1">
        <select
          value={stateFilter}
          onChange={(e) => onStateFilterChange(e.target.value)}
          className="block w-full sm:w-40 md:w-52 pl-3 pr-8 py-2 text-sm border-gray-300 focus:outline-none focus:ring-rose-500 focus:border-rose-500 rounded-md"
        >
          <option value="" className="px-3 py-2 border-gray-300 rounded-md">All States</option>
          {US_STATES.map((state) => (
            <option key={state.value} value={state.value}>
              {state.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DonorFilter;