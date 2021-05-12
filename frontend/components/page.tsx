import { PropsWithChildren, ReactNode } from 'react';

import Nav from './nav';

type ComponentProps = PropsWithChildren<{ children: ReactNode }>;

const Page = ({ children }: ComponentProps): JSX.Element => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default Page;
