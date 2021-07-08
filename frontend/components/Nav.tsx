import Link from 'next/link';

const Nav: React.FC = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/leagues">Leagues</Link>
      <Link href="/games">Games</Link>
      <Link href="/podcast">Podcast</Link>
    </nav>
  );
};

export default Nav;
