// 404.js
import Navigation from '@/components/navigation';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { Element } from 'react-scroll';
import { tw } from 'twind';

export default function FourOhFour() {
  const [hideOnScroll, setHideOnScroll] = useState({ direction: `up`, top: 0 });

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const direction = currPos.y > prevPos.y ? `down` : `up`;
      setHideOnScroll({ direction, top: currPos.y });
    },
    [hideOnScroll],
    undefined,
    false,
    300,
  );

  return (
    <div>
      <Head>
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Element name="header-section" />

      <div className={tw(`min-h-screen flex flex-col overflow-auto`)}>
        <Navigation scrollDirection={hideOnScroll.direction} top={hideOnScroll.top} />

        <div className={tw(`m-20`)}>
          <main>
            <div className={tw(`flex flex-col items-center justify-center h-80`)}>
              <h1 className={tw(`text-5xl lg:text-7xl font-bold tracking-tight text-secondary`)}>404</h1>
              <h4 className={tw(`text-md lg:text-xl text-center`)}>
                Oops. The page you were looking for doesn&apos;t exist anymore.
              </h4>
              <Link href="/">
                <a className={tw(`text-md lg:text-xl hover:underline text-primary-light`)}>Go back home</a>
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
