import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import SingleRepository from './SingleRepository';
import MyReviews from './MyReviews';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SignOut from './SignOut';
import Review from './Review';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/repositories/:id">
          <SingleRepository />
        </Route>
        <Route path="/review" exact>
          <Review />
        </Route>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/myreviews" exact>
          <MyReviews />
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/signout" exact>
          <SignOut />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;