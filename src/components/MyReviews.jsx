import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import useCurrentUser from '../hooks/useCurrentUser';
import ReviewItem from './ReviewItem';
import Text from './Text';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const MyReviewsContainer = ({ authorizedUser }) => {
  const reviewNodes = authorizedUser
    ? authorizedUser.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} header="repository" />}
      keyExtractor={item => item.id}
    />
  );
};

const MyReviews = () => {
  const { authorizedUser } = useCurrentUser({ includeReviews: true });

  if (!authorizedUser) {
    return (<Text>Loading...</Text>);
  }

  return <MyReviewsContainer authorizedUser={authorizedUser} />;
};

export default MyReviews;