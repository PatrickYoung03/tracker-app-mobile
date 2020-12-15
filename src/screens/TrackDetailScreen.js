import React from "react";

import { View, StyleSheet, Button } from "react-native";

const TrackDetailScreen = ({ navigation }) => {
  return (
    <>
      <Button
        title="Go to track list"
        onPress={() => navigation.navigate("TrackList")}
      ></Button>
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackDetailScreen;
