import React from "react";
import { Platform, StatusBar } from "react-native";

import colors from "@/utils/colors";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import { RecoilRoot } from "recoil";
import { AlertModal, ConfirmModal } from "./components/Modals";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const rootTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white,
  }
};

const App = () => {
  if(Platform.OS === "android") {
    StatusBar.setBackgroundColor(colors.white);
    StatusBar.setBarStyle("dark-content");
  }
  
  return (
    <RecoilRoot>
      <NavigationContainer theme={rootTheme}>
        <RootStack.Navigator 
          initialRouteName="Home" 
          screenOptions={{
            headerShown: false,
            animation: "fade",
            animationDuration: 200,
          }}
        >
          <RootStack.Group>
            <RootStack.Screen name="Login" component={Login} />
            <RootStack.Screen name="Home" component={Home} />
          </RootStack.Group>
          <RootStack.Group screenOptions={{ 
            presentation: "transparentModal",
            animation: "fade",
            animationDuration: 100,
            contentStyle: { backgroundColor: "transparent" },
          }}>
            <RootStack.Screen name="Alert" component={AlertModal} />
            <RootStack.Screen name="Confirm" component={ConfirmModal} />
          </RootStack.Group>
        </RootStack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
