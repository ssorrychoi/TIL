import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default class SecondActivity extends Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    // header: null,
  };

  state = {};

  componentDidMount() {}

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.textStyle}>Second</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FFFFFF"
  },
  textStyle: {
    fontSize: 30,
    fontWeight: "bold"
  }
});
