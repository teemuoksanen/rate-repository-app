import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Link } from 'react-router-native';

import theme from '../theme';

const styles = StyleSheet.create({
  tab: {
    color: theme.colors.appBarText,
    fontSize: theme.fontSizes.appBarTab,
    fontWeight: theme.fontWeights.bold,
  }
});

const AppBarTab = ({name, link}) => {
  return (
    <View style={{ paddingRight: 20 }}>
      <TouchableWithoutFeedback>
        <Link to={link}>
          <Text style={styles.tab}>{name}</Text>
        </Link>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AppBarTab;