import React, { useContext } from "react";

import { StyleSheet, View } from "react-native";

import { NavigationEvents } from "react-navigation";

import Spacer from "../components/Spacer";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />

      <AuthForm
        headerText="Sign Up to Tracker"
        onSubmit={signup}
        submitButtonText="Sign Up"
        errorMessage={state.errorMessage}
      />
      <Spacer />
      <NavLink message="Already a member? Sign In" routeName="signin" />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
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

export default SignupScreen;
