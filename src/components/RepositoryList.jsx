import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useHistory } from "react-router-native";
import { useDebounce } from 'use-debounce';

import useRepositories from '../hooks/useRepositories';
import Search from './Search';
import RepositorySorter from './RepositorySorter';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, sorting, setSorting, search, setSearch }) => {
  const history = useHistory();

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      testID="RepositoryListContainer"
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => <RepositoryItem item={item} history={history} />}
      keyExtractor={item => item.id}
      ListHeaderComponent={
        <View>
          <Search search={search} setSearch={setSearch} />
          <RepositorySorter sorting={sorting} setSorting={setSorting} />
        </View>
      }
    />
  );
};

const RepositoryList = () => {
  const [sorting, setSorting] = useState();
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 500);
  
  let variables = { ...variables, searchKeyword: debouncedSearch };;

  if (sorting === "highestRated") {
    variables = { ...variables, orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' };
  } else if (sorting === "lowestRated") {
    variables = { ...variables, orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' };
  } else {
    variables = { ...variables, orderBy: 'CREATED_AT', orderDirection: 'DESC' };
  }
  
  const { repositories } = useRepositories(variables);

  return <RepositoryListContainer repositories={repositories} sorting={sorting} setSorting={setSorting} search={search} setSearch={setSearch} />;
};

export default RepositoryList;