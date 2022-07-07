import Footer from '@/components/footer';
import Link from '@/components/link';
import Navigation from '@/components/navigation';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useState } from 'react';
import { Element } from 'react-scroll';
import { tw } from 'twind';
import { css } from 'twind/css';

const img = css`
  background: url('/images/blog/regulations-in-virtual-wallets.jpg');
  height: 300px;
  background-position: center;
  background-size: cover;
`;

const banner = css`
  background: url('/images/blog/regulations-in-virtual-wallets-banner.png');
  background-size: contain;
  height: 600px;
  background-position-x: center;
  background-repeat: no-repeat;
`;

const ul = css`
  list-style: circle;
  margin: 0 24px;
  li {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;

export default function RegulationsInVirtualWallets() {
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

      <NextSeo
        title="Floralis Generica | Regulations in virtual wallets"
        description="The blog will tell you about the regulations in force 
        in the region and how we operate in Floralis to guarantee an appropriate development"
        openGraph={{
          title: `Regulations in virtual wallets`,
          description: `The blog will tell you about the regulations in force 
          in the region and how we operate in Floralis to guarantee an appropriate development`,
          url: `https://floralisgenerica.com/blog/regulations-in-virtual_wallets/`,
        }}
      />
      <Element name="header-section" />

      <div className={tw(`min-h-screen flex flex-col overflow-auto`)}>
        <Navigation scrollDirection={hideOnScroll.direction} top={hideOnScroll.top} />

        <div className={tw(`my-20`)}>
          <div className={tw(`m-12 text-center`)}>
            <h1 className={tw(`text-5xl lg:text-7xl font-bold tracking-tight text-secondary`)}>
              Regulations in virtual wallets
            </h1>
          </div>

          <main>
            <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
              <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
                <div className={tw(img)} />

                <div className={tw(`my-6`)}>
                  <h3 className={tw(`text-xl font-bold my-4`)}>Considerations for your choice and development</h3>
                  <p className={tw(`text-l my-4`)}>
                    In recent years we have witnessed an accelerated digital transformation where e-commerce is gaining
                    more and more strength. With these changes, of course, also comes the need to stay current in order
                    to continue to improve the customer experience. In this sense, virtual wallets have established
                    themselves as an indispensable solution for companies that are immersed in the {` `}
                    <Link href="https://floralisgenerica.com/blog/virtual-wallets/" target="_blank">
                      B2B sector
                    </Link>
                    {` `} and that seek to increase their profits.
                  </p>
                  <p className={tw(`text-l my-4`)}>
                    Although in this blog we have already explored the topic of digital wallets, this time we will tell
                    you about the regulations in force in the region and how we operate in Floralis to guarantee an
                    appropriate development.
                  </p>

                  <h3 className={tw(`text-xl font-bold my-4`)}>Why is regulation so important?</h3>
                  <p className={tw(`text-l my-4`)}>
                    We can find a lot of information online regarding the benefits virtual wallets offer to end
                    consumers, but how relevant is it to the <span className={tw(`font-bold`)}>business case</span>?
                  </p>

                  <p className={tw(`text-l my-4`)}>
                    On many occasions, before thinking about coding or developing, we have to identify the needs of the
                    business and how to make it compatible with the standards that apply to this type of solution.
                  </p>

                  <p className={tw(`text-l my-4`)}>
                    For this it is necessary to have a team of legal, accounting and business experts who articulate a
                    solution that benefits the participating companies. The main objective of this team is to make the
                    best decisions regarding the legal figure, the registration to the essential registries and to
                    define the functionalities that will be offered to the participants as a consequence.
                  </p>

                  <p className={tw(`text-l my-1 font-bold`)}>They are secure resources</p>
                  <p className={tw(`text-l my-4`)}>
                    The information stored within these wallets is encrypted, that is, they guarantee the protection of
                    the data of both the company and the consumers. This is achieved through the use of random payment
                    codes that are not repeated. Even most applications today ask users for their biometric data to
                    strengthen security.
                  </p>
                  <p className={tw(`text-l my-4`)}>
                    Likewise, if the developments comply with the regulations that we will detail later in this article,
                    they collaborate with the prevention of possible fraud. That is why it is so important to hire
                    development teams that are up to date with the latest news on current regulations.
                  </p>

                  <p className={tw(`text-l my-1 font-bold`)}>They save time and provide transparency</p>
                  <p className={tw(`text-l my-4`)}>
                    Payments through virtual wallets not only help save time for users, but also for companies that
                    manage collections. Automating these actions through software is what makes it possible.
                  </p>
                  <p className={tw(`text-l my-4`)}>
                    In this way, the administration of transactions becomes much simpler and more transparent, since it
                    allows them to be managed more quickly and efficiently.
                  </p>

                  <p className={tw(`text-l my-1 font-bold`)}>Boost customer loyalty</p>
                  <p className={tw(`text-l my-4`)}>
                    Today consumers are used to receiving benefits from the use of virtual wallets. Creating loyalty
                    programs through a system of points that are obtained as a reward based on the number of
                    transactions is very useful to encourage their use.
                  </p>

                  <h3 className={tw(`text-xl font-bold my-4`)}>What obligations must virtual wallets fulfill?</h3>

                  <div className={tw(`my-4`)}>
                    <div className={tw(banner)} />
                  </div>

                  <p className={tw(`text-l my-4`)}>
                    For example, in some regions, payment service providers (PSPs) must comply with the following
                    regulations to reduce the risk of fraud:
                    <ul className={tw(ul)}>
                      <li>Verify the identity of users who request the opening of an account.</li>
                      <li>
                        Associate the virtual wallets to accounts or payment methods that match the owner&apos;s data.
                      </li>
                      <li>Offer care for fraud claims.</li>
                      <li>Use tools to identify potentially suspicious patterns.</li>
                      <li>End-to-end encryption of transaction information.</li>
                    </ul>
                  </p>
                  <p className={tw(`text-l my-4`)}>
                    This updated regulation is just a snippet that is focused on protecting consumers&apos; confidential
                    information. However, there are many more aspects to take into account when creating a financial
                    development of this type.
                  </p>

                  <h3 className={tw(`text-xl font-bold my-4`)}>
                    At Floralis we know the current regulations and we take care of our clients
                  </h3>

                  <p className={tw(`text-l my-4`)}>
                    We stay updated on the regulations applied in the region to create efficient developments. Do you
                    need a virtual wallet for your company? {` `}
                    <Link href="https://floralisgenerica.com/" target="_blank">
                      Contact us!
                    </Link>
                  </p>
                  <p className={tw(`text-l my-4`)}>
                    We have a team of developers with extensive experience in creating virtual wallets. Our clients
                    trust our services because we work with trust and transparency.
                  </p>
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
