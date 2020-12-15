import React, { useState } from "react";

import { StyleSheet } from "react-native";

import { Input, Text, Button } from "react-native-elements";

import Spacer from "./Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Spacer />
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
        label="Email"
      ></Input>
      <Spacer />
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={setPassword}
        label="Password"
        secureTextEntry
      ></Input>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <Spacer />
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    fontSize: 16,
    color: "red",
  },
});

export default AuthForm;
