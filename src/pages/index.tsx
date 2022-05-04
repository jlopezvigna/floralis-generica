import FeatureSection from '@/components/feature-section';
import Footer from '@/components/footer';
import GetInTouch from '@/components/get-in-touch';
import Header from '@/components/header';
import Navigation from '@/components/navigation';
import SocialProof from '@/components/social-proof';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useState } from 'react';
import { Element } from 'react-scroll';
import { tw } from 'twind';

export default function Home() {
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
        <NextSeo
          title="Floralis Generica | IT Services"
          description="IT Services, IT infrastructure engineer, mobile web solutions, 
          Red hat solutions, asset management software, api management platform, graphql backend"
        />
        <div className={tw(`my-20`)}>
          <Header />

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
          <Footer />
        </div>
      </div>
    </div>
  );
}
