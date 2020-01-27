import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { Icon } from "native-base";

import { connect } from "react-redux";

import defaultColors from "../config/theme";
import defaultStyles from "./styles";
import { styles } from "./styles/TodosStyles";

import Title from "../components/Title";
import Spacer from "../components/Spacer";
import DateBlock from "../components/DateBlock";
import TodoLists from "../components/TodoLists";

import BottomSheet from "./BottomSheet";

import RBSheet from "react-native-raw-bottom-sheet";
import DeviceInfo from "react-native-device-info";
import utils from "../utils";

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
          <Title isLarge={true}>Good {utils.getGreetMessage()},</Title>
          <Title isLarge={true} isBold={true}>
            Test
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
            onPress={() => this.RBSheet.open()}
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
            <TodoLists data={this.props.todos} />
            <View style={styles().todoFooter} />
          </ScrollView>
        </View>
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={DeviceInfo.hasNotch() ? 150 : 130} //130
          closeOnDragDown
        >
          <BottomSheet />
        </RBSheet>
      </View>
    );
  }
}

let mapStateToProps = state => {
  return {
    todos: state.data
  };
};

Todos = connect(mapStateToProps)(Todos);

export default Todos;
