import * as colors from 'twind/colors';

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: `Inter, ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
            sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      },
    },
    colors: {
      ...colors,
      primary: '#f97116',
      'primary-light': '#ffa24a',
      'primary-dark': '#bf4100',
      secondary: '#334955',
      'secondary-light': '#5e7481',
      'secondary-dark': '#0a222c',
    },
  },
};
