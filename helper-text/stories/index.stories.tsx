import React from 'react';
import '~/mdx-layout/dist/icons.css';
import { View } from 'react-native';
import { TextInput } from '~/text-input';
import { HelperText } from '../index';
import { storyLayout } from '~/layout';

export default storyLayout;

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