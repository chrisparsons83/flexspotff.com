import Link from 'next/link';

const Nav = (): JSX.Element => {
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