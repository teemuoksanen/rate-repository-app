import { useContext } from 'react';
import { useMutation, useApolloClient } from "@apollo/react-hooks";

import { AUTHORIZE } from "../graphql/mutations";
import AuthStorageContext from '../contexts/AuthStorageContext';

const useSignIn = () => {
  const authStorage = useContext(AuthStorageContext);
  const [mutate, result] = useMutation(AUTHORIZE);
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({ variables: { username, password } });
    await authStorage.setAccessToken(data.authorize.accessToken);
    apolloClient.resetStore();
  };

  return [signIn, result];
};

export default useSignIn;