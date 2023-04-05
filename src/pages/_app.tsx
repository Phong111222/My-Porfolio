import Layout from '@/components/shared/layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <style jsx global>
        {`
          body {
            background: #F4E8D4};
          }
        `}
      </style>
    </>
  );
}
