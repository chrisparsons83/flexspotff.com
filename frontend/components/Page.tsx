import { PropsWithChildren, ReactNode } from 'react';

import Header from './Header';

type ComponentProps = PropsWithChildren<{ children: ReactNode }>;

const Page: React.FC = ({ children }: ComponentProps) => {
  return (
    <div>
      <Header />
      <main className="prose prose-sm prose-purple">{children}</main>
    </div>
  );
};

export default Page;
