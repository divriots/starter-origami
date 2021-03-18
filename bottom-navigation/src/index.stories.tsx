import React from 'react';
import { BottomNavigation } from './index';

export default {
  parameters: {
    layout: 'centered',
  },
};

const BottomNavigationShowcase = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Music', icon: 'queue-music' },
    { key: 'albums', title: 'Albums', icon: 'album' },
    { key: 'recents', title: 'Recents', icon: 'history' },
  ]);

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={() => { }}
    />
  );
};


export const Bottom_Navigation = () => <BottomNavigationShowcase />;