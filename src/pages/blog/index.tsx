import Footer from '@/components/footer';
import Navigation from '@/components/navigation';
import Title from '@/components/title';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import fs from 'fs';
import matter from 'gray-matter';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Element } from 'react-scroll';
import { tw } from 'twind';

export async function getStaticProps() {
  const files = fs.readdirSync(`posts`);

  const posts = files.map((fileName) => {
    const slug = fileName.replace(`.md`, ``);
    const readFile = fs.readFileSync(`posts/${fileName}`, `utf-8`);
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function BlogList({ posts }: { posts: [any] }) {
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
                  {posts
                    .sort((a, b) => {
                      const date1 = new Date(b.frontmatter.date);
                      const date2 = new Date(a.frontmatter.date);
                      return date1.getTime() - date2.getTime();
                    })
                    .map(({ slug, frontmatter }) => (
                      <div
                        role="button"
                        aria-hidden="true"
                        className={tw(`w-full md:w-1/3 p-8 cursor-pointer`)}
                        onClick={() => goToBlogDetails(`/blog/${slug}`)}
                      >
                        <img
                          className={tw(`h-auto w-100 mb-4`)}
                          src={frontmatter.storyImage}
                          alt="regulations-in-virtual-wallets"
                        />
                        <div className={tw(`flex items-center mb-6`)}>
                          <div className={tw(`text-l hover:underline`)}>{frontmatter.title}</div>
                        </div>
                      </div>
                    ))}
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
