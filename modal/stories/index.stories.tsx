import React from 'react';;
import { Modal } from '@divriots/starter-origami/modal';
import { Button } from '@divriots/starter-origami/button';
import { Provider, Portal } from 'react-native-paper';
import { Text } from '@divriots/starter-origami/typography';
import { storyLayout } from '@divriots/starter-origami/layout';

export default storyLayout;

const ModalShowcase = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: '4rem' };
  const textStyle = { color: '#000000' };

  return (
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle} style={{ width: '15rem' }}>
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