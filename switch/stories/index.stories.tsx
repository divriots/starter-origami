import React from 'react';;
import { Switch } from '~/switch';
import { storyLayout } from '~/layout';

export default storyLayout;

const SwitchShowcase = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
};

export const switch_component = () => <SwitchShowcase />;