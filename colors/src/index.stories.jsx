import React from 'react';
import 'react-native';
import { ColorsShowcase } from './ColorsShowcase';

const styles = {
  surface: {
    width: '100%',
    height: '100%',
    padding: '1rem',
  },
};

export const light = () => (
  <div style={{ ...styles.surface }}>
    <ColorsShowcase colorScheme="light" />
  </div>
);

export const dark = () => (
  <div style={{ ...styles.surface, backgroundColor: '#212121' }}>
    <ColorsShowcase colorScheme="dark" />
  </div>
);
