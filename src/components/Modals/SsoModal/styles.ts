import colors, { opacity } from "@/utils/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  modal: {
    backgroundColor: opacity(colors.black, 0.25),
  },
  container: {
    backgroundColor: opacity(colors.white, 1),
    marginHorizontal: 0,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    width: "100%",
  },
  innerContainer: {
    height: "100%",
    marginTop: 0,
  },
  line: {
    backgroundColor: opacity(colors.black, 0.1),
    height: 4,
    width: 48,
    marginTop: 8,
  },
  title: {
    color: colors.black,
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
  },
  titleView: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    flexShrink: 0,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
});