import ChangePasswordForm from '@/containers/ChangePasswordForm';

const PasswordLayout: React.FC = () => {
  return (
    <div className='p-5'>
      <section className='border-primary-black/10 mt-4   rounded-lg border p-5'>
        <h4 className='text-lg font-medium'>Change Password</h4>
        <ChangePasswordForm />
      </section>
    </div>
  );
};

export default PasswordLayout;
