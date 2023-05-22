import * as Yup from 'yup';

export const initialValues: {
  companyName: string;
  email: string;
  password: string;
  confirmPassword: string;
} = {
  companyName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const validationSchema = Yup.object({
  companyName: Yup.string().required('Company name is required'),
  email: Yup.string().email().required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Password must contain at least 8 characters, one uppercase, one number and one special case character'
    ),
  confirmPassword: Yup.string()
    .required('Please confirm your password')
    .oneOf([Yup.ref('password')], "Passwords don't match."),
});
