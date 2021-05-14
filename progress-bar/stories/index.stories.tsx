import React from 'react';
import '~/mdx-layout/dist/icons.css';
import { ProgressBar } from '../index';
import { storyLayout } from '~/layout';

export default storyLayout;


export const progress_bar = () => <ProgressBar progress={0.5} style={{ width: '10rem' }} />;