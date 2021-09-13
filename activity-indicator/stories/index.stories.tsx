import React from 'react';
import { ActivityIndicator } from '@divriots/starter-origami/activity-indicator';
import { storyLayout } from '@divriots/starter-origami/layout';

export default storyLayout;

export const animated = () => <ActivityIndicator animating />;

export const still = () => <ActivityIndicator animating={false} />;

export const small = () => <ActivityIndicator size="small" />;

export const large = () => <ActivityIndicator size="large" />;

export const size_64 = () => <ActivityIndicator size={64} />;