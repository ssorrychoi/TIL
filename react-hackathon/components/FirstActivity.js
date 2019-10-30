import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default class FirstActivity extends Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    // header: null,
  };
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.textStyle}>Home</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Second")}
        >
          <Text>Go Second</Text>
        </TouchableOpacity>
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
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    margin: 16,
    borderRadius: 4,
    backgroundColor: "#00e808"
  }
});
