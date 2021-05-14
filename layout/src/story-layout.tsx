import React, { useState } from 'react';
import { Provider as ThemeProvider } from 'react-native-paper';
import { createTheme } from '~/theme';
import { ColorScheme } from './types';

export const storyLayout = {
  decorators: [
    (Story) => {
      const [scheme, setScheme] = useState<ColorScheme>('light');

      return (
        <ThemeProvider theme={createTheme(scheme)}>
          <Story />
        </ThemeProvider>
      );
    }
  ],
  parameters: {
    layout: 'centered',
    backgrounds: {
      values: [
        { name: 'dark', value: '#161f27' },
        { name: 'light', value: '#efefef' },
      ],
    },
  },
};