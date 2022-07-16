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
  background: url('/images/blog/itsm.jpg');
  height: 300px;
  background-position: center;
  background-size: cover;
`;

const banner = css`
  background: url('/images/blog/itsm-banner.png');
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

export default function ItsmStrategy() {
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
        title="Floralis Generica | Why implement an ITSM strategy?"
        description="The management of business services in technology has become a very 
        important factor that provides differential value both to the organizations that 
        implement it and to their direct consumers"
        openGraph={{
          title: `Why implement an ITSM strategy?`,
          description: `The management of business services in technology has become a very 
          important factor that provides differential value both to the organizations that 
          implement it and to their direct consumers`,
          url: `https://floralisgenerica.com/blog/why-implement-an-ITSM-strategy/`,
        }}
      />
      <Element name="header-section" />

      <div className={tw(`min-h-screen flex flex-col overflow-auto`)}>
        <Navigation scrollDirection={hideOnScroll.direction} top={hideOnScroll.top} />

        <div className={tw(`my-20`)}>
          <div className={tw(`m-12 text-center`)}>
            <h1 className={tw(`text-5xl lg:text-7xl font-bold tracking-tight text-secondary`)}>
              Why implement an ITSM strategy?
            </h1>
          </div>

          <main>
            <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
              <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
                <div className={tw(img)} />

                <div className={tw(`my-6`)}>
                  <p className={tw(`text-l my-4`)}>
                    The application of ITSM through automation tools makes it possible to consolidate and ensure that
                    this optimization of processes is reflected in the level of customer satisfaction. In this way, the
                    management of business services in technology has become a very important factor that provides
                    differential value both to the organizations that implement it and to their direct consumers.
                  </p>
                  <p className={tw(`text-l my-4`)}>
                    If you want to know what it is and how it can help boost your organization, we invite you to
                    continue reading.
                  </p>
                  <h3 className={tw(`text-xl font-bold my-4`)}>What is ITSM?</h3>
                  <p className={tw(`text-l my-4`)}>
                    The acronym ITSM refers to Information Technology Service Management. Its main objective is to
                    improve the quality of these services to ensure that they meet the needs of the business and,
                    consequently, of its customers.
                  </p>

                  <p className={tw(`text-l my-4`)}>
                    This approach includes all those activities and processes that support a service during its life
                    cycle, that is, service management, change management, incident management, asset management and
                    knowledge management.
                  </p>

                  <div className={tw(`my-4`)}>
                    <div className={tw(banner)} />
                  </div>

                  <p className={tw(`text-l my-4`)}>
                    To reinforce the importance of ITSM implementation in your company, we review the most relevant
                    benefits in the following points:
                    <ul className={tw(ul)}>
                      <li>
                        Increases efficiency by improving workflows and valuing the resources that the organization has.
                      </li>
                      <li>Improves the productivity of work teams and the services offered.</li>
                      <li>Reduce costs thanks to process automation.</li>
                      <li>
                        It reduces risks because it allows planning, testing and maintaining good communication between
                        all the collaborators involved.
                      </li>
                      <li>
                        Optimize the customer experience: With a productive team and services running smoothly, customer
                        satisfaction increases considerably.
                      </li>
                      <li>
                        It provides transparency, since both management and employees can have better access to the
                        progress of each project.
                      </li>
                    </ul>
                  </p>

                  <h3 className={tw(`text-xl font-bold my-4`)}>
                    Recommendations to be successful in the implementation of ITSM
                  </h3>

                  <p className={tw(`text-l my-1 font-bold`)}>Do it an audit</p>
                  <p className={tw(`text-l my-4`)}>
                    Before applying a strategy or starting to use an ITSM tool it is necessary to audit the current
                    operations of the company in order to identify where to start and what the objectives of the
                    implementation will be.
                  </p>

                  <p className={tw(`text-l my-1 font-bold`)}>Choose an ITSM tool</p>
                  <p className={tw(`text-l my-4`)}>
                    Choose a software that suits the needs of your company, as well as the work team and its clients. To
                    make a good decision, you can consider whether the tool facilitates the following aspects:
                    <ul className={tw(ul)}>
                      <li>Improve the customer experience.</li>
                      <li>Automation template options.</li>
                      <li>Integration with other solutions.</li>
                      <li>Real-time metrics.</li>
                      <li>Technical support.</li>
                    </ul>
                  </p>

                  <p className={tw(`text-l my-1 font-bold`)}>Create workflows</p>
                  <p className={tw(`text-l my-4`)}>
                    Building workflows from a service perspective is essential to automate tasks but also for the
                    purpose of improving the customer experience. To achieve this, it is important to train employees in
                    ITSM and communicate the new modality to all parties involved in the process.
                  </p>

                  <h3 className={tw(`text-xl font-bold my-4`)}>
                    You are one step away from implementing ITSM in your organization!
                  </h3>
                  <p className={tw(`text-l my-4`)}>
                    At Floralis we stand out for our ability to act efficiently and quickly, making the knowledge and
                    extensive experience of our support team available.
                  </p>
                  <p className={tw(`text-l my-4`)}>
                    If you are looking for ITSM solutions to enhance your business processes, we invite you to {` `}
                    <Link href="https://floralisgenerica.com/" target="_blank">
                      Contact us!
                    </Link>
                    {` `}
                    We await your message to answer you as soon as possible.
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
