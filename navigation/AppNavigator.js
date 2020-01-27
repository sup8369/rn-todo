import React, { Component } from "react";

import defaultColors from "../config/theme";

import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";

import Profile from "../containers/Profile";
import AddTodo from "../containers/AddTodo";
import Todos from "../containers/Todos";

const RouteConfigs = {
  TodosTab: { screen: Todos },
  AddTodo: { screen: AddTodo },
  ProfileTab: { screen: Profile }
};

const TabNavigatorConfig = {
  animationEnabled: true,
  swipeEnabled: false,
  tabBarPosition: "bottom",
  tabBarOptions: {
    style: {
      backgroundColor: defaultColors.white
    },
    iconStyle: { height: 60 },
    activeTintColor: defaultColors.primary,
    inactiveTintColor: defaultColors.secondary,
    upperCaseLabel: false,
    showLabel: false,
    showIcon: true,
    indicatorStyle: {
      display: "none"
    }
  }
};
const AppContainer = createAppContainer(
  createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig)
);

export default class AppNavigator extends Component {
  render() {
    return <AppContainer />;
  }
}
