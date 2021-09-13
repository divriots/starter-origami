import React from 'react';

import { Text, Title, Subheading, Paragraph, Headline, Caption } from '@divriots/starter-origami/typography';
import { storyLayout } from '@divriots/starter-origami/layout';

export default storyLayout;

export const text = () => <Text>Text</Text>;
export const title = () => <Title>Title</Title>;
export const subheading = () => <Subheading>Subheading</Subheading>;
export const paragraph = () => <Paragraph>Paragraph</Paragraph>;
export const headline = () => <Headline>Headline</Headline>;
export const caption = () => <Caption>Caption</Caption>;