import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ActivityIndicator, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";

import colors, { opacity } from "@/utils/colors";
import PrevIcon from "@/assets/icons/prev.svg";
import CloseIcon from "@/assets/icons/close.svg";
import EheqhrlIcon from "@/assets/icons/eheqhrl.svg";
import GhktkfvyIcon from "@/assets/icons/ghktkfvy.svg";

import { HomeStackParamList } from "../types";
import styles from "./styles";
import api, { location, search, source } from "@/utils/api";
import { listAtom } from "../Map";
import { useRecoilState } from "recoil";
import LoadingSpinner from "@/components/LoadingSpinner";

type props = NativeStackScreenProps<HomeStackParamList, "Search">;
const Search = ({ navigation }: props) => {
  const [list, setList] = useRecoilState(listAtom);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [searchLoading, setSearchLoading] = React.useState<boolean>(false);

  const [input, setInput] = React.useState<string>("");
  const [data, setData] = React.useState<{
    title: string;
    address: string;
  }[]>([]);

  const getData = () => {
    if(input === "") return setData([]);
    source.cancel();
    setSearchLoading(true);
    search(input).then(( data ) => {
      setData(data);
      setSearchLoading(false);
    }).catch(() => {
      setSearchLoading(false);
    });
  };

  React.useEffect(() => {
    getData();
  } , [input]);

  return (
    <>
      <LoadingSpinner show={loading} />
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
            searchLoading ? (
              <View style={styles.load}>
                <ActivityIndicator size="large" color={colors.black} />
              </View>
            ) : data.map((item, index) => {
            // title은 item.title의 html 태그를 없앤 것
              const title = item.title.replace(/(<([^>]+)>)/gi, "");

              const onPress = async () => {
                setLoading(true);
                const data = await location(item.address);
                setList([...list, {
                  name: title,
                  address: item.address,
                  latitude: parseFloat(data[0].y),
                  longitude: parseFloat(data[0].x),
                }]);
                setLoading(false);
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
    </>
  );
};

export default Search;
