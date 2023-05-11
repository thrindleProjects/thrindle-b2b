import { ICompanyDetails } from '@/utils/appTypes';

interface IOwner {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: null | string;
  company: ICompanyDetails;
  type: string;
}
export interface ICreateNewCompanyData {
  owner: IOwner;
  company: ICompanyDetails;
}

export interface CreateCompanyPayload {
  companyName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface VerifyCompanyPayload {
  companyId: string | string[] | undefined;
  token: string;
}
