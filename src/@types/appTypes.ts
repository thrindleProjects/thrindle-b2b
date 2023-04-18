export type navItemType =
  | 'dashboard'
  | 'profile'
  | 'wallet'
  | 'shopping-list'
  | 'recurrent-list'
  | 'orders';

export type orderStatus = 'all' | 'pending' | 'in-progress' | 'completed';

export type orderPaymentOptions = 'now' | 'scheduled-payment';
