/* eslint-disable react/jsx-props-no-spreading */
import Router, { AppProps } from 'next/dist/next-server/lib/router/router';
import { GlobalStyles } from 'twin.macro';
import { Global } from '@emotion/react';
import NProgress from 'nprogress';
import { Toaster } from 'react-hot-toast';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useRef } from 'react';
import stylesBase from '../styles/styleBase';
import '../styles/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  const queryClientRef = useRef<null | QueryClient>(null);
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <GlobalStyles />
      <Global styles={stylesBase} />
      <Component {...pageProps} />
      <Toaster />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
    </QueryClientProvider>
  );
}

export default MyApp;
