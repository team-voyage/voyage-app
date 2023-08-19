import colors, { opacity } from "@/utils/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  top: {
    display: "flex",
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 16,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  titl: {
    color: colors.black,
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "700",
  },
  container: {
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 16,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 48,
  },
  title: {
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "600",
    color: colors.black,
  },
  box: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    gap: 24,
  },
  select: {
    display: "flex",
    paddingHorizontal: 24,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 32,
    width: "100%",
  },
  selectItem: {
    display: "flex",
    alignContent: "center",
    gap: 12,
    flexDirection: "row",
    width: "100%",
  },
  selects: {
    color: colors.black,
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "500",
  },
  selectBox: {
    width: "100%",
    height: 48,
    backgroundColor: colors.gray,
    borderRadius: 32,
    position: "absolute",
  },
  input: {
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: colors.gray,
    borderRadius: 32,
    color: colors.black,
  }
});