import React from "react";
import { View, StyleSheet, Dimensions, FlatList } from "react-native";
import SwitchSelector from "react-native-switch-selector";
import baseColors from "../../../Constant/color";
import { useNavigation } from "@react-navigation/native";
import { NewRequestsAndObjectionsData } from "../../../Config";
import ReportCard from "../../.././Components/Cards/ReportCard";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function index({ children }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SwitchSelector
        initial={0}
        textColor={baseColors.secondaryTextColor} //'#7a44cf'
        selectedColor={baseColors.lightColor}
        bold
        height={50}
        fontSize={16}
        buttonColor={baseColors.sucessColor}
        borderColor={baseColors.sucessColor}
        hasPadding
        options={[{ label: "New Requests" }, { label: "Objections" }]}
      />
      {children}
      <View
        style={{
          width: deviceWidth / 1,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FlatList
          data={NewRequestsAndObjectionsData}
          renderItem={({ item }) => <ReportCard data={item} />}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: deviceWidth / 1.1,
    marginTop: 70,
  },
  ActivityView: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 110,
    width: deviceWidth / 1 - 50,
    backgroundColor: baseColors.LightSecondaryColor,
    borderRadius: 15,
    marginTop: 10,
  },
  ActivityImage: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  itemsViewText: {
    color: baseColors.primaryTextColor,
    fontWeight: "bold",
    fontSize: 14,
  },
  icon: {
    color: baseColors.sucessColor,
  },
  ItemDisc: {
    flexDirection: "row",
    paddingTop: 5,
  },
});
export default index;
