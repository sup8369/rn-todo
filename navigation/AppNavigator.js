import React, { Component } from "react";

import defaultColors from "../config/theme";

import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";

import DeviceInfo from "react-native-device-info";
import Settings from "../containers/Settings";
import Todos from "../containers/Todos";

const RouteConfigs = {
  TodosTab: { screen: Todos },
  ProfileTab: { screen: Settings }
};

const TabNavigatorConfig = {
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: "bottom",
  tabBarOptions: {
    style: {
      backgroundColor: defaultColors.white
    },
    iconStyle: { height: DeviceInfo.hasNotch() ? 50 : 30 }, // 30 / 50
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
