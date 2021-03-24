import React from 'react';
import '~/mdx-layout/dist/icons.css';
import { Surface } from './index';
import { Text } from 'react-native-paper';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const surface = () => (
  <Surface style={styles.surface}>
    <Text>Surface</Text>
  </Surface>
);


const styles = {
  surface: {
    padding: '5rem',
    elevation: 4,
  },
};