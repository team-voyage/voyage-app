import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types";
import { CancelButton, ConfirmButton } from "@/components/Buttons";

type props = NativeStackScreenProps<RootStackParamList, "Confirm">;
const AlertModal = ({ route, navigation }: props) => {
  const { title, context, confirmButtonText, cancelButtonText, onConfirm, onCancel } = route.params;
  const [width, setWidth] = React.useState<number>(0);
  const close = () => navigation.goBack();
  return (
    <View style={styles.viewParents}>
      <TouchableOpacity style={styles.background} onPress={close} />
      <View style={styles.view}>
        <View style={styles.header}>
          {title && <Text style={styles.title}>{title}</Text>}
          {context && <Text style={styles.context}>{context}</Text>}
        </View>
        <View
          style={styles.buttons} 
          onLayout={(e) => {
            const { width } = e.nativeEvent.layout;
            setWidth(width);
          }}
        >
          <CancelButton 
            text={cancelButtonText} 
            style={{ width: (width - 8) / 2 }}
            onPress={() => {
              close();
              onCancel && onCancel();
            }}
          />
          <ConfirmButton 
            text={confirmButtonText} 
            style={{ width: (width - 8) / 2 }}
            onPress={() => {
              close();
              onConfirm();
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default AlertModal;
