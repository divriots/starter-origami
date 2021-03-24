import React from 'react';
import '~/mdx-layout/dist/icons.css';
import { Chip } from './index';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const flat = () => (
  <Chip icon="information" onPress={() => console.log('Pressed')}>
    Example Chip
  </Chip>
);

export const outlined = () => (
  <Chip mode="outlined" icon="information" onPress={() => console.log('Pressed')}>
    Example Chip
  </Chip>
);