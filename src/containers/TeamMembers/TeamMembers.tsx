import { Icon } from '@iconify/react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { HiPlus } from 'react-icons/hi';

import logger from '@/lib/logger';

import Button from '@/components/buttons/Button';
import AddTeamMemberModal from '@/containers/AddTeamMemberModal';

// import CreateRoleModal from '@/containers/CreateRoleModal/CreateRoleModal';
import {
  useDeleteTeamMemberMutation,
  useGetAllCompanyUsersQuery,
} from '@/api/company';

const TeamMembers: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const [roleModalOpen, setRoleModalOpen] = useState<boolean>(false);

  const { currentData } = useGetAllCompanyUsersQuery('', {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  const [deleteMember] = useDeleteTeamMemberMutation();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDeleteMember = async (id: string) => {
    try {
      await deleteMember(id).unwrap();
      toast.success('Member deleted successfully');
    } catch (error) {
      logger(error);
    }
  };

  return (
    <>
      <div className='border-primary-black/10 span-1 row-start-2 flex flex-col gap-5 overflow-y-auto rounded-lg border p-5'>
        <div className='flex items-center justify-between'>
          <h4 className='text-lg font-medium'>Team Members</h4>
          <div className='flex items-center gap-4'>
            <Button leftIcon={HiPlus} onClick={handleOpen}>
              Add Members
            </Button>
            {/* <Button variant='light' onClick={handleRoleModalOpen}>
              Create Roles
            </Button> */}
          </div>
        </div>
        <table className='w-full'>
          <thead className='text-primary-black/60 text-lg'>
            <tr className='text-left'>
              <th></th>
              <th className='font-medium'>Name</th>
              <th className='font-medium'>Email</th>
            </tr>
          </thead>
          <tbody>
            {currentData &&
              currentData.data &&
              !!currentData.data.length &&
              currentData.data.map((member) => {
                return (
                  <tr className='' key={member.id}>
                    <td>
                      {member.type !== 'owner' && (
                        <button
                          className='text-primary-red text-x p-2'
                          onClick={() => {
                            handleDeleteMember(member.id);
                          }}
                        >
                          <Icon icon='ph:trash' />
                        </button>
                      )}
                    </td>
                    <td>
                      {member.lastName} {member.firstName}
                      {member.type === 'owner' && (
                        <span className='text-primary-blue outline-primary-blue ml-2 rounded-md p-1 text-xs font-semibold outline'>
                          Owner
                        </span>
                      )}
                    </td>
                    {/* <td>{member.phone || 'Not Provided'}</td> */}
                    <td>{member.email}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      <AddTeamMemberModal isOpen={isOpen} onClose={handleClose} />
      {/* <CreateRoleModal isOpen={roleModalOpen} onClose={handleRoleModalClose} /> */}
    </>
  );
};

export default TeamMembers;
