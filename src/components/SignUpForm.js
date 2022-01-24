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
  signUpForm: {
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

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput testID="usernameField" style={styles.signUpForm} name='username' placeholder='Username' />
      <FormikTextInput testID="passwordField" style={styles.signUpForm} name='password' placeholder='Password' secureTextEntry />
      <FormikTextInput testID="passwordConfirmationField" style={styles.signUpForm} name='passwordConfirmation' placeholder='Password confirmation' secureTextEntry />
      <TouchableWithoutFeedback testID="submitButton" onPress={onSubmit}>
        <View style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Sign up</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SignUpForm;