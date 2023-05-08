import * as Yup from 'yup';

import {
  getExtension,
  SUPPORTED_FORMATS,
} from '@/components/lib/addItemForm/validation';

import * as CONSTANTS from '@/constant/constants';

export const validationSchema = Yup.object({
  // [CONSTANTS.BVN]: Yup.number()
  //   .required('BVN is required')
  //   .typeError('Only numbers are allowed'),
  [CONSTANTS.PHONE_NUMBER]: Yup.string().required('Phone Number  is required'),
  [CONSTANTS.ALTERNATE_PHONE]: Yup.string().required(
    ' Alternative Phone Number  is required'
  ),
  [CONSTANTS.OFFICE_ADDRESS]: Yup.string().required(
    ' Office Address  is required'
  ),
  [CONSTANTS.STATE]: Yup.string().required(' State  is required'),
  [CONSTANTS.LOGO]: Yup.array()
    .min(1, 'Please provide at least one image')

    .test(
      'fileType',
      'Please provide a supported file type',
      (value: undefined | File[]) => {
        if (!value) return false;
        const isValid = value.every((file) => {
          return SUPPORTED_FORMATS.includes(getExtension(file.name));
        });

        return isValid;
      }
    ),
});

export const initialValues: {
  [CONSTANTS.PHONE_NUMBER]: string;
  [CONSTANTS.ALTERNATE_PHONE]: string;
  [CONSTANTS.OFFICE_ADDRESS]: string;
  [CONSTANTS.STATE]: string;
  [CONSTANTS.LANDMARK]: string;
  [CONSTANTS.LOGO]?: File[];
} = {
  [CONSTANTS.PHONE_NUMBER]: '',
  [CONSTANTS.LOGO]: [],
  [CONSTANTS.ALTERNATE_PHONE]: '',
  [CONSTANTS.OFFICE_ADDRESS]: '',
  [CONSTANTS.STATE]: '',
  [CONSTANTS.LANDMARK]: '',
};
