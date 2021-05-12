import { PropsWithChildren, ReactNode } from 'react';

import Header from './header';

type ComponentProps = PropsWithChildren<{ children: ReactNode }>;

const Page = ({ children }: ComponentProps): JSX.Element => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Page;
