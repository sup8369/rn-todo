import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Alert,
  ViewPropTypes as RNViewPropTypes
} from "react-native";

import { connect } from "react-redux";
import { addTodo, editTodo } from "../../actions";
import defaultColors from "../../config/theme";
import { Icon } from "native-base";
import Spacer from "../Spacer";
import DatePicker from "react-native-datepicker";
import PropTypes from "prop-types";
const ViewPropTypes = RNViewPropTypes || View.propTypes;

class TodoEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.isEditMode ? new Date(this.props.date) : null,
      todoTitle: this.props.isEditMode ? this.props.title : null,
      id: this.props.isEditMode ? this.props.id : null
    };
  }
  static propTypes = {
    ...ViewPropTypes,
    closeFunc: PropTypes.func,
    isEditMode: PropTypes.bool,
    title: PropTypes.string,
    date: PropTypes.number,
    id: PropTypes.string
  };
  onChangeText = text => {
    this.setState({ todoTitle: text });
  };
  render() {
    return (
      <View style={styles().container}>
        <TextInput
          style={{ fontSize: 22 }}
          autoFocus={true}
          placeholder="할 일 추가"
          editable
          selectionColor={defaultColors.primary}
          maxLength={40}
          defaultValue={this.state.todoTitle}
          onChangeText={text => this.onChangeText(text)}
        ></TextInput>
        <View style={styles().footerContainer}>
          <DatePicker
            style={{ width: 240 }}
            date={this.state.date}
            mode="datetime"
            placeholder="날짜 선택하기"
            format="YYYY-MM-DDTHH:mm:00Z"
            minDate={new Date()}
            confirmBtnText="확인"
            cancelBtnText="취소"
            showIcon={false}
            customStyles={{
              dateInput: {
                borderRadius: 8,
                borderWidth: 2,
                borderColor: defaultColors.primary
              }
            }}
            onDateChange={date => {
              this.setState({ date: date });
            }}
          />
          <Spacer />
          <Icon
            name={this.props.isEditMode ? "checkmark-circle" : "add-circle"}
            onPress={() => {
              if (!this.state.date || !this.state.todoTitle) {
                Alert.alert("추가 실패", "날짜나 제목이 입력되지 않았습니다.");
                return;
              }
              this.props.closeFunc();
              this.props.isEditMode
                ? this.props.editTodo(
                    this.state.id,
                    this.state.todoTitle,
                    this.state.date
                  )
                : this.props.addTodo(this.state.todoTitle, this.state.date);
            }}
            style={{
              lineHeight: 34,
              fontSize: 34,
              color:
                this.state.date && this.state.todoTitle
                  ? defaultColors.primary
                  : defaultColors.secondary
            }}
          ></Icon>
        </View>
      </View>
    );
  }
}
let mapDispatchToProps = dispatch => {
  return {
    addTodo: (title, date) => {
      dispatch(addTodo(title, new Date(date).getTime()));
    },
    editTodo: (id, title, date) => {
      dispatch(editTodo(id, title, new Date(date).getTime()));
    }
  };
};

TodoEditor = connect(undefined, mapDispatchToProps)(TodoEditor);

export default TodoEditor;

const styles = () =>
  StyleSheet.create({
    container: {
      padding: 8,
      paddingHorizontal: 16
    },
    footerContainer: {
      marginTop: 14,
      flexDirection: "row"
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
