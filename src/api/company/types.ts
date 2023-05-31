export type UpdateCompanyResponse = {
  id: string;
  companyName: string;
  email: string;
  address: string;
  state: null | string;
  landmark: null | string;
  logo: null | string;
  contactPhone: string;
  alternateContactPhone: string;
  status: string;
  token: string;
  tokenExpiry: string;
};

export type CompanyMember = {
  company: UpdateCompanyResponse;
  email: string;
  firstName: string;
  id: string;
  lastName: string;

  phone: null | string;
  type: 'owner' | 'teamMember';
};
