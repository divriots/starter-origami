import React from 'react';
import { Button } from '@divriots/starter-origami/button';
import { Banner } from '@divriots/starter-origami/banner';
import { storyLayout } from '@divriots/starter-origami/layout';

export default storyLayout;

const BannerShowcase = () => {
  const [visible, setVisible] = React.useState(true);
  return (
    <div style={{ width: '20rem', height: '80rem' }}>
      <Banner
        visible={visible}
        actions={[
          {
            label: 'Fix it',
            onPress: () => setVisible(false),
          },
          {
            label: 'Learn more',
            onPress: () => setVisible(false),
          },
        ]}
        icon={({ size }) => (
          <img
            src="https://avatars3.githubusercontent.com/u/17571969?s=400&v=4"
            style={{ width: size, height: size }}
          />
        )}>
        There was a problem processing a transaction on your credit card.
      </Banner>
      {<Button onPress={() => setVisible(!visible)}>{visible ? 'Hide Banner' : 'Show Banner'}</Button>}
    </div >
  );
};

export const banner = () => <BannerShowcase />;