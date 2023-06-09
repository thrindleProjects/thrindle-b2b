// components/ScrollLink.tsx
import Link, { LinkProps } from 'next/link';
import React, { PropsWithChildren } from 'react';
// mirror the props of next/link component
type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>;
type ScrollLinkProps = AnchorProps &
  LinkProps &
  PropsWithChildren & {
    customClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  };
// component definition
const ScrollLink = ({ children, customClick, ...props }: ScrollLinkProps) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    //remove everything before the hash
    const targetId = e.currentTarget.href.replace(/.*#/, '');
    const elem = document.getElementById(targetId);
    const bodyRect = document.body.getBoundingClientRect();
    if (customClick) {
      customClick(e);
    }

    if (!elem) return;
    window.scrollTo({
      top: elem.getBoundingClientRect().top - bodyRect.top,
      behavior: 'smooth',
    });
  };
  return (
    <Link {...props} onClick={handleScroll}>
      {children}
    </Link>
  );
};
export default ScrollLink;
