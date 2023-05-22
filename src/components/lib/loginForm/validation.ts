import * as Yup from 'yup';

export const initialValues: { email: string; password: string } = {
  email: '',
  password: '',
};

export const validationSchema = Yup.object({
  email: Yup.string().email().required('Email number is required'),
  password: Yup.string().required('Password is required'),
});
