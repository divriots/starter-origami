import React from 'react';;
import { ToggleButton } from '@divriots/starter-origami/toggle-button';
import { storyLayout } from '@divriots/starter-origami/layout';

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

export const toggle_button = () => <ToggleGroupShowcase />;