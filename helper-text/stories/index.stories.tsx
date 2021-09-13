import React from 'react';;
import { View } from 'react-native';
import { TextInput } from '@divriots/starter-origami/text-input';
import { HelperText } from '@divriots/starter-origami/helper-text';
import { storyLayout } from '@divriots/starter-origami/layout';

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