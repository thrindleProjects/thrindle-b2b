import { PropsWithChildren } from 'react';

export interface LayoutProps extends PropsWithChildren {
  headerText?: string;
  component?: JSX.Element;
  subText?: string;
}
