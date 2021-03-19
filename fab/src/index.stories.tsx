import React from 'react';
import { FAB } from './index';

export default {
  parameters: {
    layout: 'centered',
  },
};

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