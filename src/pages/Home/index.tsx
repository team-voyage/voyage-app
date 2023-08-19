import { RootStackParamList } from "@/types";
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { HomeStackParamList } from "./types";

import { View } from "react-native";
import Main from "./Main";
import Map from "./Map";
import Search from "./Search";
import Recipe from "./Recipe";

type props = NativeStackScreenProps<RootStackParamList, "Home">;
const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const Home = ({ navigation: rootNavigation }: props) => {
  return (
    <View style={{
      width: "100%",
      height: "100%",
    }}>
      <HomeStack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
          animationDuration: 100,
        }}>
        <HomeStack.Group>
          <HomeStack.Screen name="Main" component={Main} />
          <HomeStack.Screen name="Map" component={Map} />

        </HomeStack.Group>
        <HomeStack.Group screenOptions={{
          headerShown: false,
          animation: "fade",
          animationDuration: 100,
        }}>
          <HomeStack.Screen name="Search" component={Search} />
          <HomeStack.Screen name="Recipe" component={Recipe} />
        </HomeStack.Group>

      </HomeStack.Navigator>
    </View>
  );
};

export default Home;