import React from 'react';;
import { Snackbar } from '../index';
import { Button } from '~/button';
import { View } from 'react-native';
import { storyLayout } from '~/layout';

export default storyLayout;

const SnackbarShowcase = () => {
  const [visible, setVisible] = React.useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);
  return (
    <View style={{ flex: 1, justifyContent: 'space-between', height: '10rem' }}>
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