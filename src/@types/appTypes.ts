import { ICompanyDetails } from '@/utils/appTypes';

export type navItemType =
  | 'dashboard'
  | 'profile'
  | 'wallet'
  | 'shopping-list'
  | 'recurrent-list'
  | 'orders';

export type orderStatus =
  | 'all'
  | 'requested'
  | 'pending'
  | 'in-progress'
  | 'completed'
  | 'cancelled'
  | 'owing';

export type orderPaymentOptions = 'now' | 'scheduled-payment';
export type IGlobalError = {
  status: number;
  data: {
    message: string;
  };
};

export interface IOrderItemSubstitute {
  id: string;
  name: string;
  description: string;
  images: string[];
  isSubstitute: boolean;
  recurrent: boolean;
  companyId: string;
  price: null | number;
  quantity: number;
  volumeDiscount: boolean;
  volumeDiscountAmt: number;
}
export interface IOrderItem {
  id: string;
  name: string;
  description: string;
  image: string;
  isSubstitute: boolean;
  substitutes: IOrderItemSubstitute[];
  recurrent: boolean;
  companyId: string;
  price: null | number;
  quantity: number;
  volumeDiscount: boolean;
  volumeDiscountAmt: number;
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
  images: string[];
}

export interface ISingleOrder {
  id: string;
  orderStatus: orderStatus;
  orderRefCode: string;
  companyId: string;
  priceUpdated: boolean;
  deliveryConfirmation: boolean;
  paymentStatus: boolean;
  paymentTotal: number;
  listItems: IOrderItem[];
  createdAt: string;
  updatedAt: string;
  paymentDate: null | string;
  company: ICompanyDetails;
  serviceCharge: null | number;
  deliveryFee: null | number;
}
export interface IOrder {
  id: string;
  orderStatus: orderStatus;
  orderRefCode: string;
  companyId: string;
  priceUpdated: boolean;
  deliveryConfirmation: boolean;
  paymentStatus: boolean;
  paymentTotal: number;
  listItems: IOrderItem[];
  createdAt: string;
  updatedAt: string;
  paymentDate: null | string;
  company: ICompanyDetails;
  serviceCharge: null | number;
  deliveryFee: null | number;
}
