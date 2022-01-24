import { useMutation } from '@apollo/client';

import { CREATE_USER } from '../graphql/mutations';

const useCreateUser = () => {
  const [mutate, result] = useMutation(CREATE_USER);

  const createUser = async ({ username, password }) => {
    const user = { username, password };
    const payload = await mutate({ variables: { user } });
    return payload;
  };

  return [createUser, result];
};

export default useCreateUser;