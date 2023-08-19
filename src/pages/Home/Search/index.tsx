import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";

import colors, { opacity } from "@/utils/colors";
import PrevIcon from "@/assets/icons/prev.svg";
import CloseIcon from "@/assets/icons/close.svg";
import EheqhrlIcon from "@/assets/icons/eheqhrl.svg";
import GhktkfvyIcon from "@/assets/icons/ghktkfvy.svg";

import { HomeStackParamList } from "../types";
import styles from "./styles";
import api, { source } from "@/utils/api";
import { listAtom } from "../Map";
import { useRecoilState } from "recoil";

type props = NativeStackScreenProps<HomeStackParamList, "Search">;
const Search = ({ navigation }: props) => {
  const [list, setList] = useRecoilState(listAtom);

  const [input, setInput] = React.useState<string>("");
  const [data, setData] = React.useState<{
    title: string;
    address: string;
  }[]>([]);

  const getData = () => {
    if(input === "") return setData([]);
    source.cancel();
    api({
      method: "post",
      url: "/api/search",
      data: {
        location: input,
      }
    }).then(({ data }) => {
      setData(data);
    }).catch(() => {});
  };

  React.useEffect(() => {
    getData();
  } , [input]);

  return (
    <SafeAreaView style={{width: "100%", height: "100%"}}>
      {/* <Menu navigation={homeNavigation} /> */}
      <View style={styles.top}>
        <View style={styles.topLeft}>
          <TouchableOpacity
            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
            onPress={() => navigation.goBack()}
          >
            <PrevIcon width={20} height={20} />
          </TouchableOpacity>
          <TextInput 
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder="Please enter a search term."
            placeholderTextColor={opacity(colors.black, 0.3)}
          />
        </View>
        <TouchableOpacity 
          style={styles.rm}
          hitSlop={{ left: 12, right: 12 }}
          onPress={() => setInput("")}
        >
          <CloseIcon width={18} height={18} />
        </TouchableOpacity>
      </View>

      <View style={styles.list}>
        {
          data.map((item, index) => {
            // title은 item.title의 html 태그를 없앤 것
            const title = item.title.replace(/(<([^>]+)>)/gi, "");

            const onPress = async () => {
              const { data } = await api({
                method: "post",
                url: "/api/location",
                data: {
                  address: item.address,
                }
              });
              setList([...list, {
                name: title,
                address: item.address,
                latitude: parseFloat(data[0].y),
                longitude: parseFloat(data[0].x),
              }]);
              navigation.goBack();
            };

            return (
              <View key={index} style={styles.w100}>
                <TouchableOpacity 
                  style={styles.searchData}
                  hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                  onPress={onPress}
                >
                  <View style={styles.searchDataInner}>
                    <EheqhrlIcon width={20} height={20} />
                    <View>
                      <Text style={styles.searchDataInnerText}>{title}</Text>
                      <Text style={styles.searchDataInnerText2}>{item.address}</Text>
                    </View>
                  </View>
                  <GhktkfvyIcon width={25} height={25} />
                </TouchableOpacity>
                {
                  index !== data.length - 1 && (
                    <View style={styles.line} />
                  )
                }
              </View>
            );
          })
        }
      </View>
    </SafeAreaView>
  );
};

export default Search;
