import React, { Fragment } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import colors from "@/utils/colors";

import { PodStackParamList } from "../types";
import styles from "./styles";
import Settings from "@/assets/icons/settings.svg";

import User1 from "@/assets/thumbnails/user1.svg";
import User2 from "@/assets/thumbnails/user2.svg";
import User3 from "@/assets/thumbnails/user3.svg";
import User4 from "@/assets/thumbnails/user4.svg";
import User5 from "@/assets/thumbnails/user5.svg";
import User6 from "@/assets/thumbnails/user6.svg";

type props = NativeStackScreenProps<PodStackParamList, "Main">;
const Main = ({ navigation: podNavigation }: props) => {
  
  if(Platform.OS === "android") {
    StatusBar.setBackgroundColor(colors.black);
    StatusBar.setBarStyle("light-content");
  }

  const user = (name: string, image: string, status: string, time: string, notification: number) => {

    const userStyle = StyleSheet.create({
      frame: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      userImage: {
        width: 64,
        height: 64,
      },
      profile: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
      },
      info: {
        display: "flex", 
        gap: 4
      },
      name: {
        fontSize: 16,
        fontWeight: "600"
      },
      status: {
        fontSize: 12,
        fontWeight: "400"
      },
      time: {
        fontSize: 8,
        fontWeight: "400",
      },
      notification: {
        fontSize: 8,
        fontWeight: "700",
        color: colors.white,
      },
      notice: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        padding: 8,
        backgroundColor: colors.black,
      },
      new: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 12
      }
    });
    return (
      <TouchableOpacity onPress={() => 
        podNavigation.navigate("Message", {
          name: name
        })
      }>
        <View style={userStyle.frame}>
          <View style={userStyle.profile}>

            {/* 굉장히 비효율적인 코드 */}
            { 
              image === "user1" ? <User1 style={userStyle.userImage} /> :
                image === "user2" ? <User2 style={userStyle.userImage} /> :
                  image === "user3" ? <User3 style={userStyle.userImage} /> :
                    image === "user4" ? <User4 style={userStyle.userImage} /> :
                      image === "user5" ? <User5 style={userStyle.userImage} /> :
                        <User6 style={userStyle.userImage} />
            }
          
            <View style={userStyle.info}>
              <Text style={userStyle.name}>{ name }</Text>
              <Text style={userStyle.status}>{ status }</Text>
            </View>
          </View>
          <View  style={userStyle.new}>
            <Text style={userStyle.time}>{ time }</Text>
            <View style={userStyle.notice}>
              <Text style={userStyle.notification}>{ notification }</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Fragment>
      <SafeAreaView style={styles.statusBar} />
      <SafeAreaView style={styles.container}>
        <View style={styles.background}>
          <SafeAreaView style={styles.safeareaview}>
            <View style={styles.title}>
              <Text style={styles.titleText}>My Pod</Text>
              <TouchableOpacity
                hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
                onPress={() => {
                  podNavigation.navigate("Settings");
                }}
              >
                <Settings />
              </TouchableOpacity>
            </View>
            <View style={styles.content}>
              { user("Haeundae!!🔥", "user1", "The payment has been completed.", "13:01 PM", 2) }
              { user("Let’s go BuSaN", "user2", "The payment has been completed.", "13:01 PM", 2) }
              { user("Haeridan-gil", "user3", "The payment has been completed.", "13:01 PM", 2) }
              { user("Let's go to Busan🔥", "user4", "The payment has been completed.", "13:01 PM", 2) }
              { user("Gyeongju🔥", "user5", "The payment has been completed.", "13:01 PM", 2) }
              { user("Oh My Seoul", "user6", "The payment has been completed.", "13:01 PM", 2) }
            </View>
          </SafeAreaView>
        </View>
      </SafeAreaView>
    </Fragment>
    
  );
};

export default Main;
