import { useQuery } from '@apollo/client';

import { GET_REPOSITORY } from '../graphql/queries';

const useSingleRepository = ({ id }) => {
  const { data, ...result } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: { id },
  });

  return { repository: data ? data.repository : undefined, ...result };
};

export default useSingleRepository;