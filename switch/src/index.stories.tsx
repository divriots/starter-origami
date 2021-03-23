import React from 'react';
import { Switch } from './index';
import { Text } from 'react-native-paper';

export default {
  parameters: {
    layout: 'centered',
  },
};

const SwitchShowcase = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
};

export const switch_component = () => <SwitchShowcase />;