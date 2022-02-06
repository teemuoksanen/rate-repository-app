import React from 'react';
import { Searchbar } from 'react-native-paper';

export const Search = ({ search, setSearch }) => {

  const onChangeSearch = query => setSearch(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={search}
    />
  );
};

export default Search;