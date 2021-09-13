import React from 'react';;
import { ProgressBar } from '@divriots/starter-origami/progress-bar';
import { storyLayout } from '@divriots/starter-origami/layout';

export default storyLayout;


export const progress_bar = () => <ProgressBar progress={0.5} style={{ width: '10rem' }} />;