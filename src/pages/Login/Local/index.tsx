import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import BackIcon from "@/assets/icons/back.svg";
import LocalIcon from "@/assets/icons/local.svg";

import { LoginStackParamList } from "../types";
import styles from "./styles";
import colors, { opacity } from "@/utils/colors";
import { Picker } from "@react-native-picker/picker";

type props = NativeStackScreenProps<LoginStackParamList, "Local">;
const Local = ({ navigation }: props) => {
  const [selectedValue, setSelectedValue] = React.useState("");

  return (
    <SafeAreaView style={{width: "100%", height: "100%"}}>
      <View style={styles.top}>
        <TouchableOpacity 
          onPress={() => {
            navigation.goBack();
          }}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <BackIcon width={20} height={20} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.middle}>
        <LocalIcon width={100} height={100} />
        <Text style={styles.title}>Please enter your travel destination!</Text>
        {/* <TextInput
          style={styles.input}
          placeholder="Select a local name..."
          placeholderTextColor={opacity(colors.black, .2)}
        /> */}
        <View style={styles.pickerP}>
          <Picker 
            style={[styles.picker, {
              color: selectedValue === "" ? opacity(colors.black, .2) : colors.black,
            }]}
            selectedValue={selectedValue} 
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Select a local name..." value="" />
            <Picker.Item label="Busan" value="js" />
          </Picker>
        </View>
      </View>

      <View style={styles.bottom}>
        <View style={styles.circles}>
          <View style={[styles.circle, styles.circleThis]} />
          <View style={styles.circle} />
          <View style={styles.circle} />
        </View>
        <TouchableOpacity 
          style={[styles.next, {
            opacity: selectedValue === "" ? .2 : 1,
          }]} 
          onPress={() => {
            if(selectedValue === "") return;
            navigation.navigate("Partner");
          }}
        >
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Local;
