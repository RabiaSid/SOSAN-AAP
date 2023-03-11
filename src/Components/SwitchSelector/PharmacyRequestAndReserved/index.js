import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import SwitchSelector from "react-native-switch-selector";
import baseColors from "../../../Constant/color";
import { AvatarPerson2 } from "../../../Assets/images";
import PharmacyRequestSelectorCard from "../../Cards/PharmacyRequestSelectorCard";
import PharmacyReservedSelectorCard from "../../Cards/PharmacyReservedSelectorCard";
import {
  PharmacyRequestSelectorData,
  PharmacyReservedSelectorData,
} from "../../../Config";
import { Entypo } from "@expo/vector-icons";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function index() {
  const [switchValue, setswitchValue] = useState(false);

  return (
    <View style={styles.container}>
      <SwitchSelector
        initial={0}
        textColor={baseColors.secondaryTextColor} //'#7a44cf'
        selectedColor={baseColors.lightColor}
        bold
        fontSize={16}
        buttonColor={baseColors.sucessColor}
        borderColor={baseColors.sucessColor}
        onPress={(value) => setswitchValue(value)}
        hasPadding
        options={[
          { label: "Requested", value: false },
          { label: "Reserved", value: true },
        ]}
      />

      <View>
        {switchValue !== true ? (
          <FlatList
            data={PharmacyRequestSelectorData}
            renderItem={({ item }) => (
              <PharmacyRequestSelectorCard data={item} />
            )}
          />
        ) : (
          <FlatList
            data={PharmacyReservedSelectorData}
            renderItem={({ item }) => (
              <PharmacyReservedSelectorCard data={item} />
            )}
          />
        )}
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
  icon: {
    color: baseColors.dangerTextColor,
  },
  ItemDisc: {
    flexDirection: "row",
    paddingTop: 5,
  },
});
export default index;
