import React from 'react';
import { IconButton } from './index';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const icon_button = () => <IconButton
  icon="camera"
  size={20}
  onPress={() => console.log('Pressed')}
/>;