import colors, { opacity } from "@/utils/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  top: {
    paddingTop: 128,
    paddingHorizontal: 24,
    width: "100%",
  },
  title: {
    color: colors.black,
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "700",
  },
  bottom:{
    width: "100%",
    display: "flex",
    paddingHorizontal: 24,
    flexDirection: "column",
    alignItems: "center",
    gap: 4,

    position: "absolute",
    bottom: 36,
  },
  kakao: {
    display: "flex",
    paddingVertical: 12,
    justifyContent: "center",
    gap: 24,
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    borderRadius: 32,
    backgroundColor: "#fff000",
  },
  kakaoText:{
    color: colors.black,
    textAlign: "center",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "600",
  },
  another: {
    color: opacity(colors.black, .4),
    textAlign: "center",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  }
});