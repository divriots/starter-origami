import React from 'react';;
import { TextInput } from '@divriots/starter-origami/text-input';
import { storyLayout } from '@divriots/starter-origami/layout';

export default storyLayout;

export const flat_text_input = () => <TextInput label="Email" />;

export const outlined_text_input = () => <TextInput mode="outlined" label="Email" />;