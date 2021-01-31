import React, { useContext } from "react";

import { StyleSheet, View } from "react-native";

import { NavigationEvents } from "react-navigation";

import Spacer from "../components/Spacer";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

import { Context as AuthContext } from "../context/AuthContext";

const SigninScreen = () => {
  const { signin, state, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign In to Tracker"
        onSubmit={signin}
        submitButtonText="Sign In"
        errorMessage={state.errorMessage}
      />
      <Spacer />
      <NavLink message="Don't have an account? Sign Up" routeName="signup" />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return { headerShown: false };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "30%",
  },
});

export default SigninScreen;
