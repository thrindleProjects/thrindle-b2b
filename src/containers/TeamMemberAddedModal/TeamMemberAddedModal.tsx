import { Icon } from '@iconify/react';
import Image from 'next/image';

import Button from '@/components/buttons/Button';
import GenModal from '@/components/shared/modal/Modal';

interface TeamMemberAddedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TeamMemberAddedModalType = React.FC<TeamMemberAddedModalProps>;

const TeamMemberAddedModal: TeamMemberAddedModalType = ({
  isOpen,
  onClose,
}) => {
  return (
    <GenModal handleCloseModal={onClose} isOpen={isOpen}>
      <section className='flex w-full flex-col gap-3 text-center'>
        <figure className='relative mx-auto aspect-square w-4/5'>
          <Image
            fill={true}
            src='/assets/svg/added_member_sucess.svg'
            alt='Successfully Added'
          />
        </figure>
        <h4 className='text-primary-blue text-2xl font-semibold'>
          Team Member Added
        </h4>
        <p>
          Adewale Yakubu has been added as a member and given wallet access
          successfully, Adewale will sign up his account with the provided phone
          number and the generated password
        </p>

        <section className='flex flex-col gap-2'>
          <h6 className='text-primary-black/60 text-base font-medium'>
            Password
          </h6>
          <p className='text-2xl font-semibold'>3454654</p>
          <button className='text-primary-blue blue_linear_gradient mx-auto flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium'>
            <span>
              <Icon icon='ph:copy-simple' />
            </span>
            <span>Copy</span>
          </button>
        </section>
        <Button
          type='submit'
          className='hover:bg-primary-blue mt-8 w-full py-5 font-medium hover:text-white'
          variant='outline'
          onClick={onClose}
        >
          Back
        </Button>
      </section>
    </GenModal>
  );
};

export default TeamMemberAddedModal;
