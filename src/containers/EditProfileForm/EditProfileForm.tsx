import { useFormik } from 'formik';
import { signIn, useSession } from 'next-auth/react';
import { useMemo } from 'react';
import { toast } from 'react-hot-toast';

import logger from '@/lib/logger';

import Button from '@/components/buttons/Button';
import Input from '@/components/shared/Input';
import { ModalHeader } from '@/components/shared/modal';
import {
  EditProfileFormValues,
  initialValues,
  validationSchema,
} from '@/containers/EditProfileForm/validation';

import { useUpdateCompanyDetailsMutation } from '@/api/company';

const EditProfileForm = () => {
  const { data } = useSession();

  const [updateDetails, { isLoading }] = useUpdateCompanyDetailsMutation();

  const userInfo: EditProfileFormValues = useMemo(() => {
    if (!data) {
      return {
        companyName: '',
        address: '',
        contactPhone: '',
        alternateContactPhone: '',
      };
    }
    const { company } = data.user;
    return {
      companyName: company.companyName || '',
      address: company.address || '',
      contactPhone: company.contactPhone || '',
      alternateContactPhone: company.alternateContactPhone || '',
    };
  }, [data]);

  const formik = useFormik({
    initialValues: { ...initialValues, ...userInfo },
    validationSchema,
    onSubmit: async (value) => {
      // logic here
      try {
        const resp = await updateDetails({
          ...value,
          id: data?.user.company.id as string,
        }).unwrap();

        const user = {
          email: resp.data.email,
          logo: resp.data.logo || '',
          companyName: resp.data.companyName,
          company_email: resp.data.email,
          state: resp.data.state || '',
          landmark: resp.data.landmark || '',
          status: resp.data.status,
          contactPhone: resp.data.contactPhone,
          company_token: resp.data.token,
          tokenExpiry: resp.data.tokenExpiry,
          address: resp.data.address,
          token: data?.token,
          id: data?.user.id,
          firstName: data?.user.firstName,
          lastName: data?.user.lastName,
          phone: data?.user.phone,
          type: data?.user.type,
          alternateContactPhone: resp.data.alternateContactPhone,
          company_id: data?.user.company.id,
        };
        if (resp.status === 'success') {
          await signIn('update', {
            redirect: false,
            ...user,
          });
        }

        formik.resetForm();
        toast.success('Company Profile Updated Successfully');
      } catch (error: unknown) {
        // handle catch

        logger(error);
      }
    },
    validateOnChange: false,
    enableReinitialize: true,
  });

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    formik;

  return (
    <div className='mt-8 space-y-6'>
      <ModalHeader title='Edit Profile' />
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <Input
          id='companyName'
          name='companyName'
          type='text'
          value={values.companyName}
          label='Company Name'
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.companyName && touched.companyName}
          errorText={errors.companyName}
          required={true}
        />

        <Input
          id='contactPhone'
          name='contactPhone'
          type='text'
          value={values.contactPhone}
          label='Contact Person Phone Number'
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.contactPhone && touched.contactPhone}
          errorText={errors.contactPhone}
          required={true}
        />
        <Input
          id='alternateContactPhone'
          name='alternateContactPhone'
          type='text'
          value={values.alternateContactPhone}
          label='Alternate Contact Person Number'
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.alternateContactPhone && touched.alternateContactPhone}
          errorText={errors.alternateContactPhone}
          required={true}
        />
        <Input
          id='address'
          name='address'
          type='text'
          value={values.address}
          label='Address'
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.address && touched.address}
          errorText={errors.address}
          required={true}
        />

        <Button
          className='mt-4 w-full py-4'
          type='submit'
          isLoading={isLoading}
        >
          Save Changes
        </Button>
      </form>
    </div>
  );
};

export default EditProfileForm;
