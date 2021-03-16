import 'react-native';
import { DefaultTheme, configureFonts } from 'react-native-paper';
import { fontConfig } from '~/fonts';
import { light, dark } from '~/colors';
import { roundness } from '~/roundness';
import { animation } from '~/animation';

export const createTheme = (colorScheme: 'light' | 'dark' = 'light') => ({
  ...DefaultTheme,
  dark: colorScheme === 'dark',
  roundness: roundness,
  colors: colorScheme === 'light' ? light : dark,
  fonts: configureFonts(fontConfig),
  animation: animation,
});
