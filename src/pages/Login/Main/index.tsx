import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import KakaoIcon from "@/assets/icons/kakao.svg";

import { LoginStackParamList } from "../types";
import styles from "./styles";

type props = NativeStackScreenProps<LoginStackParamList, "Main">;
const Main = ({ navigation }: props) => {
  return (
    <SafeAreaView style={{width: "100%", height: "100%"}}>
      <View style={styles.top}>
        <Text style={styles.title}>Experience the World,</Text>
        <Text style={styles.title}>with trivy</Text>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.kakao} onPress={() => {
          navigation.navigate("Local");
        }}>
          <KakaoIcon width={20} height={20} />
          <Text style={styles.kakaoText}>Start with Kakao Talk</Text>
        </TouchableOpacity>
        <Text style={styles.another}>Log in another way</Text>
      </View>
    </SafeAreaView> 
  );
};

export default Main;
