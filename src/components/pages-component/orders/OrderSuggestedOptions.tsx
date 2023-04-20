import SingleSuggestedOrder from '@/components/pages-component/orders/SingleSuggestedOrder';
import { ModalHeader } from '@/components/shared/modal';

import { recentPurchasesData } from '@/utils/devData';

const OrderSuggestedOptions = () => {
  return (
    <div className='mt-5 w-full'>
      <ModalHeader title='Suggested Options' />
      <div className='mt-8 grid w-full grid-cols-2 gap-5 lg:grid-cols-3'>
        {recentPurchasesData.map((item, index) => (
          <SingleSuggestedOrder key={index} />
        ))}
      </div>
    </div>
  );
};

export default OrderSuggestedOptions;
