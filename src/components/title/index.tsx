import React from 'react';
import { css, tw } from 'twind/css';

const headerStyle = css`
  background-color: #ffffff;
`;

interface Props {
  header: string;
}

const Title = ({ header }: Props) => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-4 px-14 sm:px-6 lg:px-8`)}>
      <h1
        className={tw(
          `font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-secondary-dark`,
        )}
      >
        {header}
      </h1>
    </div>
  </header>
);

export default Title;
