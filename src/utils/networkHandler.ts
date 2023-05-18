import { toast } from 'react-hot-toast';

import { INetworkErrorResponse } from '@/utils/appTypes';

export const mainErrorHandler = (error: INetworkErrorResponse) => {
  if (error?.status === undefined) {
    toast.error('Request timeout. Try again');
  } else if (error?.data && error?.data?.error) {
    toast.error(`${error?.data?.error}`);
  } else if (error?.data && !error?.data?.message) {
    toast.error(`${error?.data}`);
  } else if (error?.data && error?.data?.message) {
    toast.error(`${error?.data.message}`);
    // showToast({ type: ERROR, message: `${error?.data.message}` });
  } else {
    toast.error(`'Check your connection and try again.'`);
  }
};

// export const axiosErrorHandler = (error: any) => {
//   if (error && error?.response && error?.response?.data?.message) {
//     return showToast({
//       type: ERROR,
//       message: `${error?.response.data.message}`,
//     });
//   } else {
//     showToast({
//       type: ERROR,
//       message: 'Error occurred while setting up your store',
//     });
//   }
// };
