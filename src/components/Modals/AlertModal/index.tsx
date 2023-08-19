import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types";

type props = NativeStackScreenProps<RootStackParamList, "Alert">;
const AlertModal = ({ route, navigation }: props) => {
  const { title, context, buttonText, onClose } = route.params;
  const close = () => {
    navigation.goBack();
    onClose && onClose();
  };
  return (
    <View style={styles.viewParents}>
      <TouchableOpacity style={styles.background} onPress={close} />
      <View style={styles.view}>
        <View style={styles.header}>
          {title && <Text style={styles.title}>{title}</Text>}
          {context && <Text style={styles.context}>{context}</Text>}
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={close}>
            <Text style={styles.confirm}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AlertModal;
