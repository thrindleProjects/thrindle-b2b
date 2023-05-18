import React, { useEffect } from 'react';

import { SpinnerLoader } from '@/components/common/loader';
import NoList from '@/components/pages-component/recurrent/NoList';
import RecurrentTable from '@/components/pages-component/recurrent/RecurrentTable';

import { useGetAllRecurrentOrdersQuery } from '@/api/recurrent';

interface IProps {
  setHasData: React.Dispatch<React.SetStateAction<boolean>>;
}

const RecurrentLayout: React.FC<IProps> = ({ setHasData }) => {
  const { data, isError, isLoading } = useGetAllRecurrentOrdersQuery(
    'in-progress',
    {
      refetchOnReconnect: true,
    }
  );

  useEffect(() => {
    if (data) {
      setHasData(true);
    }
  }, [setHasData, data]);

  return (
    <div className=''>
      {isLoading && !isError && <SpinnerLoader type='fullScreen' />}
      {!isLoading && !isError && data && data?.data?.length === 0 && <NoList />}

      {!isLoading && !isError && data && data?.data.length > 0 && (
        <RecurrentTable data={data?.data} />
      )}
    </div>
  );
};

export default RecurrentLayout;
