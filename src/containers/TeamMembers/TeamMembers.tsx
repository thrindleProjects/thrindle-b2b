import { useState } from 'react';
import { HiPlus } from 'react-icons/hi';

import Button from '@/components/buttons/Button';
import AddTeamMemberModal from '@/containers/AddTeamMemberModal';

const TeamMembers: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className='border-primary-black/10 mt-4 rounded-lg border p-5'>
        <div className='flex items-center justify-between'>
          <h4 className='text-lg font-medium'>Company Information</h4>
          <Button leftIcon={HiPlus} onClick={handleOpen}>
            Add Members
          </Button>
        </div>
      </div>
      <AddTeamMemberModal isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default TeamMembers;
