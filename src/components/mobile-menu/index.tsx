import React from 'react';
import { tw } from 'twind';
import clsx from 'clsx';
import links from '@/constants/navigationLinks';

interface IMobileMenu {
  onClick: (x: string) => void;
  open: boolean;
}

const MobileMenu = ({ open, onClick }: IMobileMenu) => (
  <div
    className={clsx(
      tw(
        `flex items-center justify-center absolute z-50 inset-0 bg-secondary-light
         -translate-x-full opacity-0 z-10 transition-all delay-300s h-screen w-screen`,
      ),
      {
        [tw(`opacity-100 translate-x-0 `)]: open,
      },
    )}
  >
    <div className={clsx(`flex flex-col items-center justify-center px-2 pt-2 pb-3 space-y-1 sm:px-3`)}>
      {links.map((link) => (
        <span
          key={link.label}
          role="button"
          aria-hidden="true"
          tabIndex={0}
          onClick={() => onClick(link.element)}
          className={clsx(
            `group text-secondary-dark font-semibold block px-3 py-2 text-xl md:text-2xl lg:text-4xl font-mediums`,
          )}
        >
          {link.label}
          <div
            className={tw(`h-0.5 lg:h-1 w-0 bg-secondary-dark transition-all ease-out delay-75 group-hover:w-full`)}
          />
        </span>
      ))}
    </div>
  </div>
);

export default MobileMenu;
