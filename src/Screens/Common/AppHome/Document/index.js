import React from "react";
import { View, Text, Dimensions, StyleSheet, FlatList } from "react-native";
import AppHeader from "../../../../Components/AppHeader";
import baseColors from "../../../../Constant/color";
import RequestCard from "../../../../Components/Cards/RequestCard";
import { RequestCardData } from "../../../../Config";
import { Ionicons } from "@expo/vector-icons";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const Document = () => {
  return (
    <View style={styles.ScreenContainer}>
      <AppHeader styles={styles.headerContainer}>
        <View
          style={styles.HeaderRow}
        >
          <Text
            style={styles.HeaderRowText}
          >
            Appoinment Request
          </Text>
        </View>
      </AppHeader>
      <View
        style={styles.ScreenMiddle}
      >
        <Text>Today</Text>
        <Ionicons name="filter-outline" size={24} color="black" />
      </View>
      <View
        style={styles.ScreenMiddleView}
      >
        <View style={styles.Container}>
          <FlatList
            data={RequestCardData}
            renderItem={({ item }) => <RequestCard data={item} />}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    height: deviceHeight / 1,
    width: deviceWidth / 1,
  },
  headerContainer: {
    backgroundColor: baseColors.lightColor,
    marginTop: 35,
    width: deviceWidth / 1,
  },
  Container: {
    flexDirection: "column",
    width: deviceWidth / 1,
    justifyContent: "center",
    alignItems: "center",
  },
  HeaderRow:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 55,
    backgroundColor: baseColors.sucessColor,
    borderBottomEndRadius: 7,
    borderBottomStartRadius: 7,
    width: deviceWidth / 1,
  },
  HeaderRowText:{
    fontWeight: "bold",
    color: baseColors.lightTextColor,
    fontSize: 17,
  },
  ScreenMiddle:{
    flexDirection: "row",
    justifyContent: 'flex-end',
    alignItems: "center",
    width: deviceWidth / 1,
    paddingRight: 20,
  },
  ScreenMiddleView:{
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }
});

export default Document;
