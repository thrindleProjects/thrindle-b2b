import TeamAccessHeader from '@/containers/TeamAccessHeader';
import TeamMembers from '@/containers/TeamMembers';

const TeamLayout: React.FC = () => {
  return (
    <div className='grid h-full grid-cols-1 grid-rows-[auto_1fr] gap-4 p-5'>
      <TeamAccessHeader />
      <TeamMembers />
    </div>
  );
};

export default TeamLayout;
