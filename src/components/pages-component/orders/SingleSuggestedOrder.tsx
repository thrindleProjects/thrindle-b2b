import { Carousel } from 'flowbite-react';
import { useState } from 'react';

import Button from '@/components/buttons/Button';
import ImageComponent from '@/components/shared/ImageComponent';

import { IOrderItemSubstitute } from '@/@types/appTypes';
import { BASE_URL } from '@/api/globalApi';
import { useReplaceUnavailableItemMutation } from '@/api/order/orderServices';
import { IMAGE_URL_PATH } from '@/constant/constants';
import { mainErrorHandler, successHandler } from '@/utils/networkHandler';

import ReplaceItemConsentModal from './ReplaceItemConsentModal';

const SingleSuggestedOrder = ({
  item,
  itemId,
  handleCloseModal,
}: {
  item: IOrderItemSubstitute;
  itemId: string;
  handleCloseModal: () => void;
}) => {
  const [consentModal, setConsentModal] = useState(false);
  const [replaceItem, { isLoading }] = useReplaceUnavailableItemMutation();

  const replaceUnavailableItem = () => {
    replaceItem({ itemId, subId: item?.id })
      .unwrap()
      .then((res) => {
        successHandler(res?.message);
        setConsentModal(false);
        handleCloseModal();
      })
      .catch((err) => {
        mainErrorHandler(err);
      });
  };
  return (
    <div className='mb-40 w-full lg:mb-0'>
      <Carousel
        className='relative aspect-[16/9]'
        indicators={false}
        leftControl={<></>}
        rightControl={<></>}
      >
        {item.images.map((image, index) => (
          <figure className='relative h-full w-full bg-gray-200' key={index}>
            <ImageComponent
              src={`${BASE_URL}${IMAGE_URL_PATH}/${image}`}
              alt={image}
            />
          </figure>
        ))}
      </Carousel>
      <div className='mt-2'>
        <p className=' truncate... text-xs font-medium text-gray-700 xl:text-sm'>
          {item.name}
        </p>
        <p className='font-clash-grotesk mt-2 text-xs font-normal text-gray-600'>
          {item?.description.slice(0, 200)}
        </p>
        <p className='font-clash-grotesk mt-2 text-[10px] font-normal text-gray-400'>
          {item?.quantity} pieces
        </p>
        <div className='mt-1'>
          <span className='font-clash-grotesk text-xs font-semibold text-gray-800'>
            ₦{item.price?.toLocaleString()}/
          </span>
          <span className='text-[10px] font-light'>each</span>
        </div>
        <Button
          className=' mt-5 h-[44px] w-full'
          onClick={() => setConsentModal(true)}
        >
          Select
        </Button>
      </div>

      <ReplaceItemConsentModal
        handleReplace={replaceUnavailableItem}
        isLoading={isLoading}
        isOpen={consentModal}
        handleClose={() => setConsentModal(false)}
      />
    </div>
  );
};

export default SingleSuggestedOrder;
