import React from 'react';
import '~/mdx-layout/dist/icons.css'

import { Badge } from '../index';
import { storyLayout } from '~/layout';

export default storyLayout;

export const badge_with_content = () => <Badge>3</Badge>;

export const badge_without_content = () => <Badge />;