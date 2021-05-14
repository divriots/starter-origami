import React from 'react';
import '~/mdx-layout/dist/icons.css';
import { FAB } from '../index';
import { storyLayout } from '~/layout';

export default storyLayout;

export const fab = () => (
  <FAB
    style={{
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    }}
    small
    icon="plus"
    onPress={() => console.log('Pressed')}
  />
);