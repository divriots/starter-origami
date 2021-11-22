import React from 'react';
import { Text } from '@divriots/starter-origami/typography';
import { Card } from '@divriots/starter-origami/card';
import { Button } from '@divriots/starter-origami/button';
import { storyLayout } from '@divriots/starter-origami/layout';

export default storyLayout;

const CardShowcase = () => (
  <Card style={{ width: '30rem' }}>
    <Card.Title title="Card Title" subtitle="Card Subtitle" />
    <Card.Content>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

export const card = () => <CardShowcase />;
