export interface LoginData {
  email: string;
  password: string;
}

// NETWORK TYPES
export interface INetworkSuccessResponse<T> {
  data: T;
  message: string;
  status?: string;
  success?: boolean;
}
export interface INetworkErrorResponse {
  data: {
    message: string;
    errors: string;
  };
  status?: number;
}

export type InputPasswordType = 'password';
export type InputTextType = 'text';
export type InputEmailType = 'email';
export type InputDateType = 'date';
export type InputFileType = 'file';
export type InputSelectType = 'select';

export interface FundsModalProps {
  title: string;
  text: string;
}

export interface ICompanyDetails {
  id: string;
  companyName: string;
  email: string;
  address: string;
  state: string;
  landmark: string;
  contactPhone: string;
  alternateContactPhone: string;
  status: string;
  token: string;
  tokenExpiry: Date;
  logo: string;
}
export interface LoginResponse {
  token: string;
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  company: ICompanyDetails;
  type: string;
}
