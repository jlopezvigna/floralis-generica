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
  background: url('/images/blog/devops.jpg');
  height: 300px;
  background-position: center;
  background-size: cover;
`;

const banner = css`
  background: url('/images/blog/devops-banner.png');
  background-size: contain;
  height: 600px;
  background-position-x: center;
  background-repeat: no-repeat;
`;

export default function Devops() {
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
        title="Floralis Generica | Avoid obstacles between IT teams with DevOps"
        description="DevOps represents a philosophy based on automation and collaboration with
          the main objective of delivering high business value.
          This process involves legacy infrastructures with newer ones built in the cloud."
        openGraph={{
          title: `Avoid obstacles between IT teams with DevOps`,
          // eslint-disable-next-line max-len
          description: `DevOps represents a philosophy based on automation and collaboration with the main objective of delivering high business value. This process involves legacy infrastructures with newer ones built in the cloud.`,
          url: `https://floralisgenerica.com/blog/devops/`,
        }}
      />
      <Element name="header-section" />

      <div className={tw(`min-h-screen flex flex-col overflow-auto`)}>
        <Navigation scrollDirection={hideOnScroll.direction} top={hideOnScroll.top} />

        <div className={tw(`my-20`)}>
          <div className={tw(`m-12 text-center`)}>
            <h1 className={tw(`text-5xl lg:text-7xl font-bold tracking-tight text-secondary`)}>
              Avoid obstacles between IT teams with DevOps
            </h1>
          </div>

          <main>
            <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
              <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
                <div className={tw(img)} />

                <div className={tw(`my-6`)}>
                  <p className={tw(`text-l my-4`)}>
                    DevOps represents a philosophy based on automation and collaboration with the main objective of
                    delivering high business value. This process involves legacy infrastructures with newer ones built
                    in the cloud.
                  </p>
                  <p className={tw(`text-l my-4`)}>
                    Below we will tell you what this practice specifically consists of and what are the benefits of
                    implementing it in your technology team.
                  </p>
                  <h3 className={tw(`text-xl font-bold my-4`)}>What is DevOps?</h3>
                  <p className={tw(`text-l my-4`)}>
                    DevOps is a set of practices that bring together software development and IT operations. Its goal is
                    to speed up the software development lifecycle and provide continuous high-quality delivery.
                  </p>
                  <p className={tw(`text-l my-4`)}>
                    It is possible to achieve this goal by optimizing response times through agile tools and
                    methodologies. The point is to improve the creation process from when an idea is born until it goes
                    from development to implementation. In this way, the value for the customer and the users increases
                    remarkably because the delivery becomes faster without losing quality.
                  </p>
                  <h3 className={tw(`text-xl font-bold my-4`)}>The advantages of applying DevOps in your company</h3>
                  <div className={tw(`my-4`)}>
                    <div className={tw(banner)} />
                  </div>
                  <p className={tw(`text-l my-4`)}>
                    This framework brings multiple benefits to those teams that implement it.
                  </p>
                  <h3 className={tw(`text-xl font-bold my-4`)}>What are agile methodologies?</h3>

                  <p className={tw(`text-l my-4`)}>
                    Agile methodologies allow you to quickly adapt the development of an application as changes and new
                    needs arise. In addition, they encourage teamwork, responsibility and self-organization. Thus, the
                    development team can base its work on the needs of the client in order to build a custom
                    application.
                  </p>
                  <p className={tw(`text-l my-4`)}>
                    All those companies that want to make a difference in their sector must master them, as they will
                    end up being used in most companies due to their numerous advantages.
                  </p>
                  <p className={tw(`text-l my-4`)}>
                    These methodologies focus much more on people and their skills than on processes or tools. Below we
                    will detail which are the best known.
                  </p>
                  <p className={tw(`text-l my-1 font-bold`)}>Kanban</p>
                  <p className={tw(`text-l mb-4`)}>
                    The {` `}
                    <Link href="https://www.wrike.com/kanban-guide/what-is-kanban/" target="_blank">
                      Kanban
                    </Link>
                    {` `} method consists of organizing tasks in the form of visual cards. In technology areas, it
                    becomes an extremely useful resource, since it helps improve workflow.
                  </p>
                  <p className={tw(`text-l my-4`)}>
                    The progress of the development process is made easily visible from the possibility of identifying
                    priorities and ordering them using labels. In this way it is very easy to know the status of each
                    task, detecting if it is in progress or stopped at a bottleneck.
                  </p>

                  <p className={tw(`text-l my-1 font-bold`)}>Scrum</p>
                  <p className={tw(`text-l mb-4`)}>
                    Scrum is vital to the DevOps implementation because it promotes collaborative work. Software teams
                    find this method a great enabler to accelerate development projects and their corresponding quality
                    controls.
                  </p>
                  <p className={tw(`text-l my-4`)}>
                    Through sprint planning, developers can establish and improve delivery times.
                  </p>

                  <p className={tw(`text-l my-1 font-bold`)}>Lean Management</p>
                  <p className={tw(`text-l mb-4`)}>
                    It is a model whose main objective is to respond to market changes in order to meet consumer demands
                    using the least amount of resources possible.
                  </p>
                  <p className={tw(`text-l my-4`)}>
                    From its implementation it is possible to save on production and distribution costs. It also
                    increases the productivity of teams and allows business activity to be adapted to the needs of
                    consumers.
                  </p>

                  <p className={tw(`text-l my-1 font-bold`)}>Extreme Programming</p>
                  <p className={tw(`text-l mb-4`)}>
                    It is a methodology focused on communication, feedback and reuse of the developed code. Its purpose
                    is to manage projects with flexibility, control and efficiency.
                  </p>
                  <p className={tw(`text-l my-4`)}>
                    The combination of this framework with Scrum provides great control over development and a more
                    effective implementation.
                  </p>

                  <h3 className={tw(`text-xl font-bold my-4`)}>DevOps: our added value</h3>
                  <p className={tw(`text-l my-4`)}>
                    At Floralis we consider the DevOps methodology as a way to address the culture, design and
                    automation of platforms in order to offer services and products with high added value.
                  </p>
                  <p className={tw(`text-l my-4`)}>
                    If you need help to optimize the development processes of your IT team, we invite you to{` `}
                    <Link href="https://floralisgenerica.com/" target="_blank">
                      contact us
                    </Link>
                    . We will respond as soon as possible to tell you how our experts can become the support your
                    company needs.
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
