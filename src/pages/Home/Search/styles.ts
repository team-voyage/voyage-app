import colors, { opacity } from "@/utils/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  top: {
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 24,
    justifyContent: "space-between",
    alignContent: "center",
    flexDirection: "row",

    borderColor: opacity(colors.black, 0.1),
    borderBottomWidth: 1,
  },
  topLeft: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    flexDirection: "row",
  },
  input: {
    color: colors.black,
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "500",
  },
  rm: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  searchData: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  searchDataInner: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    flexDirection: "row",
  },
  searchDataInnerText: {
    color: colors.black,
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "600",
    width: 200,
  },
  searchDataInnerText2: {
    color: opacity(colors.black, .3),
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "300",
    width: 200,
  },
  list: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 24,
    paddingVertical: 18,
    alignItems: "flex-start",
    gap: 18,
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: opacity(colors.black, 0.1),
  },
  w100: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 18,
  }
});