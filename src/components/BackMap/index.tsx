import React from "react";
import { View } from "react-native";
import styles from "./styles";
import MapView, { Marker, Polyline } from "react-native-maps";
import { listAtom } from "@/pages/Home/Map";
import { useRecoilValue } from "recoil";

const BackMap = () => {
  const list = useRecoilValue(listAtom);
  
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
      >
        {
          list.map((item, i) => (
            <Marker
              key={i}
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
              }}
              title={item.name}
              description={item.name}
            />
          ))
        }
        {
          list.length > 1 && (
            <Polyline
              coordinates={list}
              strokeColor="#000"
              strokeWidth={2}
            />
          )
        }
      </MapView>
    </View>
  );
};

export default BackMap;