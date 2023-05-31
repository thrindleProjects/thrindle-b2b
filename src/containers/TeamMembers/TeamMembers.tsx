import { Icon } from '@iconify/react';
import { useState } from 'react';
import { HiPlus } from 'react-icons/hi';

import Button from '@/components/buttons/Button';
import AddTeamMemberModal from '@/containers/AddTeamMemberModal';

import { useGetAllCompanyUsersQuery } from '@/api/company';

const TeamMembers: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { data } = useGetAllCompanyUsersQuery('');

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
          <h4 className='text-lg font-medium'>Team Members</h4>
          <div className='flex items-center gap-4'>
            <Button leftIcon={HiPlus} onClick={handleOpen}>
              Add Members
            </Button>
            <Button variant='light'>Create Roles</Button>
          </div>
        </div>
        <table className='w-full'>
          <thead className='text-primary-black/60 text-lg'>
            <tr className='text-left'>
              <th></th>
              <th className='font-medium'>Name</th>
              <th className='font-medium'>Phone</th>
              <th className='font-medium'>Email</th>
              <th className='font-medium'>Access</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.data &&
              !!data.data.length &&
              data.data.map((member) => {
                return (
                  <tr className='' key={member.id}>
                    <td>
                      <button className='text-primary-red text-x p-2'>
                        <Icon icon='ph:trash' />
                      </button>
                    </td>
                    <td>
                      {member.lastName} {member.firstName}
                    </td>
                    <td>{member.phone || 'Not Provided'}</td>
                    <td>{member.email}</td>
                    <td>Dropdown</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      <AddTeamMemberModal isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default TeamMembers;
