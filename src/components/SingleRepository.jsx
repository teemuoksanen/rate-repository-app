import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';

import useSingleRepository from '../hooks/useSingleRepository';
import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';
import Text from './Text';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const SingleRepositoryContainer = ({ repository, onEndReach }) => {
  const reviewNodes = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={item => item.id}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      ListHeaderComponent={() => (
        <View>
          <RepositoryItem item={repository} singleRepository="true" />
          <ItemSeparator />
        </View>
      )}
    />
  );
};

const SingleRepository = () => {
  const { id } = useParams();
  let variables = {
    ...variables,
    id: id,
    first: 8
  };

  const { repository, fetchMore } = useSingleRepository(variables);

  const onEndReach = () => {
    fetchMore();
  };

  if (!repository) {
    return (<Text>Loading repository...</Text>);
  }
  return <SingleRepositoryContainer repository={repository} onEndReach={onEndReach} />;
};

export default SingleRepository;