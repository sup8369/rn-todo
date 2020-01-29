import React, { Component } from "react";
import {
  View,
  Alert,
  StyleSheet,
  Text,
  ViewPropTypes as RNViewPropTypes
} from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TodoItem from "../TodoItem";
import { completeTodo } from "../../actions";
import utils from "../../utils";
import RBSheet from "react-native-raw-bottom-sheet";
import TodoEditor from "../TodoEditor";
import DeviceInfo from "react-native-device-info";
import { Icon } from "native-base";
const ViewPropTypes = RNViewPropTypes || View.propTypes;

class TodoLists extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    lastSelected: {}
  };
  static propTypes = {
    ...ViewPropTypes,
    data: PropTypes.array,
    todo: PropTypes.func
  };
  static defaultProps = {
    data: []
  };
  openBottomSheet = () => {
    this.RBSheet.open();
  };
  closeBottomSheet = () => {
    this.RBSheet.close();
  };
  alertControl = (id, title, date) => {
    Alert.alert(
      title,
      `${utils.timestampToUsable(date)}\n${new Date(date).toLocaleString()}`,
      [
        {
          text: "취소",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "할일 삭제",
          onPress: () => this.props.deleteTodo(id)
        },
        {
          text: "할일 수정",
          onPress: () => {
            this.setState({
              lastSelected: {
                title: title,
                id: id,
                date: date
              }
            });
            this.openBottomSheet();
          }
        }
      ],
      { cancelable: true }
    );
  };
  render() {
    return (
      <View style={[styles().todoContainer, styles().boxshadow]}>
        {this.props.data.map(todo => {
          const dateString = utils.timestampToUsable(todo.willFinish);

          return (
            <TodoItem
              key={todo.id}
              title={`${todo.title}\n마감: ${dateString}`}
              isChecked={todo.completed}
              isBlured={todo.willFinish < new Date().getTime()}
              onClick={() => {
                this.props.completeTodo(todo.id);
              }}
              onLongClick={() => {
                this.alertControl(todo.id, todo.title, todo.willFinish);
              }}
            />
          );
        })}
        <View style={styles().addButton}>
          <Icon
            style={styles().addIcon}
            onPress={this.props.todo}
            name="add-circle"
          ></Icon>
        </View>
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={DeviceInfo.hasNotch() ? 140 : 130} //130
          closeOnDragDown
        >
          <TodoEditor
            closeFunc={this.closeBottomSheet}
            isEditMode={true}
            title={this.state.lastSelected.title}
            id={this.state.lastSelected.id}
            date={this.state.lastSelected.date}
          />
        </RBSheet>
      </View>
    );
  }
}
let mapDispatchToProps = dispatch => {
  return {
    completeTodo: id => dispatch(completeTodo(id)),
    deleteTodo: id => dispatch(deleteTodo(id))
  };
};

TodoLists = connect(undefined, mapDispatchToProps)(TodoLists);

export default TodoLists;

const styles = () =>
  StyleSheet.create({
    addButton: {
      flex: 1,
      borderRadius: 10,
      padding: 10,
      margin: 10,
      backgroundColor: defaultColors.fullwhite
    },
    addIcon: {
      flex: 1,
      textAlign: "center"
    },
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
