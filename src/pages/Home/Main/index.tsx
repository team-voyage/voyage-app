import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, ImageBackground, Platform, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";

import colors from "@/utils/colors";

import { HomeStackParamList } from "../types";
import styles from "./styles";
import CalendarIcon from "@/assets/icons/calendar.svg";
import SendIcon from "@/assets/icons/send.svg";
import api from "@/utils/api";

type props = NativeStackScreenProps<HomeStackParamList, "Main">;
const Main = ({ navigation: homeNavigation }: props) => {
  const [hotplace, setHotplace] = React.useState<{
    spot: string;
    url: string;
    total: number;
  }[]>([]);

  if(Platform.OS === "android") {
    StatusBar.setBackgroundColor(colors.black);
    StatusBar.setBarStyle("light-content");
  }

  const getHotplace = async () => {
    const { data } = await api({
      method: "GET",
      url: "/api/survey"
    });

    const res = data.slice(0, 10);
    for(let i = 0; i < res.length; i++) {
      const item = res[i];
      try{
        const { data } = await api({
          method: "GET",
          url: `/api/getImgUrl?q=${item.spot}`,
        });
        res[i].url = data;
      } catch {
        res[i].url = "";
      }
    }
    setHotplace(res);
  };

  React.useEffect(() => {
    getHotplace();
  }, []);

  return (
    <ImageBackground 
      source={require("@/assets/images/background.png")} 
      style={styles.coverImage} 
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeareaview}>
        <View style={styles.top}>
          <View style={styles.hello}>
            <View style={styles.texts}>
              <Text style={styles.helloText}>Welcome,</Text>
              <Text style={styles.busan}>BUSAN</Text>
            </View>
            <TouchableOpacity>
              <Image source={require("@/assets/images/me.png")} style={styles.busanImage} />
            </TouchableOpacity>
          </View>

          <View style={styles.journey}>
            <TouchableOpacity style={styles.dates}>
              <CalendarIcon width={24} height={24} />
              <Text style={styles.date}>23 August, 2023</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.search} onPress={() => {
              homeNavigation.navigate("Map");
            }}>
              <Text style={styles.serachText}>create new journey</Text>
              <SendIcon width={24} height={24} />
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.bottom}>
          <Text style={styles.bottomTitle}>🔥 Hot Place</Text>
          <ScrollView style={styles.btnss}
            horizontal={true}
          >
            <View style={styles.btns}>
              {
                hotplace.map((item, index) => (
                  <TouchableOpacity style={styles.btn} key={index}>
                    <Image source={{ uri: item.url }} style={styles.btnImage} />
                    <View style={styles.titles}>
                      <Text style={styles.btnTitle}>{item.spot}</Text>
                      <Text style={styles.btnText}>{Number(item.total).toLocaleString()} people visited!</Text>
                    </View>
                  </TouchableOpacity>
                ))
              }
            </View>
          </ScrollView>
        </View>
        {/* <Text style={{ color: colors.black }}>Home/Main</Text> */}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Main;
