import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import faker from "faker";

export default class AssetExample extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.index}>발렛</Text>
        <Text style={styles.title}>주차관리, 발렛파킹</Text>
        <Text style={styles.info}>날짜</Text>
        <Text style={styles.detail}>10월 22일 (화) - 10월 31일 (목)</Text>
        <Text style={styles.info}>시간</Text>
        <Text style={styles.detail}>2019.01.01 ~ 2020.01.01</Text>
        <Text style={styles.info}>시급</Text>
        <Text style={styles.detail}>{faker.random.number()}원</Text>
        <Text style={styles.info}>주소</Text>
        <Text style={styles.detail}>{faker.address.streetAddress()}</Text>
        <Image
          style={styles.logo}
          source={require("../assets/expo.symbol.white.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    //alignItems: 'center',
    justifyContent: "center",
    paddingTop: 24,
    paddingLeft: 20
  },
  index: {
    fontSize: 14,
    color: "gray"
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    paddingBottom: 30
  },
  info: {
    color: "#01A9DB",
    fontSize: 20
  },
  detail: {
    paddingBottom: 10
  },
  logo: {
    height: 128,
    width: 128
  }
});
