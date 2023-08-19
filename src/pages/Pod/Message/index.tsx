import React, { Fragment } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";

import colors from "@/utils/colors";

import { PodStackParamList } from "../types";
import UndoIcon from "@/assets/icons/undo.svg";
import CommunityIcon from "@/assets/icons/community.svg";
import SendIcon from "@/assets/icons/send.svg";

import styles from "./styles";

type props = NativeStackScreenProps<PodStackParamList, "Message">;
const Message = ({ navigation: messageNavigation }: props) => {
  
  if(Platform.OS === "android") {
    StatusBar.setBackgroundColor(colors.black);
    StatusBar.setBarStyle("light-content");
  }


  const messageBox = (sender: string, message: string, time: string) => {
    return (
      <View style={styles.message}>
        <View style={{marginRight: 48}}>
          <Text>{ sender }</Text>
        </View>
        <View style={styles.stack}>
          <Text>{ time }</Text>
          <View style={styles.msgContent}>
            <Text>{ message }</Text>
          </View>
          <View style={styles.profile}/>
        </View>
      </View>
    );
  };

  return (
    <Fragment>
      <SafeAreaView style={styles.statusBar} />
      <SafeAreaView style={styles.container}>
        <View style={styles.background}>
          <SafeAreaView style={styles.safeareaview}>
            <View style={styles.title}>
              <TouchableOpacity onPress={() => {
                // messageNavigation.goBack();
              }}>
                <UndoIcon />
              </TouchableOpacity>
              <Text style={styles.titleText}>Haeundae!!🔥</Text>
              <TouchableOpacity onPress={() => {
                // messageNavigation.goBack();
              }}>
                <CommunityIcon />
              </TouchableOpacity>
            </View>
            
            <View style={styles.content}>
              { messageBox("나", "안녕하세요", "오후 3:00") }

              <View style={styles.textbox}>
                <TextInput style={styles.input}  placeholder="Message..." />
                <TouchableOpacity>
                  <View style={styles.send}>
                    <SendIcon />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </View>
      </SafeAreaView>
    </Fragment>
    
  );
};

export default Message;
