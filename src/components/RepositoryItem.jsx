import React from 'react';
import { View, Image, TouchableWithoutFeedback, StyleSheet, Linking } from 'react-native';
//import { useHistory } from "react-router-native";

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
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: 0,
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    flex: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  language: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    flexShrink: 1,
    marginTop: 5,
    padding: 5,
  },
  languageText: {
    color: 'white',
    alignSelf: 'center',
  },
  lowerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  headerText: {
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.textPrimary,
    marginBottom: 5,
  },
  descriptionText: {
    color: theme.colors.textSecondary,
    marginBottom: 5,
  },
  githubButton: {
    display: 'flex',
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 15,
    marginTop: 10,
  },
  githubButtonText: {
    color: 'white',
    fontWeight: theme.fontWeights.bold,
    alignSelf: 'center',
  },
});

const UpperContainer = ({ item }) => {
  return(
    <View style={styles.upperContainer}>
      <Image
        style={styles.avatar}
        source={{
          uri: item.ownerAvatarUrl,
        }}
      />
      <View style={styles.infoContainer}>
        <Text testID="fullName" style={styles.headerText}>{item.fullName}</Text>
        <Text testID="description" style={styles.descriptionText}>{item.description}</Text>
        <View style={styles.language}>
          <Text testID="language" style={styles.languageText}>{item.language}</Text>
        </View>
      </View>
    </View>
  );
};

const LowerContainer = ({ item }) => {
  return(
    <View style={styles.lowerContainer}>
      <RepositoryItemCount countName="Stars" count={item.stargazersCount} />
      <RepositoryItemCount countName="Forks" count={item.forksCount} />
      <RepositoryItemCount countName="Reviews" count={item.reviewCount} />
      <RepositoryItemCount countName="Rating" count={item.ratingAverage} />
    </View>
  );
};

const GithubButton = ({ item }) => {
  const onGithubPress = () => {
    Linking.openURL(`https://github.com/${item.fullName}`);
  };

  return(
    <TouchableWithoutFeedback onPress={onGithubPress}>
      <View style={styles.githubButton}>
        <Text style={styles.githubButtonText}>Open in GitHub</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const RepositoryItem = ({ item, history = undefined, singleRepository = false }) => {
  if (singleRepository) {
    return (
      <View testID="RepositoryItem" style={styles.itemContainer}>
        <UpperContainer item={item} />
        <LowerContainer item={item} />
        <GithubButton item={item} />
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => history.push(`/repositories/${item.id}`)}>
      <View testID="RepositoryItem" style={styles.itemContainer}>
        <UpperContainer item={item} />
        <LowerContainer item={item} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RepositoryItem;