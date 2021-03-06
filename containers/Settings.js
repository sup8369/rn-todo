import React, { Component } from "react";
import { View, Text } from "react-native";
import { Icon } from "native-base";

import defaultStyles from "./styles";

import Title from "../components/Title";

export default class Settings extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="cog" style={{ color: tintColor }} />
    )
  };
  render() {
    return (
      <View style={defaultStyles.container}>
        <View style={defaultStyles.marginContainer}>
          <Title isLarge={true} isBold={true}>
            Settings
          </Title>
          <Text>User Name</Text>
          <Text>View Filter</Text>
          <Text>Theme</Text>
          <Text>투두리스트 LongTap으로 수정/제거</Text>
        </View>
      </View>
    );
  }
}
