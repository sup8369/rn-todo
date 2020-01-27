import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Icon } from "native-base";

import CheckBox from "../components/CheckBox";
import Title from "../components/Title";

import defaultColors from "../config/theme";
import defaultStyles from "./styles";
import { styles } from "./styles/TodosStyles";

export default class AddTodo extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-add-circle" style={{ color: tintColor }} />
    )
  };
  state = {
    isChecked: false
  };
  render() {
    return (
      <View style={defaultStyles.container}>
        <View style={defaultStyles.marginContainer}>
          <Title isBold={true}>Add Todo</Title>
        </View>
      </View>
    );
  }
}
