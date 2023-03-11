import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import baseColors from "../../../Constant/color";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
function EpargneList({ data }) {
  return (
    <View style={styles.ListBottom}>
      <View style={styles.Listitems} key={data?.key}>
        <Text> {data?.message}</Text>
        {data?.Sucess ? (
          <Text style={styles.textColorSuccess}>{data?.Sucess}</Text>
        ) : null}
        {data?.Reject ? (
          <Text style={styles.textColorDanger}>{data?.Reject}</Text>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ListBottom: {
    borderBottomWidth: 0.3,
    borderBottomColor: baseColors.secondaryTextColor,
    height: 35,
    width: deviceWidth / 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  Listitems: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: deviceWidth / 1.2,
    marginVertical: 2,
    paddingVertical: 2,
  },
  textColorSuccess: {
    color: baseColors.sucessTextColor,
  },
  textColorDanger: {
    color: baseColors.dangerTextColor,
  },
});

export default EpargneList;
