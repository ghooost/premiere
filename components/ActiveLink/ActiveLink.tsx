import React, { ComponentProps } from 'react';
import Link, { LinkProps } from 'next/link';

type AProps = ComponentProps<'a'>;

export interface ActiveLinkProps
  extends LinkProps,
  Omit<AProps, keyof LinkProps>{}

const ActiveLink = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  locale,
  children,
  ...rest
}: ActiveLinkProps) => {
  const linkProps = {
    href,
    as,
    replace,
    scroll,
    shallow,
    passHref,
    prefetch,
    locale,
  } as LinkProps;
  return (
  // eslint-disable-next-line react/jsx-props-no-spreading, react/destructuring-assignment
    <Link {...linkProps}><a {...rest}>{children}</a></Link>
  );
};

export default ActiveLink;
