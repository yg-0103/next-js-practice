import { AppProps } from 'next/dist/next-server/lib/router/router';
import React from 'react';
import GlobalStyle from 'styles/global';
import Layout from 'Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
