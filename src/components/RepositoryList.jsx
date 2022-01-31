import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useHistory } from "react-router-native";
import { Picker } from "@react-native-picker/picker";

import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  picker: {
    height: 50
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const SortMenu = ({ sorting, setSorting }) => {
  return (
    <Picker
      selectedValue={sorting}
      style={styles.picker}
      onValueChange={(itemValue, itemIndex) =>
        setSorting(itemValue)
      }>
      <Picker.Item label="Lastest repositories" value="latest" />
      <Picker.Item label="Highest rated repositories" value="highestRated" />
      <Picker.Item label="Lowest rated repositories" value="lowestRated" />
    </Picker>
  );
};

export const RepositoryListContainer = ({ repositories, sorting, setSorting }) => {
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
      ListHeaderComponent={<SortMenu sorting={sorting} setSorting={setSorting} />}
    />
  );
};

const RepositoryList = () => {
  const [sorting, setSorting] = useState();
  
  let variables;

  if (sorting === "highestRated") {
    variables = { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' };
  } else if (sorting === "lowestRated") {
    variables = { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' };
  } else {
    variables = { orderBy: 'CREATED_AT' };
  }
  
  const { repositories } = useRepositories(variables);

  return <RepositoryListContainer repositories={repositories} sorting={sorting} setSorting={setSorting} />;
};

export default RepositoryList;