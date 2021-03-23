import React from 'react';
import { TouchableRipple } from './index';
import { Text } from 'react-native-paper';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const toggle_button = () => (
  <TouchableRipple
    style={{ padding: '20rem' }}
    onPress={() => console.log('Pressed')}
    rippleColor="rgba(0, 0, 0, .32)"
  >
    <Text>Press anywhere</Text>
  </TouchableRipple>
);