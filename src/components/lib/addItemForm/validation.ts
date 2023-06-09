import * as Yup from 'yup';

import * as CONSTANTS from '@/constant/constants';

export const SUPPORTED_FORMATS = ['jpg', 'jpeg', 'gif', 'png', 'doc', 'docx'];

export const getExtension = (filename: string) => {
  return (
    (filename &&
      filename.substring(filename.lastIndexOf('.') + 1, filename.length)) ||
    filename
  );
};

export const validationSchema = Yup.object({
  [CONSTANTS.ITEMNAME]: Yup.string().required('Item Name is required'),
  [CONSTANTS.ITEMDESCRIPTION]: Yup.string().required('Description is required'),
  [CONSTANTS.QUANTITY]: Yup.number()
    .required('Quantity is required')
    .typeError('Quantity must be a number'),

  [CONSTANTS.IMAGE]: Yup.array()
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
    )
    .max(6, 'you can not upload more than 6 Images'),
});

export const initialValues: {
  [CONSTANTS.ITEMDESCRIPTION]: string;
  [CONSTANTS.ITEMNAME]: string;
  [CONSTANTS.QUANTITY]: number;

  [CONSTANTS.IMAGE]?: File[];
} = {
  [CONSTANTS.ITEMNAME]: '',
  [CONSTANTS.ITEMDESCRIPTION]: '',
  [CONSTANTS.QUANTITY]: 0,

  [CONSTANTS.IMAGE]: [],
};
