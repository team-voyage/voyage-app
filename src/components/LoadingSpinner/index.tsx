import React from "react";
import { ActivityIndicator, View } from "react-native";
import styles from "./styles";
import colors from "@/utils/colors";

const LoadingSpinner = ({ show }: { show: boolean; }) => {
  return show ? (
    <View style={styles.LoadingSpinner}>
      <ActivityIndicator size="large" color={colors.white} />
    </View>
  ) : <></>;
};

export default LoadingSpinner;