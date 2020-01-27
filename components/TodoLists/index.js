import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ViewPropTypes as RNViewPropTypes
} from "react-native";
import PropTypes from "prop-types";
import TodoItem from "../TodoItem";
const ViewPropTypes = RNViewPropTypes || View.propTypes;

class TodoLists extends Component {
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
      <View style={[styles().todoContainer, styles().boxshadow]}>
        {this.props.data.map(todo => {
          const date = new Date(todo.willFinish * 1000.0);
          const dayMonth = date.toDateString().split(" ");
          const ampm = date.getHours() >= 12 ? "pm" : "am";
          const minute = date.getMinutes();
          const dateString = `${dayMonth[1]} ${dayMonth[2]} ${date.getHours() %
            12 || 12}:${minute < 10 ? "0" : ""}${minute}${ampm}`;

          return (
            <TodoItem
              key={todo.id}
              title={`${todo.title}\n- ${dateString}`}
              onClick={() => {}}
              onLongClick={() => {}}
            />
          );
        })}
      </View>
    );
  }
}
let mapDispatchToProps = dispatch => {
  return {};
};

TodoLists = connect(undefined, mapDispatchToProps);

export default TodoLists;

const styles = (props = {}) =>
  StyleSheet.create({
    todoContainer: {
      flexDirection: "column",
      paddingTop: 19
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
