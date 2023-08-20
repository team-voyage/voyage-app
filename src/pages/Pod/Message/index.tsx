import React, { Fragment, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Platform, SafeAreaView, StatusBar, Text, View, TouchableOpacity, TextInput, Image } from "react-native";

import colors, { opacity } from "@/utils/colors";

import { PodStackParamList } from "../types";
import UndoIcon from "@/assets/icons/undo.svg";
import CommunityIcon from "@/assets/icons/community.svg";
import CloseIcon from "@/assets/icons/xx.svg";
import SendIcon from "@/assets/icons/send.svg";
import styles from "./styles";

type props = NativeStackScreenProps<PodStackParamList, "Message">;
const Message = ({ navigation: messageNavigation, route }: props) => {
  const [modal, setModal] = useState(false);

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
      {
        modal && (
          <View style={styles.modal}>
            <View style={styles.modalBackground}>
              <View style={styles.modalTitle}>
                <View style={{ width: 24, height: 24 }} />
                <Text style={styles.modalTitleText}>member</Text>
                <TouchableOpacity 
                  onPress={() => setModal(false)}
                  hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
                >
                  <CloseIcon width={24} height={24} />
                </TouchableOpacity>
              </View>

              <View style={styles.modalContent}>
                {
                  [
                    {
                      name: "Kim Hyung Seok (me)",
                      Image: require("@/assets/images/kim.png")
                    },
                    {
                      name: "Choi Jae Min",
                      Image: require("@/assets/images/choi.png")
                    },
                    {
                      name: "Lim Ji Hoon",
                      Image: require("@/assets/images/lim.png")
                    }
                  ].map((member, i) => (
                    <View style={styles.mdcontent} key={i}>
                      <View style={styles.leftSide}>
                        <Image 
                          style={styles.profiles} 
                          source={member.Image} 
                        />
                        <Text style={styles.name}>{member.name}</Text>
                      </View>
                      <View style={styles.rightSide}>
                        <Text style={styles.arrived}>arrived</Text>
                      </View>
                    </View>
                  ))
                }
                <View style={styles.mdcontent}>
                  <View style={styles.leftSide}>
                    <Image 
                      style={styles.profiles} 
                      source={require("@/assets/images/pp.png")} 
                    />
                    <Text style={{...styles.name, opacity: .3}}>Find a new member</Text>
                  </View>
                  <View style={styles.rightSide}>
                    <Text style={{...styles.arrived, opacity: 0}}>arrived</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )
      }
      <SafeAreaView style={styles.statusBar} />
      <SafeAreaView style={styles.container}>
        <View style={styles.background}>
          <SafeAreaView style={styles.safeareaview}>
            <View style={styles.title}>
              <TouchableOpacity 
                onPress={() => {
                  messageNavigation.navigate("Main");
                }}
                hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
              >
                <UndoIcon />
              </TouchableOpacity>
              <Text style={styles.titleText}> { route.params.name } </Text>
              <TouchableOpacity 
                onPress={() => {
                  setModal(true);
                }}
                hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
              >
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
                  placeholder="Message..."
                  placeholderTextColor={opacity(colors.black, .5)}
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
