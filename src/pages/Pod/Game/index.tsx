import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from "react-native";

import colors from "@/utils/colors";

import { PodStackParamList } from "../types";
import styles from "./styles";
import PrevIcon from "@/assets/icons/backWhite.svg";

import CloudIcon from "@/assets/icons/cloud.svg";
import ThunderIcon from "@/assets/icons/thunder.svg";
import SunIcon from "@/assets/icons/sun.svg";
import GoastIcon from "@/assets/icons/goast.svg";

const rankerData = [
  {
    name: "Kim Hyung Seok",
    point: 1233,
    color: "#7BD0FF",
  },
  {
    name: "Lim Ji Hoon",
    point: 876,
    color: "#FFC700",
  },
  {
    name: "Choi Jae Min",
    point: 654,
    color: "#FF7C7C",
  }
];

const getRankerPointMax = () => {
  let max = 0;
  rankerData.forEach((ranker) => {
    if(ranker.point > max) {
      max = ranker.point;
    }
  });
  return max;
};

type props = NativeStackScreenProps<PodStackParamList, "Game">;
const Game = ({ navigation: gameNavigation }: props) => {
  
  if(Platform.OS === "android") {
    StatusBar.setBackgroundColor(colors.black);
    StatusBar.setBarStyle("light-content");
  }

  return (
    <View style={styles.warpper}>
      <SafeAreaView style={styles.warpper}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.top}>
            <TouchableOpacity 
              onPress={() => {
                gameNavigation.goBack();
              }}
              hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            >
              <PrevIcon width={24} height={24} />
            </TouchableOpacity>
            <View style={styles.timeDiv}>
              <Text style={styles.time}>time</Text>
              <Text style={styles.timeData}>09:54</Text>
            </View>
          </View>

          <View style={styles.titleDiv}>
            <View style={styles.icons}>
              <CloudIcon width={24} height={24} />
              <ThunderIcon width={24} height={24} />
              <SunIcon width={24} height={24} />
              <GoastIcon width={24} height={24} />
            </View>
            <Text style={styles.title}>Mini game</Text>
          </View>

          <View style={styles.ticket}>
            <View style={styles.ticketLeft}>
              <Text style={styles.ticketText}>1st PRIZE 🏆</Text>
              <Image style={styles.ticketImage} source={require("@/assets/images/subway.png")} />
              <Text style={styles.ticketText2}>DISCOUNT COUPON</Text>
            </View>
            <View style={styles.ticketRight}>
              <Text style={styles.ticketText3}>5%</Text>
              <Text style={styles.ticketText3}>OFF</Text>
            </View>
          </View>

          <View style={styles.rankingDiv}>
            <Text style={styles.ranking}>Ranking</Text>
            {
              rankerData.map((ranker, index) => (
                <View style={styles.ranker} key={index}>
                  <View style={{
                    ...styles.rankerInner,
                    width: `${ranker.point / getRankerPointMax() * 90}%`,
                    backgroundColor: ranker.color,
                  }}>
                    <Text style={styles.rankerText}>{ranker.name}</Text>
                    <Text style={styles.rankerText}>{ranker.point.toLocaleString()}P</Text>
                  </View>
                </View>
              ))
            }
          </View>

          <View style={styles.gameDiv}>
            <Text style={styles.gameTitle}>Mission 1</Text>
            <Image style={styles.ticketImage2} source={require("@/assets/images/subway.png")} />
            <Text style={styles.gameCont1}>There&apos;s a &apos;SUBWAY&apos; nearby!</Text>
            <Text style={styles.gameCont2}>Who will be the first to take the sign of Subway?</Text>
            <TouchableOpacity
              style={styles.gameButton}
              onPress={() => {
                gameNavigation.navigate("Camera");
              }
              }
            >
              <Text style={styles.gameButtonText}>Start</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.gameButtonText2}>SKIP &gt;&gt;</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Game;