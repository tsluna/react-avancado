import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from 'styles/global';
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon " href="/img/icon-512.png" />
        <link rel="apple-touch-icon " href="/img/icon-192.png" />
        <meta
          name="description"
          content="A Simple project starter to work with TypeScript, React, NextJs and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;