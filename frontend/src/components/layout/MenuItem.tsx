import { Link, Text } from '@chakra-ui/react';

interface Props {
  to?: string;
}

const MenuItem: React.FC<Props> = ({ children, to = '/' }) => {
  return (
    <Link href={to}>
      <Text display="block">{children}</Text>
    </Link>
  );
};

export default MenuItem;
