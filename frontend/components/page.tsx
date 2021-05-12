import { PropsWithChildren, ReactNode } from 'react';

import Header from './header';

type ComponentProps = PropsWithChildren<{ children: ReactNode }>;

const Page = ({ children }: ComponentProps): JSX.Element => {
  return (
    <div>
      <Header />
      <main className="prose prose-sm prose-purple">{children}</main>
    </div>
  );
};

export default Page;
