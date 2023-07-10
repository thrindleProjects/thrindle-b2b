import { useSession } from 'next-auth/react';
import React, { PropsWithChildren } from 'react';

import { useDisclosure } from '@/hooks';

import ActiveLink from '@/components/shared/ActiveLink';
import AuthenticatedLayoutHeader from '@/components/shared/AuthenticatedLayoutHeader/AuthenticatedLayoutHeader';
import MainContentWrapper from '@/components/shared/MainContentWrapper/MainContentWrapper';
import LogoutModal from '@/containers/logoutModal/LogoutModal';

import AuthenticatedLayout from '@/layouts/AuthenticatedLayout/AuthenticatedLayout';

type ProfileLayoutType = React.FC<PropsWithChildren>;

const links = [
  {
    title: 'Company Profile',
    link: '/app/profile',
    index: true,
    access: ['owner'],
  },
  {
    title: 'Password',
    link: '/app/profile/password',
    access: ['owner', 'teamMember'],
  },
  {
    title: 'Team Access',
    link: '/app/profile/team',
    access: ['owner'],
  },
];

const ProfileLayout: ProfileLayoutType = ({ children }) => {
  const { data } = useSession();

  const { isOpen, open, close } = useDisclosure();

  if (!data) {
    return <></>;
  }

  return (
    <AuthenticatedLayout>
      <MainContentWrapper>
        <AuthenticatedLayoutHeader headerText='Profile' />

        <div className='border-primary-black/10 col-span-1 col-start-1 row-span-1 row-start-1 grid h-[35rem] grid-cols-[auto_1fr] grid-rows-1 border'>
          <div className='border-r-primary-black/10 h-full border-r p-5'>
            <nav className='h-full'>
              <ul className='flex h-full flex-col items-start gap-4 rounded-lg'>
                {links.map((link) => {
                  if (link.access.includes(data.user.type)) {
                    return (
                      <li key={link.link} title={link.title}>
                        <ActiveLink
                          href={link.link}
                          className='text-primary-black/60 block rounded-lg p-3 text-sm font-medium lg:text-base'
                          activeClassName='blue_linear_gradient'
                          index={link.index}
                        >
                          {link.title}
                        </ActiveLink>
                      </li>
                    );
                  }
                  return <React.Fragment key={link.link}></React.Fragment>;
                })}

                <li>
                  <button
                    onClick={open}
                    className='text-primary-red block rounded-lg p-3 text-sm font-medium lg:text-base'
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <div>{children}</div>
        </div>
      </MainContentWrapper>

      <LogoutModal close={close} isOpen={isOpen} />
    </AuthenticatedLayout>
  );
};

export default ProfileLayout;
