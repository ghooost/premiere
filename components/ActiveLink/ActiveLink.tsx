import React, { ReactNode, useCallback } from 'react';
import { useRouter } from 'next/router';

type ActiveLinkProps = {
  children: ReactNode;
  href: string;
};

const ActiveLink = ({ children, href }: ActiveLinkProps) => {
  const router = useRouter();
  const handleClick = useCallback((e) => {
    e.preventDefault();
    router.push(href);
  }, [href]);
  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
};

export default ActiveLink;
