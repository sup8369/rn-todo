import { StyleSheet } from "react-native";
import defaultColors from "../../config/theme";

export const styles = (props = {}) =>
  StyleSheet.create({
    boldText: {
      fontWeight: "bold"
    },
    todoTitle: {
      flexDirection: "row"
    },
    dateContainer: {
      marginTop: 30,
      flexDirection: "row",
      height: 55
    },

    todoWrapper: {
      flexDirection: "column",
      flex: 0,
      marginTop: 15
    },

    todoFooter: {
      flex: 1,
      padding: 140
    }
  });
