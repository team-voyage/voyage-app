import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Animated, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";

import colors, { opacity } from "@/utils/colors";
import PrevIcon from "@/assets/icons/prev.svg";
import CircleFillIcon from "@/assets/icons/circle-fill.svg";
import CircleNoneFillIcon from "@/assets/icons/circle-none-fill.svg";

import { PodStackParamList } from "../types";
import styles from "./styles";

type props = NativeStackScreenProps<PodStackParamList, "Settings">;

const Settings = ({ navigation: podNavigation }: props) => {
  const weightData = ["light", "middle", "heavy"];
  const genderData = ["man", "woman"];

  const [gender, setGender] = React.useState<string>(genderData[0]);
  const [weight, setWeight] = React.useState<string>(weightData[1]);
  const [age, setAge] = React.useState<string>("");

  const [selectBox] = React.useState(new Animated.Value(34));
  const [selectBox2] = React.useState(new Animated.Value(86));

  return (
    <SafeAreaView style={{ width: "100%", height: "100%" }}>
      <View style={styles.top}>
        <TouchableOpacity
          hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
          onPress={() => podNavigation.navigate("Main")}
        >
          <PrevIcon height={20} width={20} />
        </TouchableOpacity>
        <Text style={styles.titl}>Setting</Text>
        <PrevIcon height={20} width={20} style={{ opacity: 0 }} />
      </View>

      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.title}>gender</Text>
          <Animated.View style={{
            ...styles.selectBox,
            top: selectBox
          }} />
          <View style={styles.select}>
            {
              genderData.map((item, index) => (
                <TouchableOpacity 
                  key={index}
                  style={styles.selectItem}
                  hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
                  onPress={() => {
                    setGender(item);
                    Animated.timing(selectBox, {
                      toValue: index === 0 ? 34 : 86,
                      duration: 200,
                      useNativeDriver: false
                    }).start();
                  }}
                >
                  {
                    gender === item ? 
                      <CircleFillIcon height={20} width={20} /> :
                      <CircleNoneFillIcon height={20} width={20} />
                  }
                  <Text style={styles.selects}>{item}</Text>
                </TouchableOpacity>
              ))
            }
          </View>

        </View>

        <View style={styles.box}>
          <Text style={styles.title}>age</Text>
          <TextInput
            style={styles.input}
            placeholder="Please enter your age"
            placeholderTextColor={opacity(colors.black, 0.3)}
            keyboardType="number-pad"
            value={age}
            onChangeText={setAge}
          />
        </View>

        <View style={styles.box}>
          <Text style={styles.title}>the weight of a thing</Text>
          <Animated.View style={{
            ...styles.selectBox,
            top: selectBox2
          }} />
          <View style={styles.select}>
            {
              weightData.map((item, index) => (
                <TouchableOpacity 
                  key={index}
                  style={styles.selectItem}
                  hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
                  onPress={() => {
                    setWeight(item);
                    Animated.timing(selectBox2, {
                      toValue: index === 0 ? 34 : index === 1 ? 86 : 138,
                      duration: 200,
                      useNativeDriver: false
                    }).start();
                  }}
                >
                  {
                    weight === item ? 
                      <CircleFillIcon height={20} width={20} /> :
                      <CircleNoneFillIcon height={20} width={20} />
                  }
                  <Text style={styles.selects}>{item}</Text>
                </TouchableOpacity>
              ))
            }
          </View>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
