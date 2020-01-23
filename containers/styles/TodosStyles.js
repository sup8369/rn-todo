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
    dateContainer: {
      flexDirection: "row"
    },
    dateView: {
      marginRight: 15
    },
    dateBlock: {
      backgroundColor: props.isActivated
        ? defaultColors.primary
        : defaultColors.secondary,
      width: props.isActivated ? 45 : 40,
      height: props.isActivated ? 45 : 40,
      marginVertical: props.isActivated ? 0 : 2.5,
      borderRadius: props.isActivated ? 10 : 20,
      justifyContent: "center", //Centered vertically
      alignItems: "center" // Centered horizontally
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
      flexDirection: "row"
    }
  });
