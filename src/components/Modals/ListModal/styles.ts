import colors, { opacity } from "@/utils/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  text: {
    color: colors.black,
  },
  list: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 8,
    width: "100%",
  },
  listItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    alignSelf: "stretch",
    width: "100%",
    paddingVertical: 12,
  },
  listItemText: {
    color: colors.black,
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  }
});