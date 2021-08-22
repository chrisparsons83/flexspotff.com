import { useState } from 'react';
import { Container } from '@chakra-ui/react';
import Logo from './Logo';
import MenuToggle from './MenuToggle';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container maxW="container.lg">
      <Logo />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
    </Container>
  );
};

export default Header;
