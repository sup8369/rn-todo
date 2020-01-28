import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { Icon } from "native-base";

import { connect } from "react-redux";

import defaultColors from "../config/theme";
import defaultStyles from "./styles";
import { styles } from "./styles/TodosStyles";

import Title from "../components/Title";
import Spacer from "../components/Spacer";
import TodoLists from "../components/TodoLists";

import TodoEditor from "../components/TodoEditor";

import RBSheet from "react-native-raw-bottom-sheet";
import DeviceInfo from "react-native-device-info";
import utils from "../utils";
import DateLists from "../components/DateList";

class Todos extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="list" style={{ color: tintColor }} />
    )
  };

  closeBottomSheet = () => {
    this.RBSheet.close();
  };
  render() {
    return (
      <View style={defaultStyles.container}>
        <View style={defaultStyles.marginContainer}>
          <Title isLarge={true}>Simple</Title>
          <Title isLarge={true} isBold={true}>
            Todo App
          </Title>
          <ScrollView
            horizontal={true}
            bounces={false}
            showsHorizontalScrollIndicator={false}
            style={styles().dateContainer}
          >
            <DateLists></DateLists>
          </ScrollView>
        </View>
        <View style={[defaultStyles.marginContainer, styles().todoTitle]}>
          <Title isBold={true}>
            {(() => {
              let taskCount = 0;
              this.props.todos &&
                (taskCount = this.props.todos.filter(x => !x.completed).length);
              return `${taskCount}개의 할일이 있습니다.`;
            })()}
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
            <TodoLists
              data={this.props.todos.sort(function(a, b) {
                return a.willFinish < b.willFinish
                  ? -1
                  : a.willFinish > b.willFinish
                  ? 1
                  : 0;
              })}
            />
            <View style={styles().todoFooter} />
          </ScrollView>
        </View>
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={DeviceInfo.hasNotch() ? 140 : 130} //130
          closeOnDragDown
        >
          <TodoEditor closeFunc={this.closeBottomSheet} />
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
