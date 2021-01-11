import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  tab: {
    color: theme.colors.appBarText,
    fontSize: theme.fontSizes.appBarTab,
    fontWeight: theme.fontWeights.bold,
  }
});

const AppBarTab = ({name}) => {
  return (
    <View>
      <TouchableWithoutFeedback onPress>
        <Text style={styles.tab}>{name}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AppBarTab;