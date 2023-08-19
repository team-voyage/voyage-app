import colors, { opacity } from "@/utils/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  LoadingSpinner: {
    width: "100%",
    height: "100%",
    backgroundColor: opacity(colors.black, 0.3),
    position: "absolute",
    zIndex: 99999,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "600",
  },
});