import * as Yup from 'yup';

export const initialValues: {
  companyName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
} = {
  companyName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
};

export const validationSchema = Yup.object({
  companyName: Yup.string().required('Company name is required'),
  email: Yup.string().email().required('Email is required'),
  phone: Yup.string().required('Phone Number is required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string().required('Confirm Password is required'),
});
