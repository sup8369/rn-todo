import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  ViewPropTypes as RNViewPropTypes
} from "react-native";

import { connect } from "react-redux";
import { addTodo } from "../../actions";
import defaultColors from "../../config/theme";
import { Icon } from "native-base";
import Spacer from "../Spacer";
import DatePicker from "react-native-datepicker";
import PropTypes from "prop-types";
const ViewPropTypes = RNViewPropTypes || View.propTypes;

class TodoEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { date: null, todoTitle: null };
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
          placeholder="Add a task"
          editable
          selectionColor={defaultColors.primary}
          maxLength={40}
          onChangeText={text => this.onChangeText(text)}
        ></TextInput>
        <View style={styles().footerContainer}>
          <DatePicker
            style={{ width: 240 }}
            date={this.state.date}
            mode="datetime"
            placeholder="Select a date"
            format="YYYY-MM-DDThh:mm:ssZ"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
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
            name="add-circle"
            onPress={() => {
              if (!this.state.date || !this.state.todoTitle) return;
              this.props.closeFunc();
              this.props.addTodo(this.state.todoTitle, this.state.date);
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
      alert(new Date(date));
      dispatch(addTodo(title, new Date(date).getTime()));
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
