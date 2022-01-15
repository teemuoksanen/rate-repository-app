import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  flexContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
});

const formatCount = value => {
  if (value >= 1000) {
    return `${Math.round((value / 1000) * 10) / 10}k`;
  }
  return value.toString();
};

const RepositoryItemCount = ({ countName, count }) => (
  <View testID={countName} style={styles.flexContainer}>
    <Text fontWeight="bold" style={{ marginBottom: 5 }}>
      {formatCount(count)}
    </Text>
    <Text color="textSecondary">{countName}</Text>
  </View>
);

export default RepositoryItemCount;