import React, { useState } from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import baseColors from "../../../Constant/color";
import { Ionicons } from "@expo/vector-icons";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function index({ data }) {
  return (
    <View style={styles.ActivityView}>
      <Image source={data?.image} style={styles.ActivityImage}></Image>
      <View style={{ flexDirection: "column" }}>
        <Text>{data?.title}</Text>
        <View style={styles.ItemDisc}>
          <Text>{data?.Quantity}</Text>
        </View>
        <Text>
          {data?.Bill} <Text style={styles.itemsViewTextDanger}> $ 500 </Text>
        </Text>
      </View>
      <View style={{ flexDirection: "column" }}>
        <Ionicons name="checkmark-circle-sharp" size={24} style={styles.icon} />
        <Text style={styles.itemsViewText}>{data?.Day}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: deviceWidth / 1 - 50,
    marginVertical: 5,
  },
  ActivityView: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
    width: deviceWidth / 1 - 50,
    backgroundColor: baseColors.LightSecondaryColor,
    borderRadius: 15,
    marginTop: 10,
  },
  ActivityImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  itemsViewText: {
    color: baseColors.darkTextColor,
    fontWeight: "bold",
    fontSize: 14,
  },
  itemsViewTextDanger: {
    color: baseColors.dangerTextColor,
    fontWeight: "bold",
    fontSize: 14,
  },
  icon: {
    color: baseColors.sucessTextColor,
  },
  ItemDisc: {
    flexDirection: "row",
    paddingTop: 5,
  },
});

export default index;
