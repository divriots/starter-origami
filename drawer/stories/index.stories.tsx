import React from 'react';;
import { Drawer } from '@divriots/starter-origami/drawer';
import { storyLayout } from '@divriots/starter-origami/layout';

export default storyLayout;

const DrawerShowcase = () => {
  const [active, setActive] = React.useState('');


  return (
    <Drawer.Section title="Some title">
      <Drawer.Item
        label="First Item"
        active={active === 'first'}
        onPress={() => setActive('first')}
      />
      <Drawer.Item
        label="Second Item"
        active={active === 'second'}
        onPress={() => setActive('second')}
      />
    </Drawer.Section>
  );
};

export const drawer = () => <DrawerShowcase />;