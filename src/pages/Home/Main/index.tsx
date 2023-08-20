import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, ImageBackground, Platform, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";

import colors from "@/utils/colors";

import { HomeStackParamList } from "../types";
import styles from "./styles";
import CalendarIcon from "@/assets/icons/calendar.svg";
import SendIcon from "@/assets/icons/send.svg";
import api from "@/utils/api";
import LoadingSpinner from "@/components/LoadingSpinner";
import { atom, useRecoilState } from "recoil";
import { listAtom } from "../Map";

export const hotplaceAtom = atom<{
  spot: string;
  url: string;
  total: number;
}[]>({
  key: "hotplaceAtom",
  default: [],
});

type props = NativeStackScreenProps<HomeStackParamList, "Main">;
const Main = ({ navigation: homeNavigation }: props) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [list, setList] = useRecoilState(listAtom);

  const [hotplace, setHotplace] = useRecoilState(hotplaceAtom);

  if(Platform.OS === "android") {
    StatusBar.setBackgroundColor(colors.black);
    StatusBar.setBarStyle("light-content");
  }

  const getHotplace = async () => {
    if(hotplace.length !== 0) return;
    setLoading(true);
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
    setLoading(false);
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
      <LoadingSpinner show={loading} />
      
      <SafeAreaView style={styles.safeareaview}>
        <View style={styles.top}>
          <View style={styles.hello}>
            <View style={styles.texts}>
              <Text style={styles.helloText}>Welcome,</Text>
              <Text style={styles.busan}>BUSAN</Text>
            </View>
            <TouchableOpacity onPress={() => {
              homeNavigation.navigate("Pod");
            }}>
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
          <Text style={styles.bottomTitle}>👍 best course</Text>
          <ScrollView style={styles.btnss}
            horizontal={true}
          >
            <View style={styles.btns}>
              {
                hotplace.map((item, index) => (
                  <TouchableOpacity style={styles.btn} key={index} onPress={async () => {
                    setLoading(true);
                    try{
                      const { data: addressData } = await api({
                        method: "post",
                        url: "/api/search",
                        data: {
                          location: item.spot,
                        }
                      });
                      const { address } = addressData[0];
                      const { data } = await api({
                        method: "post",
                        url: "/api/location",
                        data: {
                          address: address,
                        }
                      });
                      setList([...list, {
                        name: item.spot,
                        address: address,
                        latitude: parseFloat(data[0].y),
                        longitude: parseFloat(data[0].x),
                      }]);
                      homeNavigation.navigate("Map");
                    }
                    catch {
                      console.log("error");
                    }
                    setLoading(false);
                  }}>
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
