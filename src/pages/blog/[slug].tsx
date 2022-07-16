import Footer from '@/components/footer';
import Navigation from '@/components/navigation';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import md from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useState } from 'react';
import { Element } from 'react-scroll';
import { tw } from 'twind';
import { css } from 'twind/css';

export async function getStaticPaths() {
  const files = fs.readdirSync(`posts`);
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(`.md`, ``),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: { params: { slug: any } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, `utf-8`);
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

const layoutFormat = css`
  h2 {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;
    color: rgba(51, 73, 85);
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 1rem;
    font-weight: 700;
    color: rgba(51, 73, 85);
  }
  p {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  ul {
    padding-left: 2em;
    margin-bottom: 16px;
    list-style: circle;
  }
  li + li {
    margin-top: 0.25em;
  }
  a {
    color: rgb(10, 102, 194);
  }
  a:hover {
    text-decoration: underline;
  }
  .banner {
    margin: 0 auto;
  }
`;

const socialImage = css`
  height: 300px;
  width: 100%;
  display: block;
  div {
    display: block !important;
    height: 100% !important;
  }
  img {
    object-fit: cover;
  }
`;

export default function BlogPage({ frontmatter, content }: { frontmatter: any; content: any }) {
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
        title={`Floralis Generica | ${frontmatter.metaTitle}`}
        description={frontmatter.metaDesc}
        openGraph={{
          title: frontmatter.metaTitle,
          description: frontmatter.metaDesc,
          url: `https://floralisgenerica.com/blog/${frontmatter.url}/`,
        }}
      />
      <Element name="header-section" />

      <div className={tw(`min-h-screen flex flex-col overflow-auto`)}>
        <Navigation scrollDirection={hideOnScroll.direction} top={hideOnScroll.top} />

        <div className={tw(`my-20`)}>
          <div className={tw(`m-12 text-center`)}>
            <h1 className={tw(`text-5xl lg:text-7xl font-bold tracking-tight text-secondary`)}>{frontmatter.title}</h1>
          </div>

          <main>
            <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
              <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
                <div className={tw(socialImage)}>
                  <Image src={frontmatter.socialImage} width="100%" height="100%" alt="Brand logo" />
                </div>

                <div className={tw(`my-6`)}>
                  <div
                    className={tw(layoutFormat)}
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: md().use(markdownItAttrs).render(content) }}
                  />
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
