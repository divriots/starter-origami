import React from 'react';
import { Provider as ThemeProvider } from 'react-native-paper';
import { createTheme } from '~/theme';
import './icons.css'

export const storyLayout = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={createTheme('light')}>
        <Story />
      </ThemeProvider>
    )
  ],
  parameters: {
    layout: 'centered',
  },
};