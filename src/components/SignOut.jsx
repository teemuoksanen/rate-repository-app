import React from 'react';
import { TouchableWithoutFeedback, StyleSheet, Text, View } from 'react-native';

import useSignOut from '../hooks/useSignOut';
import theme from '../theme';

const styles = StyleSheet.create({
  tab: {
    color: theme.colors.appBarText,
    fontSize: theme.fontSizes.appBarTab,
    fontWeight: theme.fontWeights.bold,
  }
});

const SignOut = () => {
  const [signOut] = useSignOut();

  return (
    <View style={{ paddingRight: 20 }}>
      <TouchableWithoutFeedback onPress={signOut}>
        <Text style={styles.tab}>Sign out</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SignOut;