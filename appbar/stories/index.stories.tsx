import React from 'react';
import '~/layout/dist/icons.css'

import { Appbar } from '../index';
import { storyLayout } from '~/layout';

export default storyLayout;

export const appbar = () => (
  <Appbar >
    <Appbar.Action
      icon="archive"
      onPress={() => console.log('Pressed archive')}
    />
    <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
    <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
    <Appbar.Action
      icon="delete"
      onPress={() => console.log('Pressed delete')}
    />
  </Appbar>
);