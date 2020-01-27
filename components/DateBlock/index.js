import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ViewPropTypes as RNViewPropTypes
} from "react-native";
import PropTypes from "prop-types";
import defaultColors from "../../config/theme";
const ViewPropTypes = RNViewPropTypes || View.propTypes;

export default class DateBlock extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    ...ViewPropTypes,
    date: PropTypes.string.isRequired,
    taskCount: PropTypes.number.isRequired,
    isActivated: PropTypes.bool
  };
  static defaultProps = {
    isActivated: false,
    taskCount: 0,
    date: "0/0"
  };

  render() {
    return (
      <View style={styles().dateView}>
        <View style={styles({ isActivated: this.props.isActivated }).dateBlock}>
          <Text style={styles().dateLabel}>{this.props.taskCount}</Text>
        </View>
        <View style={styles().dateDescriptionBlock}>
          <Text
            style={
              styles({ isActivated: this.props.isActivated }).dateDescription
            }
          >
            {/*3 == 3 ? "Today" : "04/01"*/}
            {this.props.date}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = (props = {}) =>
  StyleSheet.create({
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
    }
  });
