import { StyleSheet } from "react-native";
import defaultColors from "../../config/theme";

export const styles = (props = {}) =>
  StyleSheet.create({
    headerText: {
      flexDirection: "row",
      justifyContent: "center",
      color: defaultColors.primary,
      fontSize: 30
    },
    subHeaderText: {
      flexDirection: "row",
      justifyContent: "center",
      color: defaultColors.primary,
      fontSize: 22
    },
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
    dateView: {
      marginRight: 15
    },
    dateBlock: {
      backgroundColor: props.isActivated
        ? defaultColors.primary
        : defaultColors.secondary,
      width: props.isActivated ? 45 : 40,
      height: props.isActivated ? 25 : 20,
      marginVertical: props.isActivated ? 0 : 2.5,
      borderRadius: props.isActivated ? 10 : 20,
      justifyContent: "center",
      alignItems: "center"
    },
    dateLabel: {
      color: defaultColors.white
    },
    dateDescriptionBlock: {
      alignItems: "center"
    },
    dateDescription: {
      marginTop: 6,
      color: props.isActivated ? defaultColors.primary : defaultColors.secondary
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
