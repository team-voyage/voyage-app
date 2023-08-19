import { RootStackParamList } from "@/types";
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { LoginStackParamList } from "./types";

import { Text, View } from "react-native";
import colors from "@/utils/colors";

import Local from "./Local";
import Main from "./Main";
import Partner from "./Partner";
import End from "./End";

type props = NativeStackScreenProps<RootStackParamList, "Login">;
const LoginStack = createNativeStackNavigator<LoginStackParamList>();

const Home = ({ navigation }: props) => {
  return (
    <View style={{
      width: "100%",
      height: "100%",
    }}>
      {/* <Text style={{color: colors.black}}>login</Text> */}
      <LoginStack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
          animationDuration: 100,
        }}>
        <LoginStack.Group>
          <LoginStack.Screen name="Main" component={Main} />
          <LoginStack.Screen name="Local" component={Local} />
        </LoginStack.Group>
        <LoginStack.Group screenOptions={{
          headerShown: false,
          animation: "fade",
          animationDuration: 100,
        }}>
          <LoginStack.Screen name="Partner" component={Partner} />
          <LoginStack.Screen name="End" component={End} />
        </LoginStack.Group>
      </LoginStack.Navigator>
    </View>
  );
};

export default Home;