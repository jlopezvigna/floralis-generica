import '@/styles/global.css';
import '@fontsource/inter';
import { AppProps } from 'next/app';
import { setup } from 'twind';
import Head from 'next/head';
import twindConfig from '../twind.config';

if (typeof window !== `undefined`) {
  setup(twindConfig);
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

        <script>
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
        </script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
