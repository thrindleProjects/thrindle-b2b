import * as Yup from 'yup';

export const initialValues: { name: string; email: string; access: string } = {
  name: '',
  email: '',
  access: '',
};

export const accessLevels = ['Wallet Access', 'Can Order', 'View'];

export const accessOptions = accessLevels.map((level) => {
  return { label: level, value: level };
});

export const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Please enter a valid email address'),
  access: Yup.string()
    .required('Select access level')
    .oneOf(accessLevels, 'Select a valid access level'),
});
