import * as Yup from 'yup';
export type ChangePasswordPayload = {
  currentPassword: string;
  password: string;
  confirmPassword: string;
};
export const initialValues: ChangePasswordPayload = {
  currentPassword: '',
  password: '',
  confirmPassword: '',
};

export const validationSchema = Yup.object({
  currentPassword: Yup.string().required('Password is required'),
  password: Yup.string()
    .required('Type in a new password')
    .matches(
      /^(?=.*\d).{8,}$/,
      'Must be at least 8 characters long and must have a number'
    ),
  //     .matches(
  //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  //   'Password must be a minimum of 8 characters including alphabets, numbers and symbols'
  // ),
  confirmPassword: Yup.string()
    .required('Please confirm new password')
    .oneOf([Yup.ref('password')], "Passwords don't match."),
});
