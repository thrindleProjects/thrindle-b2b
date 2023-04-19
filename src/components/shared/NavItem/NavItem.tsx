import Link from 'next/link';
import { useRouter } from 'next/router';

import { layoutData } from '../../../utils/layoutData';

const NavItem = () => {
  const { asPath } = useRouter();

  return (
    <div className=' "text-sm dark:border-gray-700"  flex gap-8 border-b border-gray-200 px-10 text-center font-medium text-gray-500 dark:text-gray-400'>
      {layoutData.map((item, index) => (
        <Link href={item.route} key={index}>
          <span
            className={`${
              asPath.startsWith(item.route)
                ? 'text-primary-blue border-b-primary-blue'
                : 'border-transparent hover:border-b-2 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300'
            } border-primary-blue inline-block rounded-t-lg border-b-2 py-4 font-medium`}
          >
            {item.text}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default NavItem;
