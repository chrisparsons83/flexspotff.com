import { Box } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

interface Props {
  toggle: () => void;
  isOpen: boolean;
}

const MenuToggle: React.FC<Props> = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  );
};

export default MenuToggle;
