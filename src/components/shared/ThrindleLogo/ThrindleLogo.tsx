import Image from 'next/image';

const ThrindleLogo: React.FC<{ variant: 'blue' | 'white' }> = ({ variant }) => {
  return (
    <figure className='relative h-full w-20 lg:w-24 xl:w-28'>
      <Image alt='Logo' src={`/svg/Logo-${variant}.svg`} fill={true} />
    </figure>
  );
};

export default ThrindleLogo;
