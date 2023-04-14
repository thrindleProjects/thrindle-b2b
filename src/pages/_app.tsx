import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { SessionProvider } from 'next-auth/react';
import { ReactElement, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import { persistor, store } from '@/store/store';

import { toastOptions } from '@/config/toastConfig';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const router = useRouter();

  const getLayout = Component.getLayout ?? ((page) => <>{page}</>);
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Head>
            <link rel='shortcut icon' href='/assets/svg/favicon.svg' />
          </Head>
          {getLayout(<Component {...pageProps} key={router.pathname} />)}
          <Toaster position='top-right' toastOptions={toastOptions} />
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
