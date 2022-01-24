import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import { useHistory } from 'react-router-native';
import * as yup from 'yup';

import useCreateUser from '../hooks/useCreateUser';
import useSignIn from '../hooks/useSignIn';
import SignUpForm from './SignUpForm';

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
};

const validationSchema = yup.object().shape({
  username: yup.string()
    .required('Username is required')
    .min(1, 'Username must be 1-30 characters')
    .max(30, 'Username must be 1-30 characters'),
  password: yup.string()
    .required('Password is required')
    .min(5, 'Password must be 1-30 characters')
    .max(50, 'Password must be 1-30 characters'),
  passwordConfirmation: yup.string()
    .oneOf([yup.ref('password'), null], 'Password and confirmation must match')
    .required('Password is required'),
});

export const SignUpContainer = ({ onSubmit }) => (
  <View>
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  </View>  
);

const SignUp = () => {
  const [createUser] = useCreateUser();
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const user = { username: values.username, password: values.password };

    try {
      const { data } = await createUser(user);
      if (data) {
        await signIn(user);
        history.push('/');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignUpContainer onSubmit={onSubmit} />
  );
};

export default SignUp;