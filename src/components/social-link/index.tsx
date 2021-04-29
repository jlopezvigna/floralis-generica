import React from 'react';
import { tw } from 'twind';

interface ISocialLink extends React.ComponentPropsWithoutRef<'a'> {
  href: string;
  icon: any;
  className?: string;
}

const SocialLink = ({ href, icon, className = ``, ...rest }: ISocialLink) => (
  <a href={href} {...rest}>
    <div
      className={tw(
        `flex justify-center items-center h-12 w-12 bg-white hover:bg-gray-100
            cursor-pointer border rounded-full delay-75 hover:border-gray-100	${className}`,
      )}
    >
      {icon}
    </div>
  </a>
);

export default SocialLink;
