import Header from './Header';
import { Box, Container } from '@chakra-ui/react';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Box bg="brand.100" py={3} mb={4}>
        <Header />
      </Box>
      <main>
        <Container maxW="container.lg">{children}</Container>
      </main>
    </>
  );
};

export default Layout;
