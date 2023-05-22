import Image from 'next/image';
import React from 'react';

import { IOrderItem } from '@/@types/appTypes';
import { IMAGE_URL_PATH } from '@/constant/constants';

const images = [
  '/images/landing-hero-bg.png',
  '/images/placeholder-image.png',
  '/images/landing-hero-bg.png',
  '/images/large-og.png',
  '/images/placeholder-image.png',
];
const OrderItemDetailModal = ({
  activeItem,
}: {
  activeItem: IOrderItem | null;
}) => {
  const totalPrice = () => {
    if (activeItem) {
      if (activeItem.price) {
        return activeItem?.price * activeItem.quantity;
      } else return 0.0;
    } else return 0.0;
  };

  return (
    <div className='mt-10 w-full'>
      {/* Image section */}
      {activeItem?.images?.length ? (
        <section className='grid w-full grid-cols-3 gap-5'>
          {images.map((img, index) => (
            <div
              key={index}
              className='relative h-[150px] max-h-[150px] w-full rounded-sm bg-gray-100 lg:h-[120px] lg:max-h-[120px]'
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_DEV_URL}${IMAGE_URL_PATH}/${img}`}
                alt={`Order Item ${img}`}
                fill={true}
                className='rounded-sm object-contain'
              />
            </div>
          ))}
        </section>
      ) : (
        <section className='w-full'>
          <h6 className='font-clash-grotesk text-center text-xl font-medium'>
            No Image available for this product
          </h6>
        </section>
      )}

      {/* Detail Section */}
      <section className='mt-5 w-full'>
        <h6 className='font-clash-grotesk text-base font-semibold capitalize text-black'>
          {activeItem && activeItem?.name}
        </h6>
        <p className='font-clash-grotesk pt-3 text-sm font-normal text-black/60'>
          {activeItem && activeItem?.description}
        </p>
        <p className='font-clash-grotesk pt-3 text-sm font-semibold text-black/80'>
          {activeItem && activeItem.quantity}{' '}
          {activeItem && activeItem.quantity > 1 ? 'Pieces' : 'Piece'}
        </p>
        <div className='flex w-full flex-row justify-between'>
          <p className='font-clash-grotesk pt-5 text-xs font-semibold text-gray-800'>
            ₦&nbsp;
            {activeItem && activeItem?.price
              ? activeItem?.price?.toLocaleString()
              : '0.0'}
            /<span className='text-black/40'>each</span>
          </p>
          <div>
            <p className='font-clash-grotesk text-sm font-normal text-gray-600'>
              Total Price
            </p>

            <p className='font-clash-grotesk -mt-5 pt-5 text-sm font-semibold text-gray-800'>
              ₦&nbsp;{totalPrice()?.toLocaleString()}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderItemDetailModal;
