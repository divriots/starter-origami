import React from 'react';

import { Badge } from '~/badge';
import { storyLayout } from '~/layout';

export default storyLayout;

export const badge_with_content = () => <Badge>3</Badge>;

export const badge_without_content = () => <Badge />;