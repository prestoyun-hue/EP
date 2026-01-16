export interface SolutionFeature {
  name: string;
  description: string;
  included: boolean;
}

export interface Solution {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  recommendedFor: string;
  color: string;
}

export interface ContactFormData {
  solution: string;
  quantity: string;
  companyName: string;
  contactName: string;
  phone: string;
  email: string;
  remarks: string;
}