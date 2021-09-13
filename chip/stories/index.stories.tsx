import React from 'react';;
import { Chip } from '@divriots/starter-origami/chip';
import { storyLayout } from '@divriots/starter-origami/layout';

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