import { RootStackParamList } from "@/types";
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import { PodStackParamList } from "./types";
import { View } from "react-native";
import React from "react";
import Main from "./Main";
import Message from "./Message";
import Settings from "./Settings";

type props = NativeStackScreenProps<RootStackParamList, "Pod">;
const PodStack = createNativeStackNavigator<PodStackParamList>();

const Pod = ({ navigation }: props) => {
  return (
    <View style={{
      width: "100%",
      height: "100%",
    }}>
      <PodStack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
          animation: "fade",
          animationDuration: 100,
        }}>
        <PodStack.Screen name="Main" component={Main} />
        <PodStack.Screen name="Message" component={Message} />
        <PodStack.Group screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
          animationDuration: 100,
        }}>
          <PodStack.Screen name="Settings" component={Settings} />
        </PodStack.Group>
      </PodStack.Navigator>
    </View>
  );
};

export default Pod;