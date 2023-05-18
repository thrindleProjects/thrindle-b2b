import { useFormik } from 'formik';
import NaijaStates from 'naija-state-local-government';
import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-hot-toast';

import Button from '@/components/buttons/Button';
import Input from '@/components/shared/Input/Input';
import InputFile from '@/components/shared/InputFile/InputFile';
import Select from '@/components/shared/Select/Select';

import { useUpdateCompanyMutation } from '@/api/auth';
import { TEXT } from '@/constant/constants';
import * as CONSTANTS from '@/constant/constants';
import { mainErrorHandler } from '@/utils/networkHandler';

import { initialValues, validationSchema } from './validation';

const Kycform = () => {
  const router = useRouter();
  const [updateCompany, { isLoading }] = useUpdateCompanyMutation();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append('id', router.query.id as string | Blob);
      formData.append('contactPhone', values.phoneNumber as string | Blob);
      formData.append(
        'alternateContactPhone',
        values.alternatePhone as string | Blob
      );
      formData.append('state', values.state as string | Blob);
      formData.append('landmark', values.landmark as string | Blob);
      formData.append('address', values.officeAddress as string | Blob);
      if (values.logo) {
        if (values.logo[0]) {
          formData.append('logo', values.logo[0] as Blob);
        }
      }

      updateCompany(formData)
        .unwrap()
        .then(() => {
          toast.success('Registration Successful');
          router.push('/app/login');
        })
        .catch((err) => {
          mainErrorHandler(err);
        });
    },
  });

  const state = NaijaStates.all().map(
    (state: { state: string }) => state.state
  );
  const mappedState = state.map((state: string) => {
    return {
      label: state,
      value: state,
    };
  });

  return (
    <div className='mb-10 mt-6 md:w-full xl:w-[80%]'>
      <form onSubmit={formik.handleSubmit}>
        <Input
          id={CONSTANTS.PHONE_NUMBER}
          type={TEXT}
          value={formik.values[CONSTANTS.PHONE_NUMBER]}
          placeholder='XXXXXXXXXX'
          label='Company Phone Number'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors[CONSTANTS.PHONE_NUMBER] &&
            formik.touched[CONSTANTS.PHONE_NUMBER]
          }
          errorText={formik.errors[CONSTANTS.PHONE_NUMBER]}
          required={true}
        />
        <div className='mt-3'>
          <Input
            id={CONSTANTS.ALTERNATE_PHONE}
            type={TEXT}
            value={formik.values[CONSTANTS.ALTERNATE_PHONE]}
            placeholder='XXXXXXX'
            label='Alternative contact Phone'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors[CONSTANTS.ALTERNATE_PHONE] &&
              formik.touched[CONSTANTS.ALTERNATE_PHONE]
            }
            errorText={formik.errors[CONSTANTS.ALTERNATE_PHONE]}
            required={true}
          />
        </div>
        <div className='mt-3'>
          <Select
            label='State'
            id={CONSTANTS.STATE}
            name={CONSTANTS.STATE}
            onChangeValue={formik.setFieldValue}
            value={formik.values[CONSTANTS.STATE]}
            onBlurEvent={formik.setFieldTouched}
            error={
              formik.errors[CONSTANTS.STATE] && formik.touched[CONSTANTS.STATE]
            }
            errorText={formik.errors[CONSTANTS.STATE]}
            required={true}
            options={mappedState}
          />
        </div>
        <div className='mt-3'>
          <Input
            id={CONSTANTS.OFFICE_ADDRESS}
            type={TEXT}
            value={formik.values[CONSTANTS.OFFICE_ADDRESS]}
            placeholder='Bariga, Lagos'
            label='Office Address'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors[CONSTANTS.OFFICE_ADDRESS] &&
              formik.touched[CONSTANTS.OFFICE_ADDRESS]
            }
            errorText={formik.errors[CONSTANTS.OFFICE_ADDRESS]}
            required={true}
          />
        </div>
        <div className='mt-3'>
          <Input
            id={CONSTANTS.LANDMARK}
            type={TEXT}
            value={formik.values[CONSTANTS.LANDMARK]}
            placeholder='Bariga, Lagos'
            label='Landmark (optional)'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors[CONSTANTS.LANDMARK] &&
              formik.touched[CONSTANTS.LANDMARK]
            }
            errorText={formik.errors[CONSTANTS.LANDMARK]}
            required={true}
          />
        </div>
        <div className='mt-4'>
          <InputFile
            label='Company Logo (Optional)'
            id={CONSTANTS.LOGO}
            name={CONSTANTS.LOGO}
            className='rounded-[8px]'
            type='file'
            placeholder='Click to upload image or drag image here '
            onChange={formik.setFieldValue}
            onBlur={formik.handleBlur}
            value={formik.values[CONSTANTS.LOGO]}
            error={
              formik.errors[CONSTANTS.LOGO] && formik.touched[CONSTANTS.LOGO]
            }
            errorText={formik.errors[CONSTANTS.LOGO]}
            extensions='image/*, .doc, .docx,'
            showPreview={true}
          />
        </div>

        <div className='mt-10 flex gap-6'>
          <Button
            onClick={() => router.push('app/login')}
            className='w-[203px]'
            variant='outline'
          >
            <span>Back</span>
          </Button>
          <Button
            isLoading={isLoading}
            className='w-[203px]'
            type='submit'
            variant='primary'
          >
            <span>Proceed</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Kycform;
