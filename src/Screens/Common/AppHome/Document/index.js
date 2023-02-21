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
    <View style={{ flex: 1, height: deviceHeight / 1, width: deviceWidth / 1 }}>
      <AppHeader styles={styles.headerContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 15,
            backgroundColor: baseColors.sucessColor,
            borderBottomEndRadius: 7,
            borderBottomStartRadius: 7,
          }}
        >
          <View
            style={{
              width: deviceWidth / 3,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ fontWeight: "bold", color: baseColors.lightTextColor }}
            >
              Appoinment
            </Text>
          </View>
        </View>
      </AppHeader>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          width: deviceWidth / 1,
          paddingRight: 20,
        }}
      >
        <Text>Today</Text>
        <Ionicons name="filter-outline" size={24} color="black" />
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
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
  headerContainer: {
    backgroundColor: baseColors.lightColor,
    height: 50,
    marginTop: 35,
    width: deviceWidth / 1,
  },
  Container: {
    flexDirection: "column",
    width: deviceWidth / 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Document;
