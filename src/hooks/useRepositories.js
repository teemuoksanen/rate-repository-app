import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const [repositories, setRepositories] = useState([]);
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    // Other options
  });

  useEffect(() => {
    const fetchedRepositories = data ? data.repositories : [];
    setRepositories(fetchedRepositories);
  }, [data]);

  return { repositories, loading };
};

export default useRepositories;
