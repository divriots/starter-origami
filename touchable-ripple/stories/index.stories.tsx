import React from 'react';
import { TouchableRipple } from '@divriots/starter-origami/touchable-ripple';
import { Text } from 'react-native-paper';
import { storyLayout } from '@divriots/starter-origami/layout';

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