import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function MyPage() {
  return (
    <ScrollView alwaysBounceVertical="true">
      <View style={styles.inContainer}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.textHeader}>프로필</Text>
          </View>
          <View style={styles.headerRight}>
            <Feather name="settings" size="32" color="orange"></Feather>
          </View>
        </View>
        <View style={styles.myInfoSummary}>
          <View style={styles.myInfoSummaryLeft}>
            <Ionicons name="ios-person-add" size="80" color="orange"></Ionicons>
          </View>
          <View style={styles.myInfoSummaryRight}>
            <Text style={styles.titleMyInfoSummary}>윤영욱</Text>
            <Text style={styles.subtitleMyInfoSummary}>만 27세, 남자</Text>
          </View>
        </View>
        <View style={styles.workScore}>
          <Text style={styles.textWorkScore}>
            나의 근무태도 점수는 4.5점입니다.
          </Text>
          <Text style={styles.textWorkScore}>(게이지)</Text>
          <Text style={styles.textWorkScore}>
            근무태도 점수를 높이면 채용될 확률이 높아집니다.
          </Text>
        </View>
        <View style={styles.myInfoDetail}>
          <View style={styles.myInfoDetailBox}>
            <Text style={styles.titleMyInfoDetail}>성명</Text>
            <Text style={styles.contentMyInfoDetail}>윤영욱</Text>
          </View>
          <View style={styles.myInfoDetailBox}>
            <Text style={styles.titleMyInfoDetail}>성별</Text>
            <Text style={styles.contentMyInfoDetail}>남자</Text>
          </View>
          <View style={styles.myInfoDetailBox}>
            <Text style={styles.titleMyInfoDetail}>생년월일</Text>
            <Text style={styles.contentMyInfoDetail}>1992-07-22</Text>
          </View>
          <View style={styles.myInfoDetailBox}>
            <Text style={styles.titleMyInfoDetail}>휴대폰번호</Text>
            <Text style={styles.contentMyInfoDetail}>01054884480</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 50
  },
  header: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: '#ff0000',
    justifyContent: "center",
    marginBottom: 40
  },
  textHeader: {
    fontSize: 40,
    fontWeight: "400"
  },
  headerLeft: {
    flex: 1,
    color: "#ffffff",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  headerRight: {
    flex: 1,
    // backgroundColor: '#d3d3d3',
    alignItems: "flex-end",
    justifyContent: "center"
  },
  myInfoSummary: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 40
  },
  myInfoSummaryLeft: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  myInfoSummaryRight: {
    flex: 2,
    justifyContent: "center",
    // backgroundColor: '#d3d3d3',
    paddingLeft: 20
  },
  titleMyInfoSummary: {
    fontSize: 25,
    marginBottom: 8
  },
  subtitleMyInfoSummary: {
    fontSize: 15,
    color: "#808080"
  },
  workScore: {
    flex: 1,
    // backgroundColor: '#008000',
    marginBottom: 40,
    alignItems: "center"
  },
  textWorkScore: {
    fontSize: 15,
    marginBottom: 5
  },
  myInfoDetail: {
    flex: 1
    // backgroundColor: '#800080',
  },
  myInfoDetailBox: {
    borderBottomColor: "#d3d3d3",
    borderBottomWidth: 1,
    paddingTop: 20
  },
  titleMyInfoDetail: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#808080",
    marginBottom: 10
  },
  contentMyInfoDetail: {
    fontSize: 30,
    marginBottom: 10
  }
});
