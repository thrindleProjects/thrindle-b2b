export interface IRecurrentItems {
  id: string;
  name: string;
  description: string;
  image: string;
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

export interface ISingleRecurrentItem {
  id: string;
  name: string;
  description: string;
  image: string;
  isSubstitute: boolean;
  substitutes: [];
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
