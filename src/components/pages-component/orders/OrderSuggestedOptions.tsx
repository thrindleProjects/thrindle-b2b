import SingleSuggestedOrder from '@/components/pages-component/orders/SingleSuggestedOrder';
import { ModalHeader } from '@/components/shared/modal';

import { IOrderItem } from '@/@types/appTypes';

const OrderSuggestedOptions = ({
  activeItem,
  handleCloseModal,
}: {
  activeItem: IOrderItem | null;
  handleCloseModal: () => void;
}) => {
  return (
    <div className='mt-5 w-full'>
      <ModalHeader title='Suggested Options' />
      <div className='mt-8 grid w-full grid-cols-2  gap-5 lg:grid-cols-3'>
        {activeItem &&
          activeItem?.substitutes &&
          activeItem.substitutes?.map((item, index) => (
            <SingleSuggestedOrder
              key={index}
              item={item}
              itemId={activeItem?.id}
              handleCloseModal={handleCloseModal}
            />
          ))}
      </div>
    </div>
  );
};

export default OrderSuggestedOptions;
