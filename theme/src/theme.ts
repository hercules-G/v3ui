import { ComponentStyleConfig, extendTheme } from '@chakra-ui/react';

const Button: ComponentStyleConfig = {
  variants: {
    solid: {
      bgGradient: 'linear(to-r, green.400, cyan.500)',
      color: 'black',
      _hover: {
        bgGradient: 'linear(to-r, green.500, cyan.600)',
      },
      _active: {
        bgGradient: 'linear(to-r, green.700, cyan.800)',
      },
    },
  },
};
const Input: ComponentStyleConfig = {
  defaultProps: {
    focusBorderColor: 'cyan.500',
    errorBorderColor: 'red.500',
  },
};
const Select: ComponentStyleConfig = {
  defaultProps: {
    focusBorderColor: 'cyan.500',
    iconColor: 'cyan.500',
    errorBorderColor: 'red.500',
  },
};
const NumberInput: ComponentStyleConfig = {
  defaultProps: {
    focusBorderColor: 'cyan.500',
    errorBorderColor: 'red.500',
  },
};

const Textarea: ComponentStyleConfig = {
  defaultProps: {
    focusBorderColor: 'cyan.500',
    colorScheme: 'cyan',
    errorBorderColor: 'red.500',
  },
};

const Alert: ComponentStyleConfig = {
  defaultProps: {
    variant: 'left-accent',
  },
  variants: {
    'left-accent': (props) => {
      return {
        container: {
          bg: `${props.colorScheme}.900`,
          borderInlineStartColor: `${props.colorScheme}.400`,
        },
      };
    },
    solid: (props) => {
      return { container: { bg: `${props.colorScheme}.500`, color: 'black' } };
    },
  },
};
export const theme = extendTheme({
  initialColorMode: 'dark',
  colors: {
    gray: {
      50: '#F6F6F6',
      100: '#F1F1F1',
      200: '#DDDDDF',
      300: '#C3C3C9',
      400: '#AAAAB2',
      500: '#91919B',
      600: '#7A7A85',
      700: '#63636E',
      800: '#4D4D57',
      900: '#303037',
    },
    red: {
      50: '#FFEDEF',
      100: '#FFC4CB',
      200: '#FF9BA7',
      300: '#FF7384',
      400: '#FF4A60',
      500: '#E4364B',
      600: '#C53030',
      700: '#9B2C2C',
      800: '#822727',
      900: '#63171B',
    },
    orange: {
      50: '#FFF3EB',
      100: '#FFD8BE',
      200: '#FFBE92',
      300: '#FFA365',
      400: '#FC8738',
      500: '#DA6E25',
      600: '#B85716',
      700: '#96420A',
      800: '#743002',
      900: '#522100',
    },
    yellow: {
      50: '#FFFBEF',
      100: '#FFF2CA',
      200: '#FFE9A5',
      300: '#FFE081',
      400: '#FFD75C',
      500: '#DDB847',
      600: '#BB9A34',
      700: '#997C24',
      800: '#776017',
      900: '#55430D',
    },
    green: {
      50: '#EDFFF9',
      100: '#C3FFEC',
      200: '#9AE6B4',
      300: '#72FFD3',
      400: '#47FAC2',
      500: '#31D8A4',
      600: '#20B687',
      700: '#11946B',
      800: '#077250',
      900: '#015037',
    },
    blue: {
      50: '#EDF6FF',
      100: '#C4E2FF',
      200: '#9CCFFF',
      300: '#73BBFF',
      400: '#479EF0',
      500: '#3182CE',
      600: '#1F68AC',
      700: '#11508A',
      800: '#073968',
      900: '#012546',
    },
    cyan: {
      50: '#E5FAFF',
      100: '#B7F2FF',
      200: '#8AEAFF',
      300: '#5CE1FF',
      400: '#2ED9FF',
      500: '#00D1FF',
      600: '#00B0D6',
      700: '#008EAD',
      800: '#006D85',
      900: '#004B5C',
    },
    purple: {
      50: '#F0EEFF',
      100: '#CFC9FF',
      200: '#AEA4FF',
      300: '#8D7EFF',
      400: '#6B59FF',
      500: '#5744EA',
      600: '#402FC8',
      700: '#2D1EA6',
      800: '#1D1084',
      900: '#10104E',
    },
    pink: {
      50: '#FDE8FF',
      100: '#F9B6FF',
      200: '#F583FF',
      300: '#F150FF',
      400: '#ED1EFF',
      500: '#CC0DDD',
      600: '#AC00BB',
      700: '#8D0099',
      800: '#6E0077',
      900: '#4E0055',
    },
    navy: {
      50: '#E8EEFF',
      100: '#BED0FF',
      200: '#94B2FF',
      300: '#6B94FF',
      400: '#4176FF',
      500: '#1551EA',
      600: '#0036C1',
      700: '#002B98',
      800: '#001F6F',
      900: '#0B0B22',
    },
  },
  shadows: {
    outline: '0 0 0 3px rgba(0, 209, 255, 1)',
  },
  fonts: {
    heading:
      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    display:
      '"GT America Condensed", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: '"GT America Mono", SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
  },
  components: {
    Popover: {
      variants: {
        responsive: {
          popper: {
            maxWidth: 'unset',
            width: 'unset',
          },
        },
      },
    },
    Button,
    Input,
    Select,
    NumberInput,
    Alert,
    Textarea,
  },
  // To be imported and used with the bgGradient prop
  // See: https://chakra-ui.com/docs/styled-system/gradient#background-gradient-api
  gradients: {
    'green-cyan': {
      300: 'linear(to-r, green.200, cyan.300)',
      500: 'linear(to-r, green.400, cyan.500)',
      600: 'linear(to-r, green.500, cyan.600)',
      700: 'linear(to-r, green.700, cyan.800)',
    },

    grey: 'linear(to-r, grey.900, blackAlpha.900)',

    pinkLight: 'linear(to-r, pink.300, purple.400)',
    pink: 'linear(to-r, pink.600, purple.600)',
    pinkDark: 'linear(to-r, pink.800, purple.800)',

    orangeLight: 'linear(to-r, orange.200, orange.50)',
    orange: 'linear(to-r, orange.400, orange.200)',
    orangeDark: 'linear(to-r, orange.600, orange.400)',

    cyanLight: 'linear(to-r, pink.200, cyan.300)',
    cyan: 'linear(to-r, pink.400, cyan.500)',
    cyanDark: 'linear(to-r, pink.600, cyan.700)',
  },

  sizes: {
    px: '1px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
    max: 'max-content',
    min: 'min-content',
    full: '100%',
    '3xs': '14rem',
    '2xs': '16rem',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem',
    '8xl': '90rem',
    container: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
});
