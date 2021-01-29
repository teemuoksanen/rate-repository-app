import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';
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
    marginHorizontal: 20,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
        <AppBarTab name="Repositories" link="/" />
        <AppBarTab name="Sign in" link="/signin" />
      </ScrollView>
    </View>
  );
};

export default AppBar;