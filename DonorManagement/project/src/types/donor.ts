export interface Donor {
  id: string;
  name: string;
  state: string;
  amount: number;
  createdAt: Date;
}

export interface DonorFormData {
  name: string;
  state: string;
  amount: string;
}