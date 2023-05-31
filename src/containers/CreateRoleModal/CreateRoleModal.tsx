import GenModal from '@/components/shared/modal';

interface CreateRoleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type CreateRoleModalType = React.FC<CreateRoleModalProps>;

const CreateRoleModal: CreateRoleModalType = ({ isOpen, onClose }) => {
  return (
    <GenModal isOpen={isOpen} handleCloseModal={onClose}>
      <section className='mt-5 w-4/5 space-y-2'>
        <h5 className='text-primary-blue text-2xl font-semibold'>
          Create Roles
        </h5>
      </section>
    </GenModal>
  );
};

export default CreateRoleModal;
