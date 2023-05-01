import { useFormik } from 'formik';

import Button from '@/components/buttons/Button';
import Input from '@/components/shared/Input';

import { initialValues, validationSchema } from './validation';

const ChangePasswordForm: React.FC = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      // logic here
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
          id='newPassword'
          name='newPassword'
          label='New Password'
          value={formik.values.newPassword}
          placeholder='*********'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.newPassword && formik.touched.newPassword}
          errorText={formik.errors.newPassword}
          required={true}
        />
        <span className='text-primary-blue/60 text-xs font-medium'>
          Your password must be at least 8 characters including numbers{' '}
        </span>
      </div>
      <Input
        type='password'
        id='confirmNewPassword'
        name='confirmNewPassword'
        label='Confirm New Password'
        value={formik.values.confirmNewPassword}
        placeholder='*********'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.errors.confirmNewPassword && formik.touched.confirmNewPassword
        }
        errorText={formik.errors.confirmNewPassword}
        required={true}
      />
      <Button type='submit' className='px-6 font-semibold'>
        Save Changes
      </Button>
    </form>
  );
};

export default ChangePasswordForm;
