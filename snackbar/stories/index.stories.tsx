import React from 'react';
import { Snackbar } from '@divriots/starter-origami/snackbar';
import { Button } from '@divriots/starter-origami/button';
import { View } from 'react-native';
import { storyLayout } from '@divriots/starter-origami/layout';

export default storyLayout;

const SnackbarShowcase = () => {
  const [visible, setVisible] = React.useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);
  return (
    <View style={{ flex: 1, justifyContent: 'space-between', height: '10rem', width: '30rem' }}>
      <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{ label: 'Undo', onPress: () => console.log('pressed') }}>
        Hey there! I'm a Snackbar.
      </Snackbar>
    </View>
  );
};

export const snackbar = () => <SnackbarShowcase />;