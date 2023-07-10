import { toast } from 'react-hot-toast';

import { INetworkErrorResponse } from '@/utils/appTypes';

// For toast error
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

// For UI errors
/**
 * Type predicate to narrow an unknown error to `FetchBaseQueryError`
 */
export function isFetchBaseQueryError(
  error: unknown
): error is { status: number; data: { message: string } } {
  return typeof error === 'object' && error != null && 'status' in error;
}

/**
 * Type predicate to narrow an unknown error to an object with a string 'message' property
 */
export function isErrorWithMessage(
  error: unknown
): error is { message: string } {
  return (
    typeof error === 'object' &&
    error != null &&
    'message' in error &&
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeof (error as any).message === 'string'
  );
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getErrorMessage = (err: any) => {
  if (isFetchBaseQueryError(err)) {
    // you can access all properties of `FetchBaseQueryError` here
    const errMsg = 'error' in err ? err.error : err?.data?.message;
    return errMsg as string;
  } else if (isErrorWithMessage(err)) {
    // you can access a string 'message' property here
    return err.message || 'Something went wrong';
  }
};

export const successHandler = (message: string) => {
  toast.success(`${message}`);
};
