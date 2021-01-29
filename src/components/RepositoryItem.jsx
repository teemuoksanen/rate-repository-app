import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import RepositoryItemCount from './RepositoryItemCount';

import theme from '../theme';

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'white',
    flexGrow: 1,
    flexShrink: 1,
    padding: 15,
  },
  upperContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingTop: 0,
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  languageContainer: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    flexShrink: 1,
    marginTop: 5,
    padding: 5,
  },
  lowerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

const RepositoryItem = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.upperContainer}>
        <Image
          style={styles.avatar}
          source={{
            uri: item.ownerAvatarUrl,
          }}
        />
        <View style={styles.infoContainer}>
          <Text fontSize="subheading" fontWeight="bold" style={{ marginBottom: 5 }}>{item.fullName}</Text>
          <Text color="textSecondary" style={{ marginBottom: 5 }}>{item.description}</Text>
          <View style={styles.languageContainer}>
            <Text style={{ color: 'white' }}>{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <RepositoryItemCount countName="Stars" count={item.stargazersCount} />
        <RepositoryItemCount countName="Forks" count={item.forksCount} />
        <RepositoryItemCount countName="Reviews" count={item.reviewCount} />
        <RepositoryItemCount countName="Rating" count={item.ratingAverage} />
      </View>
    </View>
  );
};

export default RepositoryItem;