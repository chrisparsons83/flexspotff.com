import { useState } from 'react';
import { Container } from '@chakra-ui/react';
import Logo from './Logo';
import MenuLinks from './MenuLinks';
import MenuToggle from './MenuToggle';
import NavBarContainer from './NavBarContainer';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container maxW="container.lg">
      <NavBarContainer>
        <Logo />
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuLinks toggle={toggle} isOpen={isOpen} />
      </NavBarContainer>
    </Container>
  );
};

export default Header;
