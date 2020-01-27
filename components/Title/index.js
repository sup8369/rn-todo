import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ViewPropTypes as RNViewPropTypes
} from "react-native";
import PropTypes from "prop-types";
import defaultColors from "../../config/theme";
const ViewPropTypes = RNViewPropTypes || View.propTypes;

export default class Title extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    ...ViewPropTypes,
    text: PropTypes.string,
    color: PropTypes.string,
    isBold: PropTypes.bool,
    isLarge: PropTypes.bool
  };

  static defaultProps = {
    isBold: false,
    isLarge: false,
    color: defaultColors.primary
  };

  renderText() {
    if (!this.props.children) return null;
    return (
      <Text
        style={[
          styles.text,
          {
            fontWeight: this.props.isBold ? "bold" : "normal",
            fontSize: this.props.isLarge ? 30 : 22,
            color: defaultColors.primary
          }
        ]}
      >
        {this.props.children}
      </Text>
    );
  }

  render() {
    return <View style={styles.container}>{this.renderText()}</View>;
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center"
  },
  text: {
    flex: 1
  }
});
