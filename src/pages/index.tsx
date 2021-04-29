import { NextSeo } from 'next-seo';
import Header from '@/components/header';
import FeatureSection from '@/components/feature-section';
import GetInTouch from '@/components/get-in-touch';
import Footer from '@/components/footer';
import { Element, scroller } from 'react-scroll';
import Head from 'next/head';
import Navigation from '@/components/navigation';
import { tw } from 'twind';
import SocialProof from '@/components/social-proof';
import { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

export default function Home() {
  const scrollTo = (element: string) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: `easeInOutQuart`,
    });
  };

  const handleLinkClick = (section: string) => {
    scrollTo(section);
  };

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
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Element name="header-section" />

      <div className={tw(`min-h-screen flex flex-col overflow-auto`)}>
        <Navigation scrollDirection={hideOnScroll.direction} top={hideOnScroll.top} onClick={handleLinkClick} />
        <NextSeo
          title="Floralis Generica | IT Services"
          description="A TypeScript/Next.js theme that includes everything you need to build amazing landing div!"
        />
        <div className={tw(`my-20`)}>
          <Header onClick={() => handleLinkClick(`get-in-touch-section`)} />

          <main>
            <Element name="feature-section">
              <FeatureSection />
            </Element>
            <Element name="testimonials-section">
              <SocialProof />
            </Element>

            <Element name="get-in-touch-section">
              <GetInTouch />
            </Element>
          </main>
          <Footer onClick={handleLinkClick} />
        </div>
      </div>
    </div>
  );
}
