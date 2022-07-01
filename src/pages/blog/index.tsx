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
import Check from '@/constants/svg/check.svg';

import { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Title from '@/components/title';
import { useRouter } from 'next/router';

export default function Blog() {
  const router = useRouter();

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

  const goToBlogDetails = (href: string) => {
    router.push(href);
  };

  return (
    <div>
      <Head>
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Element name="header-section" />

      <div className={tw(`min-h-screen flex flex-col overflow-auto`)}>
        <Navigation scrollDirection={hideOnScroll.direction} top={hideOnScroll.top} />
        <NextSeo
          title="Floralis Generica | Blog"
          description="IT Services, IT infrastructure engineer, mobile web solutions, 
          Red hat solutions, asset management software, api management platform, graphql backend"
        />
        <div className={tw(`my-20`)}>
          <Title header="Our Blog" />

          <main>
            <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
              <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
                <div className={tw(`flex flex-wrap`)}>
                  <div
                    role="button"
                    aria-hidden="true"
                    className={tw(`w-full md:w-1/3 p-8 cursor-pointer`)}
                    onClick={() => goToBlogDetails(`/blog/why-implement-an-ITSM-strategy`)}
                  >
                    <img className={tw(`h-auto w-100 mb-4`)} src="/images/blog/itsm.jpg" alt="logo" />
                    <div className={tw(`flex items-center mb-6`)}>
                      <div className={tw(`text-l hover:underline`)}>Why implement an ITSM strategy?</div>
                    </div>
                  </div>

                  <div
                    role="button"
                    aria-hidden="true"
                    className={tw(`w-full md:w-1/3 p-8 cursor-pointer`)}
                    onClick={() => goToBlogDetails(`/blog/Automation-a-fundamental-tool-for-your-Company`)}
                  >
                    <img className={tw(`h-auto w-100 mb-4`)} src="/images/blog/automation.jpg" alt="logo" />
                    <div className={tw(`flex items-center mb-6`)}>
                      <div className={tw(`text-l hover:underline`)}>
                        Automation, a fundamental tool for your Company.
                      </div>
                    </div>
                  </div>

                  <div
                    role="button"
                    aria-hidden="true"
                    className={tw(`w-full md:w-1/3 p-8 cursor-pointer`)}
                    onClick={() => goToBlogDetails(`/blog/devops`)}
                  >
                    <img className={tw(`h-auto w-100 mb-4`)} src="/images/blog/devops.jpg" alt="logo" />
                    <div className={tw(`flex items-center mb-6`)}>
                      <div className={tw(`text-l hover:underline`)}>Avoid obstacles between IT teams with DevOps</div>
                    </div>
                  </div>

                  <div
                    role="button"
                    aria-hidden="true"
                    className={tw(`w-full md:w-1/3 p-8 cursor-pointer`)}
                    onClick={() => goToBlogDetails(`/blog/virtual-wallets`)}
                  >
                    <img className={tw(`h-auto w-100 mb-4`)} src="/images/blog/wallet.jpeg" alt="logo" />
                    <div className={tw(`flex items-center mb-6`)}>
                      <div className={tw(`text-l hover:underline`)}>Virtual wallets: the key to B2B commerce</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
