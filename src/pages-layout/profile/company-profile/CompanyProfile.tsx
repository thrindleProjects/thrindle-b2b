import { useState } from 'react';

import GenModal from '@/components/shared/modal/Modal';
import CompanyProfileHeader from '@/containers/CompanyProfileHeader';
import CompanyProfileInformation from '@/containers/CompanyProfileInformation/CompanyProfileInformation';
import EditProfileForm from '@/containers/EditProfileForm/EditProfileForm';

const CompanyProfileLayout: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className='p-5'>
        <CompanyProfileHeader openModal={handleOpen} />
        <CompanyProfileInformation openModal={handleOpen} />
      </div>

      <GenModal isOpen={isOpen} handleCloseModal={handleClose}>
        <EditProfileForm />
      </GenModal>
    </>
  );
};

export default CompanyProfileLayout;
