import React from 'react';
import { useParams } from 'react-router-native';

import useSingleRepository from '../hooks/useSingleRepository';
import RepositoryItem from './RepositoryItem';
import Text from './Text';

export const SingleRepositoryContainer = ({ item }) => {
  return (
    <RepositoryItem
      item={item}
      singleRepository="true"
    />
  );
};

const SingleRepository = () => {
  const { id } = useParams();
  const { repository } = useSingleRepository({ id });
  if (!repository) {
    return (<Text>Loading repository...</Text>);
  }
  return <SingleRepositoryContainer item={repository} />;
};

export default SingleRepository;