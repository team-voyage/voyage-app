import React, { Fragment } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";

import colors from "@/utils/colors";

import { PodStackParamList } from "../types";

import styles from "./styles";

type props = NativeStackScreenProps<PodStackParamList, "Camera">;
const Camera = ({ navigation: messageNavigation }: props) => {
  if(Platform.OS === "android") {
    StatusBar.setBackgroundColor(colors.black);
    StatusBar.setBarStyle("light-content");
  }

  return (
    <SafeAreaView style={{ width: "100%", height: "100%" }}>
    </SafeAreaView>
  );
};

export default Camera;
