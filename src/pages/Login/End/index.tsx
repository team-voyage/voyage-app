import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";

import BackIcon from "@/assets/icons/back.svg";
import CarIcon from "@/assets/icons/car.svg";

import { LoginStackParamList } from "../types";
import styles from "./styles";

type props = NativeStackScreenProps<LoginStackParamList, "Local">;
const Local = ({ navigation }: props) => {
  return (
    <SafeAreaView style={{width: "100%", height: "100%"}}>
      <View style={styles.top}>
        <TouchableOpacity 
          onPress={() => {
            navigation.goBack();
          }}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <BackIcon width={20} height={20} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.middle}>
        <CarIcon width={128} height={100} />
        <View>
          <Text style={styles.title}>Your travel destination has been set up.</Text>
          <Text style={styles.title}>Let’s find out about my travel destination!</Text>
        </View>
      </View>

      <View style={styles.bottom}>
        <View style={styles.circles}>
          <View style={styles.circle} />
          <View style={styles.circle} />
          <View style={[styles.circle, styles.circleThis]} />
        </View>
        <TouchableOpacity 
          style={styles.next} 
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Local;
