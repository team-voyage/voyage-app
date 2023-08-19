import React, { Fragment, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";

import colors from "@/utils/colors";

import { PodStackParamList } from "../types";
import UndoIcon from "@/assets/icons/undo.svg";
import CommunityIcon from "@/assets/icons/community.svg";
import SendIcon from "@/assets/icons/send.svg";
import styles from "./styles";

type props = NativeStackScreenProps<PodStackParamList, "Message">;
const Message = ({ navigation: messageNavigation, route }: props) => {

  const [messages, setMessages] = useState<{
    sender: string;
    message: string;
    time: string;
  }[]>([]);
  const [message, setMessage] = useState("");

  if(Platform.OS === "android") {
    StatusBar.setBackgroundColor(colors.black);
    StatusBar.setBarStyle("light-content");
  }

  const messageBox = (sender: string, message: string, time: string) => {
    return (
      <View style={styles.message}>
        <View style={styles.sender}>
          <Text>{ sender }</Text>
        </View>
        <View style={styles.stack}>
          <Text style={styles.time}>{ time }</Text>
          <View style={styles.msgContent}>
            <Text style={styles.msgText}>{ message }</Text>
          </View>
          <View style={styles.profile}/>
        </View>
      </View>
    );
  };

  const gameBox = () => {
    return (
      <View style={styles.game}>
        <Text style={styles.gameStatus}>All the members are gathered.</Text>
        <TouchableOpacity onPress={() => messageNavigation.navigate("Game")}>
          <View style={styles.gameStart}>
            <Text style={styles.gameStartText}>Start the mini game!</Text>
          </View>
        </TouchableOpacity>
        
        {/* <TouchableOpacity> */}

        {/* </TouchableOpacity> */}
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
                messageNavigation.navigate("Main");
              }}>
                <UndoIcon />
              </TouchableOpacity>
              <Text style={styles.titleText}> { route.params.name } </Text>
              <TouchableOpacity onPress={() => {
                // messageNavigation.goBack();
              }}>
                <CommunityIcon />
              </TouchableOpacity>
            </View>
            
            <View style={styles.content}>
              {
                messages.map((message) => {
                  return (
                    messageBox(message.sender, message.message, message.time)
                  );
                }
                )
              }
              { gameBox() }
              <View style={styles.textbox}>
                <TextInput
                  style={styles.textInput}
                  value={message}
                  onChangeText={(text) => setMessage(text)}
                  placeholder="아무거나 입력해주세요."
                />
                <TouchableOpacity onPress={() => {

                  if(message === "") return;
                  const time = new Date();
                  setMessages([...messages, {
                    sender: "Kim Hyoung Seok",
                    message: message,
                    time: time.getHours() + ":" + time.getMinutes()
                  }]); 
                  setMessage("");
                }}>
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
