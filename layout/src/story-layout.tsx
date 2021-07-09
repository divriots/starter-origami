import React from 'react';
import { View } from 'react-native';
import { Provider as ThemeProvider } from 'react-native-paper';
import { createTheme } from '~/theme';
import './icons.css'

export const storyLayout = {
  decorators: [
    (Story) => (
      <View style={{ padding: '1rem' }}>
        <ThemeProvider theme={createTheme('light')}>
          <Story />
        </ThemeProvider>
      </View>
    )
  ],
  parameters: {
    layout: 'centered',
  },
};