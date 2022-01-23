import React from 'react';
import { View, StyleSheet } from 'react-native';
import { format } from 'date-fns';

import Text from './Text';

import theme from '../theme';

const styles = StyleSheet.create({
  reviewContainer: {
    backgroundColor: 'white',
    flexGrow: 1,
    flexShrink: 1,
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  ratingContainer: {
    marginRight: 0,
    width: 50,
    height: 50,
    borderWidth: 3,
    borderColor: theme.colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
  },
  ratingText: {
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.primary,
    alignSelf: 'center',
  },
  reviewInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: 0,
    paddingRight: 15,
    paddingBottom: 0,
    paddingLeft: 20,
    flex: 1,
  },
  headerText: {
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.textPrimary,
    marginBottom: 5,
  },
  dateText: {
    color: theme.colors.textSecondary,
    marginBottom: 5,
  },
  reviewText: {
    color: theme.colors.textPrimary,
    marginBottom: 5,
  },
});

const ReviewItem = ({ review }) => {
  const reviewDate = format(new Date(review.createdAt), 'd.M.yyy');

  return(
    <View style={styles.reviewContainer}>
      <View style={styles.ratingContainer}>
        <Text testID="reviewRating" style={styles.ratingText}>{review.rating}</Text>
      </View>
      <View style={styles.reviewInfoContainer}>
        <Text testID="reviewName" style={styles.headerText}>{review.user.username}</Text>
        <Text testID="reviewDate" style={styles.dateText}>{reviewDate}</Text>
        <Text testID="review" style={styles.reviewText}>{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;