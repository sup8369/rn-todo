import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { Icon } from "native-base";

import { connect } from "react-redux";

import Title from "../components/Title";

import defaultColors from "../config/theme";
import defaultStyles from "./styles";
import { styles } from "./styles/TodosStyles";

import Spacer from "../components/Spacer";
import DateBlock from "../components/DateBlock";
import TodoLists from "../components/TodoLists";

class Todos extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="list" style={{ color: tintColor }} />
    )
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
              <DateBlock
                taskCount={i * 3}
                date={`1/${i + 20}`}
                isActivated={i == 3}
              ></DateBlock>
            ))}
          </ScrollView>
        </View>
        <View style={[defaultStyles.marginContainer, styles().todoTitle]}>
          <Title isBold={true}>
            {true == false ? "Today, 30 Tasks" : "Next 7 Days,  10 Tasks."}
          </Title>
          <Spacer />
          <Icon
            name="add-circle"
            style={{
              fontSize: 24,
              color: defaultColors.primary
            }}
          />
        </View>
        <View style={defaultStyles.shadowSupportMarginContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles().todoWrapper}
          >
            <TodoLists data={this.props.value} />
            <View style={styles().todoFooter} />
          </ScrollView>
        </View>
      </View>
    );
  }
}

let mapStateToProps = state => {
  return {
    value: state.data
  };
};

Todos = connect(mapStateToProps)(Todos);

export default Todos;
