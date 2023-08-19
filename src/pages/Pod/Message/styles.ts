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
    // justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 36,
    paddingBottom: 120,
    paddingLeft: 24,
    paddingRight: 24,
    gap: 18,
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
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    // backgroundColor: colors.black,
  },
  sender: {
    // display: "flex",
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "flex-end",
    fontSize: 12,
    fontWeight: "600",
    marginRight: 54,
  },
  stack: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
  },
  time: {
    fontSize: 8,
    fontWeight: "400",
  },
  msgContent: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 12,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    borderTopLeftRadius: 24,
    backgroundColor: colors.black,
    color: colors.white,
  },
  msgText: {
    color: colors.white,
    backgroundColor: colors.black,
    fontSize: 12,
    fontWeight: "600",
  },
  profile: {
    width: 48,
    height: 48,
    backgroundColor: colors.black,
    borderRadius: 24,
    transform: [{ translateY: -12 }],
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
  },
  textInput: {
    flex: 1,
  },
  game: {
    position: "absolute",
    bottom: 120,
    width: "100%",
    height: 144,
    backgroundColor: "#F1F1F1",
    borderRadius: 24,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 16
  },
  gameStatus: {
    fontSize: 16,
    fontWeight: "600",
  },
  gameStart: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: colors.black,
    borderRadius: 12,
  },
  gameStartText : {
    color: colors.white,
  }
});