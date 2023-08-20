import React, { Fragment } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Platform, SafeAreaView, StatusBar, Text, View, TouchableOpacity } from "react-native";

import colors from "@/utils/colors";
import ClosesIcon from "@/assets/icons/closes.svg";

import { PodStackParamList } from "../types";

import styles from "./styles";
import { RNCamera } from "react-native-camera";

type props = NativeStackScreenProps<PodStackParamList, "Camera">;
const Camera = ({ navigation: messageNavigation }: props) => {
  if(Platform.OS === "android") {
    StatusBar.setBackgroundColor(colors.black);
    StatusBar.setBarStyle("light-content");
  }

  return (
    <>
      <RNCamera
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        captureAudio={false}
        androidCameraPermissionOptions={{
          title: "Permission to use camera",
          message: "We need camera permission to carry out the mission in the app.",
          buttonPositive: "Ok",
          buttonNegative: "Cancel",
        }}
      />
      <View style={styles.camContain}>
        <View style={styles.cameraHeader} />
      </View>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.top}>
          <TouchableOpacity 
            onPress={() => messageNavigation.goBack()}
            hitSlop={{
              top: 20,
              bottom: 20,
              left: 20,
              right: 20,
            }}
          >
            <ClosesIcon width={30} height={30} />
          </TouchableOpacity>
        </View>        
        <View style={styles.bottom}>
          <Text style={styles.text}>Take a picture of &apos;Subway&apos;!</Text>
          <TouchableOpacity 
            style={styles.chaptO}
            onPress={() => messageNavigation.goBack()}
          >
            <View style={styles.chapt}/>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Camera;
