import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ViewPropTypes as RNViewPropTypes
} from "react-native";

import PropTypes from "prop-types";
import defaultColors from "../../config/theme";
import CheckBox from "../CheckBox";
const ViewPropTypes = RNViewPropTypes || View.propTypes;

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    ...ViewPropTypes,
    onClick: PropTypes.func.isRequired,
    onLongClick: PropTypes.func.isRequired,
    title: PropTypes.string,
    isChecked: PropTypes.bool
  };
  static defaultProps = {
    title: "N/A",
    isChecked: false
  };

  render() {
    return (
      <CheckBox
        style={styles().todo}
        onClick={this.props.onClick}
        onLongClick={this.props.onLongClick}
        isChecked={this.props.isChecked}
        underlayColor={defaultColors.fullwhite + "77"}
        checkedCheckBoxColor={defaultColors.secondary}
        uncheckedCheckBoxColor={defaultColors.primary}
        text={this.props.title}
        textStyle={styles({ isActivated: this.props.isChecked }).todoLabel}
      />
    );
  }
}

const styles = (props = {}) =>
  StyleSheet.create({
    todo: {
      flex: 1,
      borderRadius: 10,
      padding: 10,
      margin: 10,
      backgroundColor: defaultColors.fullwhite
    },
    todoLabel: {
      flexDirection: "row",
      lineHeight: 20,
      color: props.isActivated
        ? defaultColors.secondary
        : defaultColors.primary,
      textDecorationLine: props.isActivated ? "line-through" : "none"
    }
  });
