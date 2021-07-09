import React from 'react';;
import { Dialog } from '~/dialog';
import { Button } from '~/button';
import { Portal, Provider } from 'react-native-paper';
import { Paragraph } from '~/typography';
import { storyLayout } from '~/layout';

export default storyLayout;

const DialogShowcase = () => {
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <>
      <Provider>
        <Button onPress={showDialog}>Show Dialog</Button>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog} style={{ width: '15rem' }}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Paragraph>This is simple dialog</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </Provider>
    </>
  );
};

export const dialog = () => <DialogShowcase />;