import { ICompanyDetails } from '../../utils/appTypes';

export interface IWalletDetails {
  id: string;
  company: ICompanyDetails;
  balance: number;
  totalSpent: number;
  totalDeposited: number;
}

export interface IWalletTotal {
  total: number;
  inflow: number;
  outflow: number;
}
