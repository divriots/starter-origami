import React from 'react';
import { TouchableRipple } from '~/touchable-ripple';
import { Text } from 'react-native-paper';
import { storyLayout } from '~/layout';

export default storyLayout;

export const toggle_button = () => (
  <TouchableRipple
    style={{ padding: '20rem' }}
    onPress={() => console.log('Pressed')}
    rippleColor="rgba(0, 0, 0, .32)"
  >
    <Text>Press anywhere</Text>
  </TouchableRipple>
);