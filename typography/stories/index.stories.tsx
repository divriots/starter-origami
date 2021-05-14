import React from 'react';;
import { View } from 'react-native';
import { Text, Title, Subheading, Paragraph, Headline, Caption } from '../index';
import { storyLayout } from '~/layout';

export default storyLayout;

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