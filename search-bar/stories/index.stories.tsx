import React from 'react';
import '~/mdx-layout/dist/icons.css';
import { Searchbar } from '../index';
import { storyLayout } from '~/layout';

export default storyLayout;

const SearchbarShowcase = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  );
}

export const search_bar = () => <SearchbarShowcase />;