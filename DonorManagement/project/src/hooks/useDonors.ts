import { useState } from 'react';
import type { Donor, DonorFormData } from '../types/donor';

export const useDonors = () => {
  const [donors, setDonors] = useState<Donor[]>([]);
  const [nameFilter, setNameFilter] = useState('');
  const [stateFilter, setStateFilter] = useState('');
  const [editingDonor, setEditingDonor] = useState<Donor | null>(null);

  const handleAddDonor = (formData: DonorFormData) => {
    if (editingDonor) {
      setDonors(donors.map(donor => 
        donor.id === editingDonor.id 
          ? { 
              ...donor, 
              name: formData.name,
              state: formData.state,
              amount: parseFloat(formData.amount)
            }
          : donor
      ));
      setEditingDonor(null);
    } else {
      const newDonor: Donor = {
        id: crypto.randomUUID(),
        name: formData.name,
        state: formData.state,
        amount: parseFloat(formData.amount),
        createdAt: new Date()
      };
      setDonors([...donors, newDonor]);
    }
  };

  const handleEditDonor = (donor: Donor) => {
    setEditingDonor(donor);
  };

  const handleDeleteDonor = (id: string) => {
    setDonors(donors.filter(donor => donor.id !== id));
  };

  const filteredDonors = donors.filter(donor => {
    const nameMatch = donor.name.toLowerCase().includes(nameFilter.toLowerCase());
    const stateMatch = !stateFilter || donor.state === stateFilter;
    return nameMatch && stateMatch;
  });

  return {
    donors,
    filteredDonors,
    nameFilter,
    stateFilter,
    handleAddDonor,
    handleEditDonor,
    handleDeleteDonor,
    setNameFilter,
    setStateFilter,
  };
};