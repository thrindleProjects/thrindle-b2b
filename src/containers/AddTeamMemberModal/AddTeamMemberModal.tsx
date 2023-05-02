import GenModal from '@/components/shared/modal/Modal';
import AddTeamMemberForm from '@/containers/AddTeamMemberForm/AddTeamMemberForm';

interface AddTeamMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type AddTeamMemberModalType = React.FC<AddTeamMemberModalProps>;

const AddTeamMemberModal: AddTeamMemberModalType = ({ isOpen, onClose }) => {
  return (
    <GenModal isOpen={isOpen} handleCloseModal={onClose}>
      <section className='mt-5 w-4/5 space-y-2'>
        <h5 className='text-primary-blue text-2xl font-semibold'>
          Add Team Member
        </h5>
        <p className='text-primary-black/60 text-sm font-medium'>
          Add other people in your organization who can handle the procurement
          in your absence and control the amount of access they get
        </p>
      </section>
      <AddTeamMemberForm onClose={onClose} />
    </GenModal>
  );
};

export default AddTeamMemberModal;
