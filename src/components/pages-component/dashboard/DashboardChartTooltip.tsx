const DashboardChartTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  label?: string;
  payload?: { name: string; value: number; unit: string }[];
}) => {
  if (active && payload && payload.length) {
    return (
      <div className='flex h-[80px] w-[120px] flex-col items-center rounded-md border-0 border-transparent bg-white pt-2 shadow-2xl'>
        <p className='text-center text-xs text-gray-400'>1st&nbsp;{label}</p>
        <p className='font-clash-grotesk pt-1 text-sm font-medium text-gray-700'>
          {' '}
          ₦{payload[0].value.toLocaleString()}
        </p>
        <p className='pt-1 text-center text-xs text-gray-600'>
          20 items bought
        </p>
      </div>
    );
  }
  return null;
};

export default DashboardChartTooltip;
