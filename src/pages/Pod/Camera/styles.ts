import colors, { opacity } from "@/utils/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  safeArea: {
    width: "100%", 
    height: "100%" 
  },
  camera: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  camContain: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: opacity(colors.black, 0.5),
  },
  cameraHeader: {
    width: 200,
    height: 200,
    borderColor: colors.white,
    borderWidth: 4,
    borderRadius: 50,
    borderStyle: "dashed",
  },
  bottom: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

  },
  chaptO: {
    padding: 5,
    borderRadius: 50,
    borderColor: colors.white,
    borderWidth: 2,
  },
  chapt: {
    width: 60,
    height: 60,
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 50,
  },
  text: {
    fontSize: 16,
    color: colors.white,
    fontWeight: "500",
    marginBottom: 45,
  },
  top: {
    position: "absolute",
    top: 24,
    paddingHorizontal: 24,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  }
});