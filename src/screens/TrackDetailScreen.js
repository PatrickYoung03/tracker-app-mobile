import React, { useContext } from "react";

import { StyleSheet, Button } from "react-native";

import { Context as TrackContext } from "../context/TrackContext";

import Mapview, { Polyline } from "react-native-maps";

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);

  const _id = navigation.getParam("_id");

  const track = state.find((t) => t._id === _id);
  const initialCoords = track.location[0].coords;

  return (
    <>
      <Text style={{ fontSize: 36 }}>{track.name}</Text>
      <Mapview
        styles={styles.map}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords,
        }}
      >
        <Polyline
          coordinates={track.locations.coords.map((loc) => loc.coords)}
        />
      </Mapview>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default TrackDetailScreen;
