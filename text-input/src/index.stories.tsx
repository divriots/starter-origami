import React from 'react';
import '~/mdx-layout/dist/icons.css';
import { TextInput } from './index';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const flat_text_input = () => <TextInput label="Email" />;

export const outlined_text_input = () => <TextInput mode="outlined" label="Email" />;