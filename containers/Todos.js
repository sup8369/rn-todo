import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Icon } from "native-base";
import CheckBox from "react-native-check-box";
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
          <Text style={styles().headerText}>Good evening,</Text>
          <Text style={[styles().headerText, styles().boldText]}>Guest</Text>
        </View>
        <View>
          <ScrollView
            horizontal={true}
            bounces={false}
            showsHorizontalScrollIndicator={false}
            style={[defaultStyles.marginContainer, styles().dateContainer]}
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
          <Text style={[styles().subHeaderText, styles().boldText]}>
            Today's tasks
          </Text>

          <View style={styles().todoContainer}>
            <View>
              <CheckBox
                style={{ flex: 1 }}
                onClick={() => {
                  this.setState({
                    isChecked: !this.state.isChecked
                  });
                }}
                isChecked={this.state.isChecked}
                checkedCheckBoxColor={defaultColors.secondary}
                uncheckedCheckBoxColor={defaultColors.primary}
                rightText={"/BLoodTrail"}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
