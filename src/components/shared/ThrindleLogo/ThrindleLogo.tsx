import Image from 'next/image';

const ThrindleLogo: React.FC<{ variant: 'blue' | 'white' }> = ({ variant }) => {
  return (
    <figure className='relative h-full w-36'>
      <Image alt='Logo' src={`/svg/Logo-${variant}.svg`} fill={true} />
    </figure>
  );
};

export default ThrindleLogo;
