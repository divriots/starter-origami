import React from 'react';
import { Menu } from '@divriots/starter-origami/menu';
import { View } from 'react-native';
import { Divider, Provider } from 'react-native-paper';
import { Button } from '@divriots/starter-origami/button';

import { storyLayout } from '@divriots/starter-origami/layout';

export default storyLayout;

const MenuShowcase = () => {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View
        style={{
          paddingTop: 50,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Show menu</Button>}>
          <Menu.Item onPress={() => { }} title="Item 1" />
          <Menu.Item onPress={() => { }} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => { }} title="Item 3" />
        </Menu>
      </View>
    </Provider>
  );
};

export const menu = () => <MenuShowcase />;