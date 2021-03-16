import React from 'react';
import 'react-native';
import { Button as PaperButton } from 'react-native-paper';

export const Button = ({ children, ...rest }) => (
  <PaperButton {...rest}>{children}</PaperButton>
);
