import * as Yup from 'yup';

export const initialValues: { code: string; password: string } = {
  code: '',
  password: '',
};

export const validationSchema = Yup.object({
  code: Yup.string().required('Email number is required'),
  password: Yup.string().required('Password is required'),
});
