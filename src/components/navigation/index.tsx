import { MD } from '@/constants/breakpoint';
import useLinkScroll from '@/hooks/useLinkScroll';
import useToggle from '@/hooks/useToggle';
import useWindowSize from '@/hooks/useWindowSize';
import Link from '@/types/link-type';
import clsx from 'clsx';
import Hamburger from 'hamburger-react';
import React, { useMemo } from 'react';
import { tw } from 'twind';
import MobileMenu from '../mobile-menu';

interface INavigation {
  scrollDirection: string;
  top: number;
}

const Navigation = ({ scrollDirection, top }: INavigation) => {
  const [showMenu, toggleMenu] = useToggle(false);
  const size = useWindowSize();
  const { move } = useLinkScroll();

  const isMobile: boolean = useMemo(() => MD > size.width, [size]);

  const handleClick = (link: Link) => {
    toggleMenu();
    move(link);
  };
  return (
    <nav
      className={clsx(
        tw(`bg-white z-50	fixed top-0 left-0 right-0 delay-75 transition-all`),
        {
          [tw(`-top-20`)]: scrollDirection === `up` && top * -1 > 80 && !showMenu,
        },
        { [tw(`shadow-md`)]: top * -1 > 80 },
      )}
    >
      <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
        <div className={tw(`flex items-center h-20`)}>
          <div className={tw(`flex-shrink-0`)}>
            <img
              className={tw(`lg:h-13 lg:w-13 lg:h-16 lg:w-16`)}
              src="/images/logo.png"
              alt="logo"
              width={56}
              height={65}
            />
          </div>
          <div className={tw(`flex items-center flex-grow justify-end z-50`)}>
            <Hamburger toggled={showMenu} toggle={toggleMenu} size={isMobile ? 20 : 24} rounded color="#0a222c" />
          </div>
        </div>
      </div>
      <MobileMenu open={showMenu} onClick={handleClick} />
    </nav>
  );
};

export default Navigation;
