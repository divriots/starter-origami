import React from 'react';;
import { IconButton } from '~/icon-button';
import { storyLayout } from '~/layout';

export default storyLayout;

export const icon_button = () => <IconButton
  icon="camera"
  size={20}
  onPress={() => console.log('Pressed')}
/>;