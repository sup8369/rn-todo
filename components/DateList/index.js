import React, { Component } from "react";
import { View, ViewPropTypes as RNViewPropTypes } from "react-native";
import PropTypes from "prop-types";
import DateBlock from "../DateBlock";
const ViewPropTypes = RNViewPropTypes || View.propTypes;

export default class DateLists extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    ...ViewPropTypes,
    data: PropTypes.array
  };
  static defaultProps = {
    data: []
  };

  render() {
    return (
      <React.Fragment>
        {[...Array(11)].map((x, i) => (
          <DateBlock
            key={i}
            taskCount={i * 3}
            date={`${i == 0 ? "Today" : "1/24"}`}
            isActivated={i == 0}
          ></DateBlock>
        ))}
      </React.Fragment>
    );
  }
}
