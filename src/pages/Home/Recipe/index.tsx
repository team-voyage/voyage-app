import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Platform, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";

import colors from "@/utils/colors";
import BackWhiteIcon from "@/assets/icons/backWhite.svg";
import ToIcon from "@/assets/icons/to.svg";
import PluseIcon from "@/assets/icons/pluse.svg";

import { HomeStackParamList } from "../types";
import styles from "./styles";
import { useRecoilState } from "recoil";
import { listAtom } from "../Map";
import { taxiByAddr } from "@/utils/api";
import LoadingSpinner from "@/components/LoadingSpinner";

type props = NativeStackScreenProps<HomeStackParamList, "Recipe">;
const Recipe = ({ navigation }: props) => {
  const [list, setList] = useRecoilState(listAtom);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [sum, setSum] = React.useState(0);
  const [listCopy, setListCopy] = React.useState<{
    no: number;
    start: string;
    goal: string;
    time: string;
    amount: number;
  }[]>([]);

  if(Platform.OS === "android") {
    StatusBar.setBackgroundColor(colors.black);
    StatusBar.setBarStyle("light-content");
  }

  React.useEffect(() => {
    setListCopy([]);
    setSum(0);
    list.map(async (item, index) => {
      if(index === 0) setLoading(true);
      if(index === list.length - 1) return;
      const amount = await getTaxiAmount(item.address, list[index + 1].address);
      setSum((p) => p + parseInt(amount));
      setListCopy(prev => [...prev, {
        no: index + 1,
        start: item.name, 
        goal: list[index + 1].name, 
        time: "13:27 PM ~ 13:56 PM", 
        amount,
      }]);
      if(index === list.length - 2) setLoading(false);
    });
  }, [list]);


  const getTaxiAmount = async (start: string, goal: string) => {
    try{
      const data = await taxiByAddr(start, goal);
      return data;
    } catch {
      setLoading(false);
      navigation.navigate("Alert", {
        title: "Error",
        context: "Please try again later.",
        buttonText: "OK",
        onClose: () => {
          if(Platform.OS === "android") {
            StatusBar.setBackgroundColor(colors.black);
            StatusBar.setBarStyle("light-content");
          }
          setList([]);
          navigation.navigate("Main");
        }
      });
      return 0;
    }
  };

  return (
    <View>
      <LoadingSpinner show={loading} />
      <View style={styles.safeAreaTop} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.top}>
          <TouchableOpacity
            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
            onPress={() => {
              navigation.navigate("Map");
            }}
          >
            <BackWhiteIcon width={20} height={20} />
          </TouchableOpacity>
          <Text style={styles.topTextDate}>2023.08.19</Text>
          <View>
            <Text style={styles.topTextTitleBold}>The estimated amount is as follows.</Text>
            <Text style={styles.topTextTitle}>The payment will proceed automatically.</Text>
          </View>
        </View>

        <ScrollView style={styles.ticketZ} contentContainerStyle={styles.ticket}>
          <Text style={styles.title}>Receipt</Text>
          <View style={styles.tickeLine} />
          <View style={styles.ticketContent}>
            {
              listCopy.sort((a, b) => {
                return a.no - b.no;
              }).map((item, index) => {
                return (
                  <>
                    {
                      index !== 0 && (
                        <PluseIcon width={20} height={20} />
                      )
                    }
                    <View style={styles.stations}>
                      <Text style={styles.station}>{item.start}</Text>
                      <ToIcon width={20} height={20} />
                      <Text style={styles.station}>{item.goal}</Text>
                    </View>
                    <View style={styles.ticketInfo}>
                      <View style={styles.ticketInfoItem}>
                        <Text style={styles.ticketInfoTitle}>Time</Text>
                        <Text style={styles.ticketInfoCont}>{item.time}</Text>
                      </View>
                      <View style={styles.ticketInfoItem2}>
                        <Text style={styles.ticketInfoTitle}>AMOUNT</Text>
                        <Text style={styles.ticketInfoCont2}>₩ {Number(item.amount).toLocaleString()}</Text>
                      </View>
                    </View>
                  </>
                );
              })
            }
          </View>
          <View style={styles.totals}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.amnt}>₩ {Number(sum).toLocaleString()}</Text>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.btncover} onPress={() => {
          if(Platform.OS === "android") {
            StatusBar.setBackgroundColor(colors.black);
            StatusBar.setBarStyle("light-content");
          }
          setList([]);
          navigation.navigate("Main");
          navigation.navigate("Pod");
        }}>
          <Text style={styles.btn}>OK</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default Recipe;
