import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../graphql/queries';

const useCurrentUser = (variables) => {
  const { data, loading, ...result } = useQuery(GET_CURRENT_USER, {
    fetchPolicy: 'cache-and-network',
    variables,
  });

  return {
    authorizedUser: data ? data.authorizedUser : undefined,
    loading,
    ...result,
  };
};

export default useCurrentUser;