import React from 'react';
import '~/mdx-layout/dist/icons.css';
import { ToggleButton } from './index';

export default {
  parameters: {
    layout: 'centered',
  },
};

const ToggleGroupShowcase = () => {
  const [value, setValue] = React.useState('left');
  return (
    <ToggleButton.Group
      onValueChange={value => setValue(value)}
      value={value}>
      <ToggleButton icon="format-align-left" value="left" />
      <ToggleButton icon="format-align-right" value="right" />
    </ToggleButton.Group>
  );
};

export const toggle_button = () => <ToggleGroupShowcase />