import React from 'react';;
import { IconButton } from '@divriots/starter-origami/icon-button';
import { storyLayout } from '@divriots/starter-origami/layout';

export default storyLayout;

export const icon_button = () => <IconButton
  icon="camera"
  size={20}
  onPress={() => console.log('Pressed')}
/>;