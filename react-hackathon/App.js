import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Constants } from "expo";
import {
  createStackNavigation,
  createBottomTabNavigator
} from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
// You can import from local files
import FirstActivity from "./components/FirstActivity";

// or any pure javascript modules available in npm
import { Card } from "react-native-elements"; // 0.19.1

import HomeScreen from "./components/HomeScreen";
import DetailScreen from "./components/DetailScreen";
import Info from "./components/Info";

const BottomTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    // path: '/',
    navigationOptions: {
      // tabBarVisible:false,
      tabBarIcon: ({ focused, tintColor }) => {
        const iconName = `ios-home${focused ? "" : "-outline"}`;
        return <Ionicons name={iconName} size={30} color={tintColor} />;
      }
    }
  },
  Details: {
    screen: DetailScreen,
    // path: '/',
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
        const iconName = `ios-contact${focused ? "" : "-outline"}`;
        return <Ionicons name={iconName} size={30} color={tintColor} />;
      }
    }
  },
  FirstActivity: {
    screen: FirstActivity,
    // path: '/',
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
        const iconName = `ios-information-circle${focused ? "" : "-outline"}`;
        return <Ionicons name={iconName} size={30} color={tintColor} />;
      }
    }
  },
  Info: {
    screen: Info,
    // path: '/',
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
        const iconName = `ios-git-merge${focused ? "" : "-outline"}`;
        return <Ionicons name={iconName} size={30} color={tintColor} />;
      }
    }
  }
});

export default BottomTabNavigator;
