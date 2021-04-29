import Button from '@/components/button';
import React from 'react';
import { tw, css } from 'twind/css';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

interface Props {
  onClick(): any;
}

const Header = ({ onClick }: Props) => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1
        className={tw(
          `font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-secondary-dark`,
        )}
      >
        Your website, beyond expectations
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
          Grow up your company with our professional resources.
        </p>
      </div>
      <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
        <Button primary onClick={onClick}>
          Contact us
        </Button>
      </div>
    </div>
  </header>
);

export default Header;
