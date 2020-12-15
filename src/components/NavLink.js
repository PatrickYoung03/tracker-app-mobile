import React from "react";

import { StyleSheet, TouchableOpacity, Text } from "react-native";

import Spacer from "./Spacer";

import { withNavigation } from "react-navigation";

const NavLink = ({ message, routeName, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer>
        <Text style={styles.signInLink}>{message}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  signInLink: {
    color: "blue",
    position: "absolute",
    bottom: "0%",
    alignSelf: "center",
  },
});

export default withNavigation(NavLink);
