import React from 'react';;
import { Chip } from '~/chip';
import { storyLayout } from '~/layout';

export default storyLayout;

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