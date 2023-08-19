import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Platform, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";

import colors from "@/utils/colors";
import PrevIcon from "@/assets/icons/prev.svg";
import CalendarIcon from "@/assets/icons/calendarblack.svg";
import DistanceIcon from "@/assets/icons/distance.svg";

import { HomeStackParamList } from "../types";
import BackMap from "@/components/BackMap";
import styles from "./styles";
import { SwippableModalRefType } from "react-native-swippable-modal";

type props = NativeStackScreenProps<HomeStackParamList, "Map">;
const Map = ({ navigation: homeNavigation }: props) => {
  if(Platform.OS === "android") {
    StatusBar.setBackgroundColor(colors.white);
    StatusBar.setBarStyle("dark-content");
  }

  const modalRef = React.useRef<SwippableModalRefType>(null);
  React.useEffect(() => {
    modalRef.current?.show();
  }, []);

  return (
    <SafeAreaView style={{width: "100%", height: "100%"}}>
      {/* <Menu navigation={homeNavigation} /> */}
      <View style={styles.top}>
        <TouchableOpacity
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
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
          <TouchableOpacity style={styles.dest_cover}>
            <Text style={styles.dest_btn}>Select a place to visit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dest_cover}>
            <Text style={styles.dest_btn}>Select a place to visit</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.dest_cover}
            hitSlop={{ top: 7, bottom: 12 }}
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
