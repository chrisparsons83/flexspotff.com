import Link from 'next/link';
import { Text } from '@chakra-ui/react';

interface Props {
  to?: string;
  toggle: () => void;
}

const MenuItem: React.FC<Props> = ({ children, to = '/', toggle }) => {
  return (
    <Link href={to} passHref>
      <a>
        <span onClick={toggle}>{children}</span>
      </a>
    </Link>
  );
};

export default MenuItem;
