import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { HelperText } from './index';

export default {
  parameters: {
    layout: 'centered',
  },
};

const HelperTextShowcase = () => {
  const [text, setText] = React.useState('');
  const onChangeText = text => setText(text);
  const hasErrors = () => !text.includes('@');
  return (
    <View>
      <TextInput label="Email" value={text} onChangeText={onChangeText} />
      <HelperText type="error" visible={hasErrors()}>
        Email address is invalid!
      </HelperText>
    </View>
  );
};

export const helper_text = () => <HelperTextShowcase />;