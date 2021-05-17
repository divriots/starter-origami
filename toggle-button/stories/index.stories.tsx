import React from 'react';;
import { ToggleButton } from '../index';
import { storyLayout } from '~/layout';

export default storyLayout;

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