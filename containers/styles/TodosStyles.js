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

    todoContainer: {
      flexDirection: "row",
      paddingTop: 19
    },
    todoWrapper: {
      flexDirection: "column",
      flex: 0,
      marginTop: 15
    },
    todo: {
      flex: 1,
      borderRadius: 10,
      padding: 10,
      marginHorizontal: 10,
      backgroundColor: defaultColors.fullwhite
    },
    todoFooter: {
      flex: 1,
      padding: 140
    },
    todoLabel: {
      flexDirection: "row",
      color: props.isActivated
        ? defaultColors.secondary
        : defaultColors.primary,
      textDecorationLine: props.isActivated ? "line-through" : "none"
    },
    boxshadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    }
  });
