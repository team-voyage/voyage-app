import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, Text } from "react-native";

import colors from "@/utils/colors";

import { HomeStackParamList } from "../types";

type props = NativeStackScreenProps<HomeStackParamList, "Recipe">;
const Recipe = ({ navigation: homeNavigation }: props) => {
  return (
    <SafeAreaView style={{width: "100%", height: "100%"}}>
      {/* <Menu navigation={homeNavigation} /> */}
      <Text style={{ color: colors.black }}>Home/Recipe</Text>
    </SafeAreaView>
  );
};

export default Recipe;
