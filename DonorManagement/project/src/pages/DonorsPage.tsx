import React from 'react';
import DonorForm from '../components/DonorForm';
import DonorTable from '../components/DonorTable';
import DonorStats from '../components/DonorStats';
import DonorFilter from '../components/DonorFilter';
import Notification from '../components/Notification';
import { useDonors } from '../hooks/useDonors';
import { useNotification } from '../hooks/useNotification';
import type { DonorFormData } from '../types/donor';

const DonorsPage: React.FC = () => {
  const {
    donors,
    filteredDonors,
    nameFilter,
    stateFilter,
    handleAddDonor,
    handleEditDonor,
    handleDeleteDonor,
    setNameFilter,
    setStateFilter,
  } = useDonors();

  const { notification, showNotification, hideNotification } = useNotification();

  const handleDonorSubmit = (formData: DonorFormData) => {
    handleAddDonor(formData);
    showNotification('Donation successfully added!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-6">
        <DonorForm onSubmit={handleDonorSubmit} />
        
        <DonorFilter
          nameFilter={nameFilter}
          stateFilter={stateFilter}
          onNameFilterChange={setNameFilter}
          onStateFilterChange={setStateFilter}
        />

        <DonorTable
          donors={filteredDonors}
          onEdit={handleEditDonor}
          onDelete={handleDeleteDonor}
        />

        <DonorStats donors={filteredDonors} />
      </div>

      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onDismiss={hideNotification}
        />
      )}
    </div>
  );
};

export default DonorsPage;