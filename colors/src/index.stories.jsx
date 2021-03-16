import React from 'react';
import 'react-native';
import { ColorsShowcase } from '~/showcases';
import { light as lightScheme, dark as darkScheme } from './index';

export const light = () => (
  <>
    <style>{`body { background-color: ${lightScheme.background}; }`}</style>
    <ColorsShowcase colorScheme="light" />
  </>
);

export const dark = () => (
  <>
    <style>{`body { background-color: ${darkScheme.background}; }`}</style>
    <ColorsShowcase colorScheme="dark" />
  </>
);
