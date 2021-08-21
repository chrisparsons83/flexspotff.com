import { useState } from 'react';
import Logo from './Logo';
import MenuToggle from './MenuToggle';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Logo />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
    </div>
  );
};

export default Header;
