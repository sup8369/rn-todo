import { StyleSheet, Platform } from "react-native";
import defaultColors from "../../config/theme";

const defaultStyles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "ios" ? 40 : 0,
    flex: 1,
    backgroundColor: defaultColors.white
  },
  marginContainer: {
    margin: 30,
    marginBottom: 0
  },
  shadowSupportMarginContainer: {
    marginHorizontal: 20
  },
  icon: {
    color: "white"
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#182129"
  }
});

export default defaultStyles;
