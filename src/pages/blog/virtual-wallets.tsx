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
  background: url('/images/blog/wallet.jpeg');
  height: 300px;
  background-position: center;
  background-size: cover;
`;

const ul = css`
  list-style: circle;
  margin: 0 24px;
  li {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;

export default function VirtualWallets() {
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
          title="Floralis Generica | Virtual wallets: the key to B2B commerce"
          description="The use of virtual wallets has grown exponentially among consumers.
          They allow multiple transactions from the cell phone."
        />
        <div className={tw(`my-20`)}>
          <div className={tw(`m-12 text-center`)}>
            <p className={tw(`text-5xl lg:text-7xl font-bold tracking-tight text-secondary`)}>
              Virtual wallets: the key to B2B commerce
            </p>
          </div>

          <main>
            <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
              <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
                <div className={tw(img)} />

                <div className={tw(`my-6`)}>
                  <p className={tw(`text-l my-4`)}>
                    As we know, the use of virtual wallets has grown exponentially among consumers in recent years. They
                    are chosen by a very high number of users, since they allow them to carry out multiple transactions
                    on a daily basis, from the simplest, such as paying for a supermarket purchase, to the most complex,
                    such as investing in a mutual fund.
                  </p>
                  <p className={tw(`text-l my-4`)}>
                    Now, it&apos;s time to analyze: How can a virtual wallet grow my business? If you are looking to
                    generate higher profits in your company, keep reading this blog.
                  </p>
                  <h3 className={tw(`text-xl font-bold my-4`)}>Greater financial inclusion</h3>
                  <p className={tw(`text-l my-4`)}>
                    Currently, progress towards financial inclusion in the world has grown considerably. Without a
                    doubt, the offer of mobile financial services has been the technology industry&apos;s contribution
                    to this progress.
                  </p>
                  <p className={tw(`text-l my-4`)}>
                    Wallets are an excellent cross-platform proposition. It has become an ideal option for the use of
                    mobile money, both for users with bank accounts and for those without access to traditional
                    financial services.
                  </p>
                  <p className={tw(`text-l my-4`)}>
                    This situation is repeated in B2B commerce, which is why virtual wallets will help your unbanked
                    customers to access financial services that they would otherwise not have access to.
                  </p>
                  <h3 className={tw(`text-xl font-bold my-4`)}>
                    What are the advantages of including a virtual wallet in your company?
                  </h3>
                  <p className={tw(`text-l my-4`)}>
                    Your business system will benefit from the incorporation of virtual wallets, you will be able to
                    access different benefits. For example: receive payments through the application, without
                    maintenance costs, opening or sales commissions, in addition to having the money immediately. In
                    other words, it is possible to access your profit immediately without the need to wait days for your
                    payments to be released.
                  </p>
                  <p className={tw(`text-l my-4`)}>
                    If the above was not enough for you to decide to get a virtual wallet in your company, continue
                    reading and find out more benefits:
                  </p>
                  <p className={tw(`text-l my-4`)}>
                    <ul className={tw(ul)}>
                      <li>
                        Reduce costs: lowers the cost of customer acquisition and transaction costs. Use simple rules
                        for electronic money accounts.
                      </li>
                      <li>
                        Increase customer satisfaction: improve long-term relationships with your customers, through
                        seamless digital experiences with excellent user experience.
                      </li>
                      <li>
                        Accelerating financial inclusion: extends financial services to the base of the pyramid through
                        mobile devices.
                      </li>
                      <li>Generate new income: monetize new business models through Virtual Wallet platforms.</li>
                      <li>
                        Increase customer base: exponential growth of your customer base, without investing in expensive
                        branches and ATM infrastructure.
                      </li>
                    </ul>
                  </p>
                  <h3 className={tw(`text-xl font-bold my-4`)}>Your customers, your brand ambassadors</h3>
                  We want to emphasize that virtual wallets are an effective tool to achieve greater customer loyalty.
                  Since, through the facilities provided, it is possible to strengthen the commercial relationship. In
                  this way, your customers will become ambassadors of your brand, helping to increase your
                  company&apos;s income. Remember that usually a returning customer spends a higher average amount of
                  money on products and services, compared to a new one.
                  <h3 className={tw(`text-xl font-bold my-4`)}>
                    What should you take into account when obtaining a virtual wallet for your company?
                  </h3>
                  <p className={tw(`text-l my-4`)}>
                    The fundamental competitive advantages consist of the agility that virtual wallets provide compared
                    to traditional systems and the improvement of the customer experience.
                  </p>
                  <p className={tw(`text-l my-4`)}>
                    <Link href="https://builtin.com/fintech" target="_blank">
                      Fintech
                    </Link>
                    {` `}
                    companies are revolutionizing the user experience in financial services, with greater
                    customer-centricity and the use of new technologies. Through their technological innovations, these
                    types of companies are optimizing the customer experience regarding financial services. They use
                    customer data to offer personalized solutions and, at the same time, fast digital services available
                    24/7 through any type of device.
                  </p>
                  <p className={tw(`text-l my-4`)}>
                    The chosen platforms must be fast and reliable enough not to lose time or money with terms that are
                    too long or with useless conditions.
                  </p>
                  <p className={tw(`text-l my-4`)}>
                    Similarly, it is extremely necessary that they have the development of security functions, such as
                    fingerprint scanning and fraud protection solutions.
                  </p>
                  <h3 className={tw(`text-xl font-bold my-4`)}>Conclusions</h3>
                  <p className={tw(`text-l my-4`)}>
                    Virtual wallets are here to stay. This is why, if you haven&apos;t already done so, it is essential
                    that you start evaluating incorporating them into your company. Make sure you have a business
                    partner who understands your company, supports you and offers you a personalized solution.
                  </p>
                  <p className={tw(`text-l my-4`)}>
                    At Floralis we create cross-platform and native applications (iOS, Android, Web) with superior User
                    Interface and Experience (UI/UX) designs, social network functionality (Whatsapp, Facebook
                    Messenger) and automatic notifications for transactions.
                  </p>
                  <p className={tw(`text-l my-4`)}>
                    In addition, we have the possibility for you to integrate your legacy systems with our wallet
                    through standard{` `}
                    <Link href="https://aws.amazon.com/what-is/api/?nc1=h_ls" target="_blank">
                      APIs
                    </Link>
                    . This automatically generates new, easy and fast solutions, eliminating the need for complicated
                    and expensive unreliable integration platforms. Integration with our wallet is simple, it is done by
                    web services, and it has our support and advice.{` `}
                    <Link href="https://floralisgenerica.com/" target="_blank">
                      Contact us!
                    </Link>
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
