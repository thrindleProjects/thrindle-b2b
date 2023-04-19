import React from 'react';

import AuthenticatedLayoutHeader from '@/components/shared/AuthenticatedLayoutHeader/AuthenticatedLayoutHeader';
import MainContentWrapper from '@/components/shared/MainContentWrapper/MainContentWrapper';

const Profile = () => {
  return (
    <MainContentWrapper>
      <AuthenticatedLayoutHeader headerText='Profile' />
    </MainContentWrapper>
  );
};

export default Profile;
