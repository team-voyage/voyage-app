import colors, { opacity } from "@/utils/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.white,
  },
  safeareaview: {
    backgroundColor: colors.black,
    display: "flex",
    flex: 1
  },
  content: {
    flex: 1,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    backgroundColor: colors.white,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 36,
    paddingBottom: 36,
    paddingLeft: 24,
    paddingRight: 24,
    gap: 36,
  },
  title: {
    padding: 24,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleText: {
    // position: "absolute",
    left: "50%",
    fontSize: 28,
    fontWeight: "600",
    color: colors.white,
  },
  statusBar: {
    backgroundColor: "black",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray",
  },
  text: {
    color: "black",
  },
  center: {
  },
  message: {

  },
  stack: {

  },
  msgContent: {

  },
  profile: {
    
  },
  textbox: {
    position: "absolute",
    bottom: 36,
    width: "100%",
    padding: 8,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#F1F1F1",
    borderRadius: 24,
    justifyContent: "space-between",
  },
  send: {
    padding: 8,
    borderRadius: 24,
    backgroundColor: colors.black,
  },
  input: {
    flex: 1,
    marginLeft: 24,
    fontSize: 18
  }
});