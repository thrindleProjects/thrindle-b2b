import Link from 'next/link';
import { useRouter } from 'next/router';

import { layoutData } from '../../../utils/layoutData';

const NavItem = () => {
  const { asPath } = useRouter();

  return (
    <div className=' "text-sm dark:border-gray-700"  flex gap-8 border-b border-gray-200 px-10 text-center font-medium text-gray-500 dark:text-gray-400'>
      {layoutData.map((item, index) => (
        <Link href={item.route} key={index}>
          <p
            className={`${
              item.route === asPath
                ? 'text-primary-blue border-primary-blue border-b-primary-blue border-b-2 border-transparent'
                : 'border-transparent hover:border-b-2 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300'
            } border-primary-blue inline-block   rounded-t-lg py-4  font-[500]`}
          >
            {item.text}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default NavItem;