import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { AppProvider } from '../context';
import theme from '../theme';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </AppProvider>
  );
}

export default MyApp;
