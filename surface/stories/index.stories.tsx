import React from 'react';;
import { Surface } from '../index';
import { Text } from 'react-native-paper';
import { storyLayout } from '~/layout';

export default storyLayout;

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