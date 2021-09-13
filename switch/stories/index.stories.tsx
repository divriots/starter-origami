import React from 'react';;
import { Switch } from '@divriots/starter-origami/switch';
import { storyLayout } from '@divriots/starter-origami/layout';

export default storyLayout;

const SwitchShowcase = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
};

export const switch_component = () => <SwitchShowcase />;