import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import colors from "@/utils/colors";

import { PodStackParamList } from "../types";
import styles from "./styles";
import Settings from "@/assets/icons/settings.svg";

type props = NativeStackScreenProps<PodStackParamList, "Game">;
const Game = ({ navigation: gameNavigation }: props) => {
  
  if(Platform.OS === "android") {
    StatusBar.setBackgroundColor(colors.black);
    StatusBar.setBarStyle("light-content");
  }

  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.statusBar} />
      <SafeAreaView style={styles.container}>
      
      </SafeAreaView>
    </View>
  );
};

export default Game;