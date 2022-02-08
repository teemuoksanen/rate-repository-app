import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../graphql/queries';

const useCurrentUser = (variables) => {
  const { data } = useQuery(GET_CURRENT_USER, {
    fetchPolicy: 'cache-and-network',
    variables,
  });

  return {
    authorizedUser: data ? data.authorizedUser : undefined,
  };
};

export default useCurrentUser;