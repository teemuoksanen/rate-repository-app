import React from 'react';
import { useHistory } from 'react-router-native';

import useSignOut from '../hooks/useSignOut';

const SignOut = () => {
  const [signOut] = useSignOut();
  const history = useHistory();

  try {
    signOut();
    history.push('/');
  } catch (e) {
    console.log(e);
  }

  return null;
};

export default SignOut;