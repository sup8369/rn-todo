import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Icon } from "native-base";

import CheckBox from "../components/CheckBox";
import Title from "../components/Title";

import defaultColors from "../config/theme";
import defaultStyles from "./styles";
import { styles } from "./styles/TodosStyles";

export default class Todos extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="list" style={{ color: tintColor }} />
    )
  };
  state = {
    isChecked: false
  };
  render() {
    return (
      <View style={defaultStyles.container}>
        <View style={defaultStyles.marginContainer}>
          <Title isLarge={true}>Good evending,</Title>
          <Title isLarge={true} isBold={true}>
            SangEon
          </Title>

          <ScrollView
            horizontal={true}
            bounces={false}
            showsHorizontalScrollIndicator={false}
            style={styles().dateContainer}
          >
            {[...Array(10)].map((x, i) => (
              <View key={i * 124} style={styles().dateView}>
                <View style={styles({ isActivated: i == 3 }).dateBlock}>
                  <Text style={styles().dateLabel}>{i + 1}</Text>
                </View>
                <View style={styles().dateDescriptionBlock}>
                  <Text style={styles({ isActivated: i == 3 }).dateDescription}>
                    {i == 3 ? "Today" : "04/01"}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={defaultStyles.marginContainer}>
          <Title isBold={true}>
            {true == true ? "Today's tasks" : "List of tasks,  01/27"}
          </Title>
        </View>
        <View style={defaultStyles.shadowSupportMarginContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles().todoWrapper}
          >
            {[...Array(10)].map((x, i) => (
              <View style={[styles().todoContainer, styles().boxshadow]}>
                <CheckBox
                  style={styles().todo}
                  onClick={() => {
                    this.setState({
                      isChecked: !this.state.isChecked
                    });
                  }}
                  onLongClick={() => {
                    alert("LONG CLICK MENU!");
                  }}
                  isChecked={this.state.isChecked}
                  underlayColor={defaultColors.fullwhite + "77"}
                  checkedCheckBoxColor={defaultColors.secondary}
                  uncheckedCheckBoxColor={defaultColors.primary}
                  text={"Sample Todo Text... _ 12:42 pm"}
                  textStyle={
                    styles({ isActivated: this.state.isChecked }).todoLabel
                  }
                />
              </View>
            ))}
            <View style={styles().todoFooter} />
          </ScrollView>
        </View>
      </View>
    );
  }
}
