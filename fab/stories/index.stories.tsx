import React from 'react';;
import { FAB } from '~/fab';
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