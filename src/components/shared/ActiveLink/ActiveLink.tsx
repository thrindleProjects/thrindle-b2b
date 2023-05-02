import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
type ActiveLinkProps = React.FC<
  LinkProps & {
    activeClassName?: string;
    inactiveClassName?: string;
    className?: string;
    children?: React.ReactNode;
    index?: boolean;
  }
>;

const ActiveLink: ActiveLinkProps = ({
  href,
  inactiveClassName,
  activeClassName,
  className,
  children,
  index,
}) => {
  const { asPath } = useRouter();

  const isActive = useMemo(() => {
    if (index) {
      return asPath === href;
    }

    return asPath.startsWith((href as string) || '');
  }, [asPath, href, index]);

  return (
    <Link
      href={href}
      className={`${className} ${
        isActive ? activeClassName || '' : inactiveClassName || ''
      }`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
