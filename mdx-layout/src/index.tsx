import React, { useState } from 'react';
import { MDXProvider } from '@mdx-js/react';
import 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import {
  CoreLayout,
  StylesheetSwitch,
} from '@divriots/dockit-react/mdx-layout-core';
import { Playground } from '@divriots/dockit-react/playground';
import { Showcases } from '@divriots/dockit-react/showcases';
import { Props, Description } from '@divriots/dockit-react/props';
import { createTheme } from '~/theme';

type ColorScheme = 'light' | 'dark';

export const Layout = (props) => {
  const [scheme, setScheme] = useState<ColorScheme>('light');

  return (
    <PaperProvider theme={createTheme(scheme)}>
      <MDXProvider components={{ Playground, Props, Description, Showcases }}>
        <StylesheetSwitch
          stylesheets={{
            light: 'https://cdn.jsdelivr.net/npm/water.css/out/light.min.css',
            dark: 'https://cdn.jsdelivr.net/npm/water.css/out/dark.min.css',
          }}
          onSwitch={setScheme}
        />
        <CoreLayout
          logo={
            <img src="https://callstack.github.io/react-native-paper/images/sidebar-logo.svg" style={{ margin: '1rem' }} />
          }
          {...props}
        />
      </MDXProvider>
    </PaperProvider>
  );
};
