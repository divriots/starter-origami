import React from 'react';
import '~/mdx-layout/dist/icons.css';
import { Switch } from '../index';
import { storyLayout } from '~/layout';

export default storyLayout;

const SwitchShowcase = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
};

export const switch_component = () => <SwitchShowcase />;