import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, Text } from "react-native";

import colors from "@/utils/colors";

import { HomeStackParamList } from "../types";
import BackMap from "@/components/BackMap";

type props = NativeStackScreenProps<HomeStackParamList, "Map">;
const Map = ({ navigation: homeNavigation }: props) => {
  return (
    <SafeAreaView style={{width: "100%", height: "100%"}}>
      {/* <Menu navigation={homeNavigation} /> */}
      <BackMap />
      <Text style={{ color: colors.black }}>Home/Map</Text>
    </SafeAreaView>
  );
};

export default Map;
