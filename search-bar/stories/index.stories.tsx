import React from 'react';;
import { Searchbar } from '@divriots/starter-origami/search-bar';
import { storyLayout } from '@divriots/starter-origami/layout';

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
};

export const search_bar = () => <SearchbarShowcase />;