import { IOrder } from '@/@types/appTypes';

const useGetOrderPricesHooks = ({ order }: { order: IOrder }) => {
  const deliveryFee = order && order.deliveryFee ? order.deliveryFee : 0;
  const serviceCharge = order && order.serviceCharge ? order.serviceCharge : 0;
  const getOrderSubTotal = () => {
    let subtotal = 0;
    if (order) {
      for (const item of order.listItems) {
        subtotal += Number(item?.price) * Number(item?.quantity);
      }
      return subtotal;
    } else {
      return 0;
    }
  };

  const getTotalAmount = () => {
    return getOrderSubTotal() + deliveryFee + serviceCharge;
  };
  return {
    serviceCharge,
    deliveryFee,
    getOrderSubTotal,
    getTotalAmount,
  };
};

export default useGetOrderPricesHooks;
