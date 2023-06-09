export type CreateShoppingItemResponse = {
  id: string;
  name: string;
  description: string;
  images: string[];
  isSubstitute: boolean;
  recurrent: boolean;
  companyId: string;
  isAvailable: boolean;
  price: number | null;
  quantity: number;
  volumeDiscount: boolean;
  volumeDiscountAmt: number;
  createdAt: string;
  updatedAt: string;
};
