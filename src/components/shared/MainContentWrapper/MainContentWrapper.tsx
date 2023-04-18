import { PropsWithChildren } from 'react';

const MainContentWrapper: React.FC<
  PropsWithChildren & {
    className?: string;
  }
> = ({ className, children }) => {
  return <main className={`px-10 pb-10 ${className || ''}`}>{children}</main>;
};

export default MainContentWrapper;
