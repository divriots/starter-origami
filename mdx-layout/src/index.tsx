import React, { useState } from 'react';
import 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Layout as BaseLayout } from '@divriots/dockit-react/mdx-layout';
import { createTheme } from '~/theme';

type ColorScheme = 'light' | 'dark';

export const Layout = (props) => {
  const [scheme, setScheme] = useState<ColorScheme>('light');

  return (
    <PaperProvider theme={createTheme(scheme)}>
      <BaseLayout onSwitch={setScheme} {...props} />
    </PaperProvider>
  );
};
