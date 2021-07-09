import React from 'react';
import { BottomNavigation } from '~/bottom-navigation';
import { storyLayout } from '~/layout';

export default storyLayout;

const BottomNavigationShowcase = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Music', icon: 'music' },
    { key: 'albums', title: 'Albums', icon: 'album' },
    { key: 'recents', title: 'Recents', icon: 'history' },
  ]);

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={() => <></>}
      style={{ width: '25rem' }}
    />
  );
};


export const Bottom_Navigation = () => <BottomNavigationShowcase />;