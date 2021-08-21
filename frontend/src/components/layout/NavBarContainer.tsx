import { Flex } from '@chakra-ui/react';

const NavBarContainer: React.FC = ({ children }) => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" w="100%" mb={8} p={8}>
      {children}
    </Flex>
  );
};

export default NavBarContainer;
