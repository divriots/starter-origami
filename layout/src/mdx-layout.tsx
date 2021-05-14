import React, { useState } from 'react';
import 'react-native';
import { Provider as ThemeProvider } from 'react-native-paper';
import { CssLayout } from '@divriots/dockit-react/mdx-layout-css';
import { Playground } from '@divriots/dockit-react/playground';
import { Showcases } from '@divriots/dockit-react/showcases';
import { createTheme } from '~/theme';
import './icons.css';
import { ColorScheme } from './types';


export const Layout = (props) => {
  const [scheme, setScheme] = useState<ColorScheme>('light');

  return (
    <ThemeProvider theme={createTheme(scheme)}>
      <CssLayout
        components={{ Playground, Showcases }}
        onSwitch={setScheme}
        logo={
          <img src="https://callstack.github.io/react-native-paper/images/sidebar-logo.svg" style={{ margin: '1rem' }} />
        }
        {...props}
      />
    </ThemeProvider >
  );
};
