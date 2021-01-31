import React, { useContext } from "react";

import { View, StyleSheet } from "react-native";

import { Button, Text } from "react-native-elements";

import Spacer from "../components/Spacer";

import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text h1>Account Screen</Text>

      <Spacer />

      <Spacer>
        <Button onPress={signout} title="Sign Out"></Button>
      </Spacer>
    </View>
  );
};

AccountScreen.navigationOptions = () => {
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

export default AccountScreen;
