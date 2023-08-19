import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import MapView from "react-native-maps";

const BackMap = () => {
  return (
    <View style={styles.map}>
      <MapView
        initialRegion={{
          latitude: 35.13033261235449,
          longitude: 129.11098801797002,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
      />
    </View>
  );
};

export default BackMap;