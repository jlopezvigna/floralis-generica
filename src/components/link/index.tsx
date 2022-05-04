import React from 'react';
import { css, tw } from 'twind/css';

const linkStyle = css`
  color: #0a66c2;
`;

interface ILink {
  children: React.ReactNode;
  component?: string;
  href?: string;
  target?: string;
}

const Link = ({ component, children, ...rest }: ILink) => {
  const Component = component || `a`;
  return (
    <Component className={tw(linkStyle, `hover:underline`)} {...rest}>
      {children}
    </Component>
  );
};

export default Link;
