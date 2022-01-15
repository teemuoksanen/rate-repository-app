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
  signInForm: {
    borderWidth : 1,
    borderRadius: 5,
    padding: 15,
    marginTop: 10,
  },
  signInButton: {
    display: 'flex',
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 15,
    marginTop: 10
  },
  signInButtonText: {
    color: '#ffffff',
    alignSelf: 'center',
  },
});


const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput testID="usernameField" style={styles.signInForm} name='username' placeholder='Username' />
      <FormikTextInput testID="passwordField" style={styles.signInForm} name="password" placeholder="Password" secureTextEntry />
      <TouchableWithoutFeedback testID="submitButton" onPress={onSubmit}>
        <View style={styles.signInButton}>
          <Text style={styles.signInButtonText} fontWeight="bold">Sign in</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SignInForm;