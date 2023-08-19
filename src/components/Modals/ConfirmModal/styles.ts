import colors, { opacity } from "@/utils/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  view: {
    display: "flex",
    padding: 24,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 16,
    alignSelf: "stretch",
    borderRadius: 16,
    backgroundColor: colors.white,
    width: "100%",
  },
  viewParents: {
    display: "flex",
    paddingHorizontal: 24,
    flexDirection: "column",
    alighItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    backgroundColor: opacity(colors.black, 0.3),
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 8,
    alignSelf: "stretch",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    fontStyle: "normal",
    color: colors.black,
  },
  context: {
    fontSize: 18,
    fontWeight: "400",
    fontStyle: "normal",
    color: opacity(colors.black, 0.9),
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    alignSelf: "stretch",
  },
  confirm: {
    color: opacity(colors.black, 0.5),
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "700",
  }
});