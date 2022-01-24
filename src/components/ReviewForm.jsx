import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';

import theme from '../theme';
import Text from './Text';
import FormikTextInput from './FormikTextInput';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white',
    padding: 15,
  },
  reviewForm: {
    borderWidth : 1,
    borderRadius: 5,
    padding: 15,
    marginTop: 10,
  },
  submitButton: {
    display: 'flex',
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 15,
    marginTop: 10
  },
  submitButtonText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: theme.fontWeights.bold,
  },
});


const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput testID="ownerNameField" style={styles.reviewForm} name='ownerName' placeholder='Repository owner name' />
      <FormikTextInput testID="repositoryNameField" style={styles.reviewForm} name='repositoryName' placeholder='Repository name' />
      <FormikTextInput testID="ratingField" style={styles.reviewForm} name='rating' placeholder='Rating between 0 and 100' />
      <FormikTextInput testID="textField" style={styles.reviewForm} name='text' multiline={true} textAlignVertical='top' placeholder='Review' />
      <TouchableWithoutFeedback testID="submitButton" onPress={onSubmit}>
        <View style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Create a review</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ReviewForm;