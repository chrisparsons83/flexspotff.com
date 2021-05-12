import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = (): JSX.Element => {
  return (
    <Html>
      <Head />
      <body className="text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
