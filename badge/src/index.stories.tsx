import React from 'react';
import '~/mdx-layout/dist/icons.css'

import { Badge } from './index';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const badge_with_content = () => <Badge>3</Badge>;

export const badge_without_content = () => <Badge />;