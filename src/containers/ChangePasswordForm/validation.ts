import * as Yup from 'yup';

export const initialValues: {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
} = {
  currentPassword: '',
  newPassword: '',
  confirmNewPassword: '',
};

export const validationSchema = Yup.object({
  currentPassword: Yup.string().required('Password is required'),
  newPassword: Yup.string()
    .required('Type in a new password')
    .matches(
      /^(?=.*\d)[A-Za-z\d]{8,}$/,
      'Must be 8 characters long and must have a number'
    ),
  confirmNewPassword: Yup.string()
    .required('Please confirm new password')
    .oneOf([Yup.ref('newPassword')], "Passwords don't match."),
});
