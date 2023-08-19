import colors, { opacity } from "@/utils/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonText: {
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "600",
  },
  confirm: {
    backgroundColor: opacity(colors.black, 0.8),
  },
  confirmText: {
    color: colors.white,
  },
  cancel: {
    backgroundColor: opacity(colors.black, 0.1),
  },
  cancelText: {
    color: opacity(colors.black, 0.6),
  },
  searchBox: {
    backgroundColor: opacity(colors.black, 0.1),
  },
  searchBoxText: {
    color: colors.black,
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "600",
    width: "100%",
  }
});