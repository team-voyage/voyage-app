import React from "react";
import { View } from "react-native";
import styles from "./styles";
import MapView, { Marker, Polyline } from "react-native-maps";
import { latlongAtom, listAtom } from "@/pages/Home/Map";
import { useRecoilState, useRecoilValue } from "recoil";

const BackMap = () => {
  const list = useRecoilValue(listAtom);
  const [latlong, setLatlong] = useRecoilState(latlongAtom);

  React.useEffect(() => {
    if(!list.length) return;
    const latitudeAvg = list.reduce((acc, cur) => acc + cur.latitude, 0) / list.length;
    const longitudeAvg = list.reduce((acc, cur) => acc + cur.longitude, 0) / list.length;
    setLatlong({
      latitude: latitudeAvg,
      longitude: longitudeAvg,
    });
  }, []);

  return (
    <View style={styles.map}>
      <MapView
        initialRegion={{
          latitude: latlong.latitude,
          longitude: latlong.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        region={{
          latitude: list.length? latlong.latitude : 35.13033261235449,
          longitude: list.length ? latlong.longitude : 129.11098801797002,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
        onRegionChangeComplete={(region) => {
          setLatlong({
            latitude: region.latitude,
            longitude: region.longitude,
          });
        }}
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