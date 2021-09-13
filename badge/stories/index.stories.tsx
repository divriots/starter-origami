import React from 'react';

import { Badge } from '@divriots/starter-origami/badge';
import { storyLayout } from '@divriots/starter-origami/layout';

export default storyLayout;

export const badge_with_content = () => <Badge>3</Badge>;

export const badge_without_content = () => <Badge />;