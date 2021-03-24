import React from 'react';
import '~/mdx-layout/dist/icons.css';
import { ToggleButton } from './index';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const toggle_button = () => <ToggleButton icon="bluetooth" value="bluetooth" />;