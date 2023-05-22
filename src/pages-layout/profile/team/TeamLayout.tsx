import TeamAccessHeader from '@/containers/TeamAccessHeader';
import TeamMembers from '@/containers/TeamMembers';

const TeamLayout: React.FC = () => {
  return (
    <div className='p-5'>
      <TeamAccessHeader />
      <TeamMembers />
    </div>
  );
};

export default TeamLayout;
