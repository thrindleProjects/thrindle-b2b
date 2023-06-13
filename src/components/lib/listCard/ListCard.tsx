import moment from 'moment';
import Image from 'next/image';
import React from 'react';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

import { IListCardProps } from '@/components/lib/listCard/types';
import BorderContainer from '@/components/shared/borderContainer/BorderContainer';

import { BASE_URL } from '@/api/globalApi';
import { useDeleteItemFromRecurrentOrderMutation } from '@/api/recurrent';
import { IMAGE_URL_PATH } from '@/constant/constants';
import { mainErrorHandler } from '@/utils/networkHandler';

const ListCard: React.FC<IListCardProps> = ({ data, active, setActive }) => {
  const [deleteItem] = useDeleteItemFromRecurrentOrderMutation();

  const handleSubmit = (id: string) => {
    deleteItem(id)
      .unwrap()
      .then((res) => {
        toast.success(res.message);
      })
      .catch((err) => {
        mainErrorHandler(err);
      });
  };

  useEffect(() => {
    if (setActive && data) {
      const firstId = data[0]?.id;
      setActive(firstId);
    }
  }, [data, setActive]);
  return (
    <div className='mt-6 overflow-y-auto'>
      {data &&
        data.map((item, index) => (
          <BorderContainer
            onClick={() => {
              if (setActive) {
                setActive(item.id);
              }
            }}
            key={index}
            className={`mt-6 cursor-pointer  p-6 ${
              active === item.id ? 'border-primary-blue' : ''
            }`}
          >
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-6'>
                {item.images?.[0] && (
                  <Image
                    src={`${BASE_URL}${IMAGE_URL_PATH}/${item?.images[0]}`}
                    alt=''
                    width={40}
                    height={40}
                  />
                )}
                <div className='md:hidden lg:block'>
                  <p className='text-[16px] font-[600]'>{item.name}</p>
                  <p className='text-[12px] font-[500]  text-[#767778]'>
                    {moment(item.createdAt).format('Do MMMM YYYY')}
                  </p>
                </div>
              </div>
              <p className='whitespace-nowrap text-[16px] font-[600]  md:hidden lg:block'>
                {item.quantity}
              </p>
            </div>
            <div className='mt-4 block lg:hidden'>
              <div className='my-2 flex items-center justify-between'>
                <p className='text-[16px] font-[600]'>{item.name}</p>
                <p className='whitespace-nowrap text-[16px] font-[600]'>
                  {item.quantity}
                </p>
              </div>
              <p className='text-[12px] font-[500]  text-[#767778]'>
                {moment(item.createdAt).format('Do MMMM YYYY')}
              </p>
            </div>
            <div className='mt-6 flex items-center  justify-between lg:pl-16 '>
              <p className='break-words text-[12px] font-[500] text-[#767778] lg:w-[60%] '>
                {item.description}
              </p>
              <Image
                onClick={() => handleSubmit(item.id)}
                src='/assets/svg/bin.svg'
                alt=''
                width={18}
                height={18}
              />
            </div>
          </BorderContainer>
        ))}
    </div>
  );
};

export default ListCard;
