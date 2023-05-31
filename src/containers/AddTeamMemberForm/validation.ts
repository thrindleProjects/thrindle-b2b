import * as Yup from 'yup';

export type AddTeamMemberFormValues = {
  firstName: string;
  lastName: string;
  email: string;
};

export const initialValues: AddTeamMemberFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  // access: '',
};

export const accessLevels = ['Wallet Access', 'Can Order', 'View'];

export const accessOptions = accessLevels.map((level) => {
  return { label: level, value: level };
});

export const validationSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Please enter a valid email address'),
  // access: Yup.string()
  //   .required('Select access level')
  //   .oneOf(accessLevels, 'Select a valid access level'),
});
