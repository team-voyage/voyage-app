import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";

import BackIcon from "@/assets/icons/back.svg";
import PartnerIcon from "@/assets/icons/partner.svg";
import PlusIcon from "@/assets/icons/plus.svg";
import XWhiteIcon from "@/assets/icons/xwhite.svg";

import { LoginStackParamList } from "../types";
import styles from "./styles";
import colors, { opacity } from "@/utils/colors";
import { Picker } from "@react-native-picker/picker";

type props = NativeStackScreenProps<LoginStackParamList, "Partner">;
const Partner = ({ navigation }: props) => {
  // const [selectedValue, setSelectedValue] = React.useState("");
  const [list, setList] = React.useState<string[]>([]);
  const [input, setInput] = React.useState("");

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
        <PartnerIcon width={172} height={137} />
        <View>
          <Text style={styles.title}>If you have a travel partner,</Text>
          <Text style={styles.title}>please enter their ID.</Text>
        </View>
        
        <View style={styles.inputs}>
          {
            list.map((item, index) => (
              <View key={index} style={styles.inputBox2}>
                <Text style={styles.inputTextBox}>{item}</Text>
                <TouchableOpacity 
                  hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
                  onPress={() => {
                    setList(list.filter((_, i) => i !== index));
                  }}
                >
                  <XWhiteIcon width={20} height={20} />
                </TouchableOpacity>
              </View>
            ))
          }
          <View style={styles.inputBox}>
            <TouchableOpacity 
              hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
              onPress={() => {
                setList([...list, input]);
                setInput("");
              }}
            >
              <PlusIcon width={12} height={12} />
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              value={input}
              onChangeText={setInput}
              placeholder="Select a local name..."
              placeholderTextColor={opacity(colors.black, .2)}
            />
          </View>
        </View>
      </View>

      <View style={styles.bottom}>
        <View style={styles.circles}>
          <View style={styles.circle} />
          <View style={[styles.circle, styles.circleThis]} />
          <View style={styles.circle} />
        </View>
        <TouchableOpacity 
          style={styles.next} 
          onPress={() => {
            navigation.navigate("End");
          }}
        >
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Partner;
