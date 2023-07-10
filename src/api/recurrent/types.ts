export interface IRecurrentItems {
  id: string;
  name: string;
  description: string;
  images: string[];
  recurrent: boolean;
  companyId: string;
  isAvailable: boolean;
  price: null | number;
  quantity: number;
  volumeDiscount: boolean;
  volumeDiscountAmt: number;
  createdAt: Date;
  updatedAt: Date;
  isSubstitute: boolean;
}

export interface ICreateRecurrentOrderPayload {
  monthlyDeliveryDay: number;
  list: string[] | undefined;
}

export interface ICreateRecurrentOrderResponse {
  id: string;
  orderStatus: string;
  orderRefCode: string;
  companyId: string;
  priceUpdated: false;
  listItems: string[];
  createdAt: Date;
  updatedAt: Date;
  recurringPaymentAmount: null | number | string;
  recurringDeliveryDay: number;
}
export interface IRecurrentOrderResponse {
  id: string;
  orderStatus: string;
  orderRefCode: string;
  companyId: string;
  priceUpdated: false;
  listItems: IRecurrentItems[];
  createdAt: Date;
  updatedAt: Date;
  recurringPaymentAmount: null | number | string;
  recurringDeliveryDay: number;
}

interface ISubtitues {
  createdAt: string;

  description: string;
  id: string;
  images: string[];
  name: string;

  price: number;

  quantity: number;
  updatedAt: string;
  volumeDiscount: boolean;
  volumeDiscountAmt: number;
}
export interface ISingleRecurrentItem {
  id: string;
  name: string;
  description: string;
  images: string[];
  isSubstitute: boolean;
  substitutes: ISubtitues[];
  recurrent: boolean;
  companyId: string;
  isAvailable: boolean;
  price: number | null;
  quantity: number;
  volumeDiscount: boolean;
  volumeDiscountAmt: number;
  createdAt: string;
  updatedAt: string;
}
