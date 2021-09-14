import React, { useState } from 'react';
import 'react-native';
import { Provider as ThemeProvider } from 'react-native-paper';
import { CssLayout } from '@divriots/dockit-react/mdx-layout-css';
import { Playground } from '@divriots/dockit-react/playground';
import { Showcases } from '@divriots/dockit-react/showcases';
import { createTheme } from '~/theme';
import './icons.css';
import { ColorScheme } from './types';
import Logo from './Logo';

export const Layout = (props) => {
  const [scheme, setScheme] = useState<ColorScheme>('light');

  return (
    <ThemeProvider theme={createTheme(scheme)}>
      <CssLayout
        components={{ Playground, Showcases }}
        onSwitch={setScheme}
        logo={
          <div style={{ width: '130px', height: 'auto' }}>
            <Logo scheme={scheme} />
          </div>
        }
        {...props}
      />
    </ThemeProvider>
  );
};
