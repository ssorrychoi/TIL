//This is an example to hide Navigation Bar from a particular screen
import React, { Component } from "react";
//import react in our code.

//In Version 2+
//import {createStackNavigator} from 'react-navigation';
//In Version 3+
import { createStackNavigator, createAppContainer } from "react-navigation";
//import createStackNavigator

import AssetExample from "./AssetExample";
import SecondActivity from "./SecondActivity";

const Switch = createStackNavigator(
  {
    First: {
      screen: AssetExample,
      navigationOptions: { tabBarVisible: false }
      //You can hide the header from here as well just uncomment below lines
      /*navigationOptions: {
      header: null,
    },*/
    },
    Second: {
      screen: SecondActivity
    }
  },
  //You can hide the header from all the screens in once using defaultNavigationOptions
  {
    //   defaultNavigationOptions: {
    //     header: null
    //   },
  }
);

//In version 2+ createAppContainer was default container
//but in version 3+ you have to export it manually
//In Version 2+
//export default App;
//In Version 3+
export default createAppContainer(Switch);
