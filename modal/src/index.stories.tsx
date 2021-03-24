import React from 'react';
import { Modal } from './index';
import { Button } from '~/button';
import { Provider, Portal } from 'react-native-paper';
import { Text } from '~/typography';

export default {
  parameters: {
    layout: 'centered',
  },
};

const ModalShowcase = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: '4rem' };
  const textStyle = { color: '#000000' };

  return (
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text style={textStyle}>Example Modal.  Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
      <Button style={{ marginTop: 30 }} onPress={showModal}>
        Show
        </Button>
    </Provider>
  );
};

export const modal = () => <ModalShowcase />;