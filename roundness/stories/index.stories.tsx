import React from 'react';
import { Button } from '~/button';
import { storyLayout } from '~/layout';
import { roundness } from '~/roundness';

export default storyLayout;

export const button_roundness = () => <Button mode="contained">{`Button with roundness ${roundness}`}</Button>;