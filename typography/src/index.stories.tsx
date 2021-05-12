import React from 'react';
import '~/mdx-layout/dist/icons.css';
import { View } from 'react-native';
import { Text, Title, Subheading, Paragraph, Headline, Caption } from './index';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const typography = () => (
  <View style={{ diplay: 'flex', flexDirection: 'column' }}>
    <Text>Text</Text>
    <Title>Title</Title>
    <Subheading>Subheading</Subheading>
    <Paragraph>Paragraph</Paragraph>
    <Headline>Headline</Headline>
    <Caption>Caption</Caption>
  </View>
);