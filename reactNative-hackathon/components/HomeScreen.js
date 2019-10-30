import * as React from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import faker from "faker";
import { Ionicons } from "@expo/vector-icons";
import { Card, CardItem, Body } from "react-native-paper";
import Constants from "expo-constants";

import Info from "./Info";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView alwaysBounceVertical={true}>
        <View style={styles.container}>
          <Ionicons style={styles.logo} size={40} name="ios-add" />
          <Text style={styles.name}>{faker.name.firstName()}</Text>
          <Text
            style={styles.whatuneed}
          >{`오늘은 어떤일이 \n필요하신가요?`}</Text>
          <Text style={styles.tag}>최근 조회목록</Text>
          <ScrollView alwaysBounceHorizontal={true}>
            <Card style={styles.cardradius}>
              <Info />
            </Card>
          </ScrollView>
          <Text style={styles.tag}>알바 리스트</Text>
          <Card style={styles.cardradius}>
            <Info />
          </Card>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "stretch",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#F5D0A9",
    padding: 8
    //paddingLeft: 20,
  },
  logo: {
    paddingTop: 20,
    paddingLeft: 20
  },
  name: {
    flex: 0,
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    paddingLeft: 20
  },
  whatuneed: {
    marginTop: 15,
    fontSize: 20,
    paddingLeft: 20
  },
  tag: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 25,
    fontWeight: "bold",
    paddingLeft: 20
  },
  cardradius: {
    // width: 300,
    // height: 300,
    //Below lines will help to set the border radius
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    overflow: "hidden"
  }
});
