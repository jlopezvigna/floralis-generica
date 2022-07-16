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
  background: url('/images/blog/automation.jpg');
  height: 300px;
  background-position: center;
  background-size: cover;
`;

const banner = css`
  background: url('/images/blog/automation-banner.png');
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

export default function Automation() {
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
        title="Floralis Generica | Automation, a fundamental tool for your Company."
        description="As we already know, automating the tasks of an organization consists of using 
        technology to carry out certain operations without the need for human assistance."
        openGraph={{
          title: `Automation, a fundamental tool for your Company.`,
          description: `As we already know, automating the tasks of an organization consists of using 
          technology to carry out certain operations without the need for human assistance.`,
          url: `https://floralisgenerica.com/blog/Automation-a-fundamental-tool-for-your-Company/`,
        }}
      />
      <Element name="header-section" />

      <div className={tw(`min-h-screen flex flex-col overflow-auto`)}>
        <Navigation scrollDirection={hideOnScroll.direction} top={hideOnScroll.top} />

        <div className={tw(`my-20`)}>
          <div className={tw(`m-12 text-center`)}>
            <h1 className={tw(`text-5xl lg:text-7xl font-bold tracking-tight text-secondary`)}>
              Automation, a fundamental tool for your Company.
            </h1>
          </div>

          <main>
            <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
              <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
                <div className={tw(img)} />

                <div className={tw(`my-6`)}>
                  <p className={tw(`text-l my-4`)}>
                    As we already know, automating the tasks of an organization consists of using technology to carry
                    out certain operations without the need for human assistance. It can be implemented in any sector
                    where daily tasks are repetitive.
                  </p>
                  <p className={tw(`text-l my-4`)}>
                    The digital transformation allowed us to move towards an automatic approach. Nowadays managing,
                    changing and adapting all the processes of your company is a market requirement. In addition to
                    simplifying your daily tasks, you will have more time and energy to focus on continuous innovation.
                  </p>
                  <p className={tw(`text-l my-4`)}>
                    Do you know the advantages of having these processes in your organization? Continue reading the
                    article to know more.
                  </p>
                  <h3 className={tw(`text-xl font-bold my-4`)}>Automation in your company</h3>
                  <p className={tw(`text-l my-4`)}>
                    Automation can be embedded and applied to network, infrastructure, cloud readiness, standard
                    operating environments (SOEs), and even application deployment and configuration management.
                  </p>

                  <div className={tw(`my-4`)}>
                    <div className={tw(banner)} />
                  </div>

                  <p className={tw(`text-l my-4`)}>
                    Automation applications and functions can include:
                    <ul className={tw(ul)}>
                      <li>Technologies to develop, for example: containers.</li>
                      <li>Work methodologies, such as DevOps.</li>
                      <li>
                        Areas of work: cloud, edge computing, security, testing and monitoring or alerts are some of the
                        examples where automation can be an invaluable asset.
                      </li>
                    </ul>
                  </p>

                  <h3 className={tw(`text-xl font-bold my-4`)}>Business automation alongside digital transformation</h3>

                  <p className={tw(`text-l my-4`)}>
                    Business automation is about coordinating business process management (BPM) and business rules
                    management (BRM) with application development. This is how it is possible to satisfy the changing
                    demand of the market and bet on covering internal needs.
                  </p>
                  <p className={tw(`text-l my-4`)}>
                    Digital transformation is the key strategy to succeed in today&apos;s market environment and
                    requires partnership between business and IT leaders.
                  </p>
                  <p className={tw(`text-l my-1 font-bold`)}>Business Process Management (BPM)</p>
                  <p className={tw(`text-l my-4`)}>
                    A business process is a set of activities that help a business achieve a specific goal. On the other
                    hand, BPM is the practice with which processes are modeled, analyzed and optimized in an integral
                    way. It applies to constant or predictable tasks and processes, as well as those that are often
                    repeated.
                  </p>
                  <p className={tw(`text-l my-4`)}>
                    BPM will allow you to evaluate your business processes to find ways to improve efficiency as well as
                    reduce costs and errors.
                  </p>

                  <p className={tw(`text-l my-1 font-bold`)}>Business Rules Management (BRM)</p>

                  <p className={tw(`text-l my-4`)}>
                    Mature and efficient companies and organizations depend on Business Rules, a series of policies,
                    definitions, restrictions and regulations necessary to achieve their objectives. They work when
                    applied to certain objects of the business process, so a BRMS is the system that allows them to be
                    centralized and managed.
                  </p>
                  <p className={tw(`text-l my-4`)}>
                    It is a business management platform that makes it possible to effectively express organizational
                    logic through a business rules engine. Match all the data with these business rules to ultimately
                    feed a decision into business processes or systems.
                  </p>

                  <h3 className={tw(`text-xl font-bold my-4`)}>Advantages of automation in your company</h3>

                  <p className={tw(`text-l mb-4`)}>
                    Applying automated processes gives rise to a series of advantages that enhance your business. Learn
                    about the benefits that an automation approach can bring to your company.
                  </p>
                  <p className={tw(`text-l my-1 font-bold`)}>Save time and money</p>
                  <p className={tw(`text-l my-4`)}>
                    Reduces time and specialized personnel in the execution chain. Specialists define automated
                    processes. However, in monitoring them, we can count on a less specialized profile to carry it out.
                    All this results in cost and time savings compared to the traditional process and the elimination of
                    interruptions due to errors or changes in the process.
                  </p>
                  <p className={tw(`text-l my-1 font-bold`)}>Build trust with operational processes</p>
                  <p className={tw(`text-l my-4`)}>
                    It ensures that tasks are not forgotten or executed out of sequence, that the data entered is
                    correct. In addition, it ensures that any necessary processing is carried out.
                  </p>

                  <p className={tw(`text-l my-1 font-bold`)}>Facilitates risk mitigation and simplifies control</p>
                  <p className={tw(`text-l mb-4`)}>
                    Automation improves integration into data communication networks. This allows the reaction time to
                    changes or alterations to be reduced, reducing their impact, as well as making more precise
                    decisions.
                  </p>
                  <p className={tw(`text-l my-1 font-bold`)}>Improve the experience of customers and end users</p>
                  <p className={tw(`text-l my-4`)}>
                    Customer service is becoming more and more automated. Today it is very common to see chatbots,
                    demand generation processes or post-sale services covered under this process. This increases the
                    added value, while systematically reducing costs.
                  </p>

                  <p className={tw(`text-l my-1 font-bold`)}>Increase productivity</p>
                  <p className={tw(`text-l mb-4`)}>
                    Another benefit of automation is that it increases competitiveness in the market. Thanks to this new
                    paradigm, it is possible to provide a more efficient response to business needs. This is achieved
                    from the IT area with the automation in the deployment of environments, the updating of applications
                    and infrastructure monitoring. .
                  </p>

                  <h3 className={tw(`text-xl font-bold my-4`)}>Disadvantage of automation in your company</h3>
                  <p className={tw(`text-l my-4`)}>
                    One of the main problems is the cost. Designing an effective automation solution costs time and
                    energy. Therefore, having an internal team dedicated to automation could be cumbersome.
                  </p>
                  <p className={tw(`text-l my-4`)}>
                    On the other hand, the scope may be affected. For all implementations there are limits or spaces
                    where it is not enough to automate. The effectiveness and safety of automation depend on how it is
                    implemented.
                  </p>
                  <p className={tw(`text-l my-4`)}>
                    Even automation can be tied to planned obsolescence. Once the automated process is put into
                    operation, it is likely that the applied technology will not meet the objectives or will be obsolete
                    in the short term.
                  </p>
                  <h3 className={tw(`text-xl font-bold my-4`)}>Automation at your fingertips</h3>

                  <p className={tw(`text-l my-4`)}>
                    How to ensure that the planned obsolescence, the cost, and the scope of your project do not get in
                    the way of your automation strategy? With a team of experts by your side.
                  </p>
                  <p className={tw(`text-l my-4`)}>
                    We can advise you on this paradigm shift to make your organization more efficient. Floralis will not
                    only meet the basic needs, but will try to understand your business thoroughly to develop the
                    solution that best benefits your company. Our solutions, services, and training programs give you
                    the control you need to automate your business, focusing on innovation.
                  </p>
                  <p className={tw(`text-l my-4`)}>
                    The large open source community collaborates on the design of automation technologies. Design and
                    implement automations generating reliability and security for all those who bet on digital
                    transformation hand in hand with Floralis.{` `}
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
