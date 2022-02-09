const colors = {
  primary: {
    light: '#ee5700',
    dark: '#b0c0ce',
    description: 'primary color for your app, usually your brand color',
  },
  accent: {
    light: '#03DAC4',
    dark: '#388E3C',
    description:
      'secondary color for your app which complements the primary color',
  },
  background: {
    light: '#F6F6F6',
    dark: '#262626',
    description: 'background color for pages, such as lists',
  },
  surface: {
    light: '#FFFFFF',
    dark: '#121212',
    description:
      'background color for elements containing content, such as cards',
  },
  text: {
    light: '#000000',
    dark: '#FFFFFF',
    description: 'text color for content',
  },
  disabled: {
    light: '#00000042',
    dark: '#FFFFFF42',
    description: 'color for disabled elements',
  },
  placeholder: {
    light: '#00000042',
    dark: '#FFFFFF42',
    description: 'color for placeholder text, such as input placeholder',
  },
  backdrop: {
    light: '#00000080',
    dark: '#FFFFFF80',
    description: 'color for backdrops of various components such as modals',
  },
  onSurface: {
    light: '#000000',
    dark: '#FFFFFF80',
    description: 'background color for snackbars',
  },
  notification: {
    light: '#F50057',
    dark: '#F57C00',
    description: 'background color for badges',
  },
};

export const light = Object.keys(colors).reduce(
  (acc, c) => ({ ...acc, [c]: colors[c].light }),
  {}
);

export const dark = Object.keys(colors).reduce(
  (acc, c) => ({ ...acc, [c]: colors[c].dark }),
  {}
);

export const description = Object.keys(colors).reduce(
  (acc, c) => ({ ...acc, [c]: colors[c].description }),
  {}
);
