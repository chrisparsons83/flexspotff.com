import Header from './Header';

const Page: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="prose prose-sm prose-purple">{children}</main>
    </div>
  );
};

export default Page;
