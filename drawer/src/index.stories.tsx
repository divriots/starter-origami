import React from 'react';
import '~/mdx-layout/dist/icons.css';
import { Drawer } from './index';

export default {
  parameters: {
    layout: 'centered',
  },
};

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