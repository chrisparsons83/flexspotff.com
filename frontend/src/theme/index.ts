import { extendTheme, ThemeConfig, Colors } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const colors: Colors = {
  brand: {
    100: '#151825',
    200: '#21212F',
    300: '#26273B',
    400: '#424577',
  },
  admiral: {
    500: '#15c9bf',
  },
  champions: {
    500: '#c29f04',
  },
  dragon: {
    500: '#1f8b4c',
  },
  galaxy: {
    500: '#3498db',
  },
  monarch: {
    500: '#9b59b6',
  },
};

const styles = {
  global: {
    'html, body': {
      backgroundColor: 'brand.200',
    },
  },
};

const theme = extendTheme({ config, colors, styles });
export default theme;
