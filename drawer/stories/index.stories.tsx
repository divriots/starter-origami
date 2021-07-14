import React from 'react';;
import { Drawer } from '~/drawer';
import { storyLayout } from '~/layout';

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