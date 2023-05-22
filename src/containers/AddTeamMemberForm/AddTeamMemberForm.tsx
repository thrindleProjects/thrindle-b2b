import { useFormik } from 'formik';
import { useState } from 'react';

import Button from '@/components/buttons/Button';
import Input from '@/components/shared/Input';
import Select from '@/components/shared/Select/Select';
import TeamMemberAddedModal from '@/containers/TeamMemberAddedModal/TeamMemberAddedModal';

import { accessOptions, initialValues, validationSchema } from './validation';

interface AddTeamMemberFormProps {
  onClose: () => void;
}

type AddTeamMemberFormType = React.FC<AddTeamMemberFormProps>;

const AddTeamMemberForm: AddTeamMemberFormType = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      // logic here
      setIsOpen(true);
    },
  });

  const handleCloseAll = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit} className='mt-6 flex flex-col gap-5'>
        <Input
          id='name'
          name='name'
          type='text'
          label='Name'
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.name && formik.touched.name}
          errorText={formik.errors.name}
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

        <Select
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
        />

        <Button className='mt-4 w-full py-4' type='submit'>
          Add Member
        </Button>
      </form>

      <TeamMemberAddedModal isOpen={isOpen} onClose={handleCloseAll} />
    </>
  );
};

export default AddTeamMemberForm;
