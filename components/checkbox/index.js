import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
  ViewPropTypes as RNViewPropTypes
} from "react-native";
import PropTypes from "prop-types";

const ViewPropTypes = RNViewPropTypes || View.propTypes;

export default class CheckBox extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    ...ViewPropTypes,
    text: PropTypes.string,
    textStyle: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object
    ]),
    underlayColor: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    onLongClick: PropTypes.func.isRequired,
    isChecked: PropTypes.bool.isRequired,
    checkedCheckBoxColor: PropTypes.string,
    uncheckedCheckBoxColor: PropTypes.string
  };

  static defaultProps = {
    isChecked: false,
    underlayColor: "transparent",
    textStyle: {}
  };

  onClick() {
    this.props.onClick();
  }
  onLongClick() {
    this.props.onLongClick();
  }

  renderText() {
    if (!this.props.text) return null;
    return (
      <Text style={[styles.text, this.props.textStyle]}>{this.props.text}</Text>
    );
  }

  genImage() {
    return (
      <Image
        source={
          this.props.isChecked
            ? require("./img/ic_check_box.png")
            : require("./img/ic_check_box_outline_blank.png")
        }
        style={{
          tintColor: this.props.isChecked
            ? this.props.checkedCheckBoxColor
            : this.props.uncheckedCheckBoxColor
        }}
      />
    );
  }

  render() {
    return (
      <TouchableHighlight
        style={this.props.style}
        onPress={() => this.onClick()}
        onLongPress={() => this.onLongClick()}
        underlayColor={this.props.underlayColor}
      >
        <View style={styles.container}>
          {this.genImage()}
          {this.renderText()}
        </View>
      </TouchableHighlight>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    flex: 1,
    marginLeft: 7
  }
});
