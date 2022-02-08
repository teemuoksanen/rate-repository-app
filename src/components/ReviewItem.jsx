import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, Alert } from 'react-native';
import { format } from 'date-fns';
import { useHistory } from 'react-router-native';

import useDeleteReview from '../hooks/useDeleteReview';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
  },
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
  buttonContainer: {
    backgroundColor: 'white',
    flexGrow: 1,
    flexShrink: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  viewButton: {
    display: 'flex',
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 15,
    marginRight: 15,
  },
  deleteButton: {
    display: 'flex',
    backgroundColor: theme.colors.error,
    borderRadius: 5,
    padding: 15
  },
  buttonText: {
    color: '#ffffff',
    alignSelf: 'center',
    fontWeight: theme.fontWeights.bold,
  },
});

const ReviewItem = ({ review, refetch, header = "username" }) => {
  const history = useHistory();
  const [deleteReview] = useDeleteReview();
  const reviewDate = format(new Date(review.createdAt), 'd.M.yyy');

  const deleteWarning = () =>
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: async () => {
            const id = review.id;
            await deleteReview({id});
            refetch();
          }
        }
      ]
    );

  return(
    <View style={styles.itemContainer}>
      <View style={styles.reviewContainer}>
        <View style={styles.ratingContainer}>
          <Text testID="reviewRating" style={styles.ratingText}>{review.rating}</Text>
        </View>
        <View style={styles.reviewInfoContainer}>
          {(header == "repository") ? (
            <Text testID="reviewName" style={styles.headerText}>{review.repository.fullName}</Text>
          ) : (
            <Text testID="reviewName" style={styles.headerText}>{review.user.username}</Text>
          )}
          <Text testID="reviewDate" style={styles.dateText}>{reviewDate}</Text>
          <Text testID="review" style={styles.reviewText}>{review.text}</Text>
        </View>
      </View>
      {(header == "repository") && (
        <View style={styles.buttonContainer}>
          <TouchableWithoutFeedback onPress={() => history.push(`/repositories/${review.repository.id}`)}>
            <View style={styles.viewButton}>
              <Text style={styles.buttonText}>View repository</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={ deleteWarning }>
            <View style={styles.deleteButton}>
              <Text style={styles.buttonText}>Delete review</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      )}
    </View>
  );
};

export default ReviewItem;