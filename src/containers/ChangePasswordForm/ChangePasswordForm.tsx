import { useFormik } from 'formik';

import Button from '@/components/buttons/Button';
import Input from '@/components/shared/Input';

import { useChangePasswordMutation } from '@/api/auth';

import { initialValues, validationSchema } from './validation';

const ChangePasswordForm: React.FC = () => {
  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      // logic here
      try {
        await changePassword(values).unwrap();
        // bola1999A@
        // thisPass@123
      } catch (error: unknown) {
        // catch here
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='mt-6 w-1/2 space-y-6'>
      <Input
        type='password'
        id='currentPassword'
        name='currentPassword'
        label='Current Password'
        value={formik.values.currentPassword}
        placeholder='*********'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.currentPassword && formik.touched.currentPassword}
        errorText={formik.errors.currentPassword}
        required={true}
      />
      <div className='flex flex-col gap-2 '>
        <Input
          type='password'
          id='password'
          name='password'
          label='New Password'
          value={formik.values.password}
          placeholder='*********'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.password && formik.touched.password}
          errorText={formik.errors.password}
          required={true}
        />
        <span className='text-primary-blue/60 text-xs font-medium'>
          Your password must be at least 8 characters including numbers{' '}
        </span>
      </div>
      <Input
        type='password'
        id='confirmPassword'
        name='confirmPassword'
        label='Confirm New Password'
        value={formik.values.confirmPassword}
        placeholder='*********'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.confirmPassword && formik.touched.confirmPassword}
        errorText={formik.errors.confirmPassword}
        required={true}
      />
      <Button
        type='submit'
        className='px-6 font-semibold'
        isLoading={isLoading}
      >
        Save Changes
      </Button>
    </form>
  );
};

export default ChangePasswordForm;
