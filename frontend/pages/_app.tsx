import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/dist/next-server/lib/router/router';

import '../components/styles/global.css';
import Page from '../components/page';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
};

export default MyApp;
