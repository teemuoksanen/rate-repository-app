import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import useCurrentUser from '../hooks/useCurrentUser';
import AppBarTab from './AppBarTab';
import SignOut from './SignOut';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 20,
    padding: 20,
    backgroundColor: theme.colors.appBar,
  },
  tab: {
    color: theme.colors.appBarText,
    fontSize: theme.fontSizes.appBarTab,
    fontWeight: theme.fontWeights.bold,
  },
  scrollView: {
    flexDirection: 'row',
  },
});

const AppBar = () => {
  const currentUser = useCurrentUser();
  const userIsLoggedIn = (currentUser.authorizedUser != null);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
        <AppBarTab name="Repositories" link="/" />
        {userIsLoggedIn ? (
          <ScrollView style={styles.scrollView} horizontal>
            <AppBarTab name="Create a review" link="/review" />
            <AppBarTab name="My reviews" link="/myreviews" />
            <AppBarTab name="Sign out" link="/signout" />
          </ScrollView>
        ) : (
          <ScrollView style={styles.scrollView} horizontal>
            <AppBarTab name="Sign in" link="/signin" />
            <AppBarTab name="Sign up" link="/signup" />
          </ScrollView>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;