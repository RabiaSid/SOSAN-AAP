import React, { useState } from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import SwitchSelector from "react-native-switch-selector";
import baseColors from "../../../Constant/color";
import { AvatarPerson2 } from "../../../Assets/images";
import { MaterialIcons, Entypo } from "@expo/vector-icons";

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
        buttonColor={baseColors.sucessColor}
        borderColor={baseColors.sucessColor}
        onPress={(value) => setswitchValue(value)}
        hasPadding
        options={[
          { label: "My Protectee", value: false },
          { label: "My Protectee", value: true },
        ]}
      />

      <View>
        {switchValue !== true ? (
          <View style={styles.ActivityView}>
            <Image source={AvatarPerson2} style={styles.ActivityImage}></Image>
            <View style={{ flexDirection: "column" }}>
              <Text>Jenny</Text>
              <View style={styles.ItemDisc}>
                <Entypo
                  name="location"
                  size={14}
                  style={{ color: baseColors.dangerTextColor, paddingRight: 6 }}
                />
                <Text> North Karachi, khi, sindh </Text>
              </View>
            </View>
            <View style={{ flexDirection: "column" }}>
              <MaterialIcons name="delete" size={24} style={styles.icon} />
              <Text style={styles.itemsViewText}>22 Oct</Text>
            </View>
          </View>
        ) : (
          <View style={styles.ActivityView}>
            <Image source={AvatarPerson2} style={styles.ActivityImage}></Image>
            <View style={{ flexDirection: "column" }}>
              <Text>Jenny</Text>
              <View style={styles.ItemDisc}>
                <Entypo
                  name="location"
                  size={14}
                  style={{ color: baseColors.dangerTextColor, paddingRight: 6 }}
                />
                <Text> North Karachi, khi, sindh </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", paddingTop: 25 }}>
              <Text style={styles.itemsViewText}>22 Oct</Text>
            </View>
          </View>
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
    width: 290,
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
