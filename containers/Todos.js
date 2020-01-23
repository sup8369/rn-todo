import React, { Component } from "react";
import { View, Text, CheckBox, ScrollView } from "react-native";
import { Icon } from "native-base";

import defaultStyles from "./styles";
import { styles } from "./styles/TodosStyles";
export default class Todos extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="list" style={{ color: tintColor }} />
    )
  };
  render() {
    return (
      <View style={defaultStyles.container}>
        <View style={defaultStyles.marginContainer}>
          <Text style={styles().headerText}>Good evening,</Text>
          <Text style={[styles().headerText, styles().boldText]}>Guest</Text>
        </View>
        <ScrollView
          horizontal={true}
          style={[defaultStyles.marginContainer, styles().dateContainer]}
        >
          {[...Array(10)].map((x, i) => (
            <View key={i * 124} style={styles().dateView}>
              <View style={styles({ isActivated: i == 3 }).dateBlock}>
                <Text style={styles().dateLabel}>{i}</Text>
              </View>
              <View style={styles().dateDescriptionBlock}>
                <Text style={styles({ isActivated: i == 3 }).dateDescription}>
                  Wed
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
        <View style={defaultStyles.marginContainer}>
          <Text style={[styles().subHeaderText, styles().boldText]}>
            Today's tasks
          </Text>

          <View style={styles().todoContainer}>
            <CheckBox style={{ width: 100, height: 100 }} value={true} />
            <Text>dasda</Text>
          </View>
        </View>
      </View>
    );
  }
}
