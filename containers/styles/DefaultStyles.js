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
  rowLeft: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "green"
  },
  rowRight: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#FE4D33"
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
