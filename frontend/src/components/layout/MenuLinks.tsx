import { Box, Stack } from '@chakra-ui/layout';
import MenuItem from './MenuItem';

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

const MenuLinks: React.FC<Props> = ({ isOpen, toggle }) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem toggle={toggle}>Home</MenuItem>
        <MenuItem to="/leagues/leaderboards" toggle={toggle}>
          Leaderboard
        </MenuItem>
        <MenuItem to="/leagues/standings" toggle={toggle}>
          Standings
        </MenuItem>
        <MenuItem to="/leagues/adp" toggle={toggle}>
          ADP
        </MenuItem>
      </Stack>
    </Box>
  );
};

export default MenuLinks;
