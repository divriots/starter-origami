import React from 'react';;
import { TextInput } from '../index';
import { storyLayout } from '~/layout';

export default storyLayout;

export const flat_text_input = () => <TextInput label="Email" />;

export const outlined_text_input = () => <TextInput mode="outlined" label="Email" />;