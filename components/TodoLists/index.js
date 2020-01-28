import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ViewPropTypes as RNViewPropTypes
} from "react-native";
import PropTypes from "prop-types";
import TodoItem from "../TodoItem";
import { connect } from "react-redux";
import { completeTodo } from "../../actions";
import utils from "../../utils";
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
          const dateString = utils.timestampToUsable(todo.willFinish);

          return (
            <TodoItem
              key={todo.id}
              title={`${todo.title}\n- ${dateString}`}
              isChecked={todo.completed}
              onClick={() => {
                this.props.completeTodo(todo.id);
              }}
              onLongClick={() => {
                alert("수정/삭제 메뉴");
              }}
            />
          );
        })}
      </View>
    );
  }
}
let mapDispatchToProps = dispatch => {
  return {
    completeTodo: id => dispatch(completeTodo(id))
  };
};

TodoLists = connect(undefined, mapDispatchToProps)(TodoLists);

export default TodoLists;

const styles = () =>
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
