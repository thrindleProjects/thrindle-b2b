import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { DashboardChartTooltip } from '@/components/pages-component/dashboard';

import { graphData } from '@/utils/devData';

const DashboardChart = () => {
  return (
    <div className='w-full px-6 py-8'>
      {/* Header */}
      <div className='flex w-full flex-row justify-between '>
        <div>
          <p className='font-clash-grotesk pb-1 text-xs font-normal text-gray-400'>
            Total Amount Spent
          </p>
          <p className='font-clash-grotesk text-xl font-semibold text-gray-800'>
            ₦20,000
          </p>
        </div>
        <p>Hello</p>
      </div>

      {/* Graph Section */}
      <div className='mt-14 w-full'>
        <ResponsiveContainer width='100%' height={400}>
          <LineChart
            // width={600}
            // height={300}
            className='w-full'
            data={graphData}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line type='monotone' dataKey='uv' stroke='#8884d8' />
            {/* <CartesianGrid stroke='#ccc' strokeDasharray='5 5' /> */}
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip
              wrapperStyle={{ outline: 'none' }}
              formatter={(value, name) => [`#${value}K`, name]}
              content={<DashboardChartTooltip />}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardChart;
