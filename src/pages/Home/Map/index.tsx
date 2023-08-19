import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Platform, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";

import colors from "@/utils/colors";
import PrevIcon from "@/assets/icons/prev.svg";
import CalendarIcon from "@/assets/icons/calendarblack.svg";
import DistanceIcon from "@/assets/icons/distance.svg";
import XWhiteIcon from "@/assets/icons/xwhite.svg";

import { HomeStackParamList } from "../types";
import BackMap from "@/components/BackMap";
import styles from "./styles";
import { atom, useRecoilState } from "recoil";

export const listAtom = atom({
  key: "listAtom",
  default: [
    {
      name: "부산광역시 해운대구 우동",
      latitude: 35.13033261235449,
      longitude: 129.11098801797002,
    },
    {
      name: "부산광역시 해운대구 우동2",
      latitude: 35.13133261235449,
      longitude: 129.21098801797002,
    }
  ],
});

type props = NativeStackScreenProps<HomeStackParamList, "Map">;
const Map = ({ navigation }: props) => {
  const [list, setList] = useRecoilState(listAtom);

  if(Platform.OS === "android") {
    StatusBar.setBackgroundColor(colors.white);
    StatusBar.setBarStyle("dark-content");
  }

  return (
    <SafeAreaView style={{width: "100%", height: "100%"}}>
      {/* <Menu navigation={homeNavigation} /> */}
      <View style={styles.top}>
        <TouchableOpacity
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
          onPress={() => navigation.goBack()}
        >
          <PrevIcon width={10} height={20} />
        </TouchableOpacity>
        <View style={styles.topMiddle}>
          <DistanceIcon width={15} height={15} />
          <Text style={styles.topMiddleText}>부산광역시 해운대구 우동</Text>
        </View>
        <View style={styles.topRight} />
      </View>
      <BackMap />
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.dates}>
          <CalendarIcon width={24} height={24} />
          <Text style={styles.date}>23 August, 2023</Text>
        </TouchableOpacity>


        <View style={styles.destinations}>
          {
            list.map((item, i) => (
              <View 
                style={styles.dest_cover1}
                key={i}
              >
                <Text style={styles.dest_btn1}>{item.name}</Text>
                <TouchableOpacity
                  hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
                  onPress={() => {
                    setList(list.filter((_, j) => j !== i));
                  }}
                >
                  <XWhiteIcon width={20} height={20} />
                </TouchableOpacity>
              </View>
            ))
          }
          {
            list.length < 2 ? Array(2 - list.length).fill(0).map((_, i) => (
              <TouchableOpacity 
                style={styles.dest_cover}
                key={i}
                onPress={() => {
                  navigation.navigate("Search");
                }}
              >
                <Text style={styles.dest_btn}>Select a place to visit</Text>
              </TouchableOpacity>
            )) : <></>
          }
          
          <TouchableOpacity 
            style={styles.dest_cover}
            hitSlop={{ top: 7, bottom: 12 }}
            onPress={() => {
              navigation.navigate("Search");
            }}
          >
            <Text style={styles.add}>+ add destination</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btn_text}>create</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Map;
