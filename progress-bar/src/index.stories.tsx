import React from 'react';
import '~/mdx-layout/dist/icons.css';
import { ProgressBar } from './index';

export default {
  parameters: {
    layout: 'centered',
  },
};


export const progress_bar = () => <ProgressBar progress={0.5} />;