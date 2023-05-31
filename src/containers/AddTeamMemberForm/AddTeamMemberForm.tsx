import { useFormik } from 'formik';
import { useState } from 'react';

import logger from '@/lib/logger';

import Button from '@/components/buttons/Button';
import Input from '@/components/shared/Input';
import TeamMemberAddedModal from '@/containers/TeamMemberAddedModal/TeamMemberAddedModal';

import { useAddTeamMemberMutation } from '@/api/company';

import { initialValues, validationSchema } from './validation';

interface AddTeamMemberFormProps {
  onClose: () => void;
}

type AddTeamMemberFormType = React.FC<AddTeamMemberFormProps>;

const AddTeamMemberForm: AddTeamMemberFormType = ({ onClose }) => {
  const [memberSuccess, setMemberSuccess] = useState<{
    isOpen: boolean;
    pass: string;
    firstName: string;
    lastName: string;
  }>({
    isOpen: false,
    pass: '',
    firstName: '',
    lastName: '',
  });

  const [createMember, { isLoading }] = useAddTeamMemberMutation();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      // logic here
      try {
        const teamMember = await createMember(values).unwrap();

        setMemberSuccess({
          isOpen: true,
          pass: teamMember.data.newPassword,
          firstName: teamMember.data.firstName,
          lastName: teamMember.data.lastName,
        });
      } catch (error) {
        logger(error);
      }
    },
  });

  const handleCloseAll = () => {
    setMemberSuccess({
      isOpen: false,
      pass: '',
      firstName: '',
      lastName: '',
    });
    onClose();
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit} className='mt-6 flex flex-col gap-5'>
        <Input
          id='firstName'
          name='firstName'
          type='text'
          label='First Name'
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.firstName && formik.touched.firstName}
          errorText={formik.errors.firstName}
          required={true}
        />
        <Input
          id='lastName'
          name='lastName'
          type='text'
          label='Last Name'
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.lastName && formik.touched.lastName}
          errorText={formik.errors.lastName}
          required={true}
        />

        <Input
          id='email'
          name='email'
          type='text'
          label='Email Address'
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.email && formik.touched.email}
          errorText={formik.errors.email}
          required={true}
        />
        {/* <Select
          id='access'
          name='access'
          label='Access'
          value={formik.values.access}
          placeholder='Select Access'
          onChangeValue={formik.setFieldValue}
          onBlurEvent={formik.setFieldTouched}
          error={
            !formik.values.access &&
            formik.errors.access &&
            formik.errors.access
          }
          errorText={formik.errors.access}
          required={true}
          options={accessOptions}
        /> */}
        <Button
          className='mt-4 w-full py-4'
          type='submit'
          isLoading={isLoading}
        >
          Add Member
        </Button>
      </form>

      <TeamMemberAddedModal {...memberSuccess} onClose={handleCloseAll} />
    </>
  );
};

export default AddTeamMemberForm;
