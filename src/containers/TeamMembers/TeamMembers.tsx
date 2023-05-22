import { Icon } from '@iconify/react';
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
      <div className='border-primary-black/10 mt-4 flex flex-col gap-5 rounded-lg border p-5'>
        <div className='flex items-center justify-between'>
          <h4 className='text-lg font-medium'>Company Information</h4>
          <Button leftIcon={HiPlus} onClick={handleOpen}>
            Add Members
          </Button>
        </div>
        <table className='w-full'>
          <thead className='text-primary-black/60 text-lg'>
            <tr className='text-left'>
              <th></th>
              <th className='font-medium'>Name</th>
              <th className='font-medium'>Phone Number</th>
              <th className='font-medium'>Password</th>
              <th className='font-medium'>Access</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <button className='text-primary-red text-x p-2'>
                  <Icon icon='ph:trash' />
                </button>
              </td>
              <td>Adewale Yakubu</td>
              <td>08124546578</td>
              <td>**********</td>
              <td>Dropdown</td>
            </tr>
          </tbody>
        </table>
      </div>

      <AddTeamMemberModal isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default TeamMembers;
