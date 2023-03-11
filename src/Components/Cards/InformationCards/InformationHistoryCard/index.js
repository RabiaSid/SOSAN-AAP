import React, { useState } from "react";
import { View, Dimensions } from "react-native";
import { styles } from "./style.js";
import { Text } from "react-native";
import { RadioButton } from "react-native-paper";

const deviceWidth = Dimensions.get("window").width;

const InformationHistoryCard = () => {
  const [value, setValue] = useState("");
  return (
    <View style={styles.Container}>
      <RadioButton.Group
        onValueChange={(value) => setValue(value)}
        value={value}
      >
        <Text style={styles.title}>Personal History</Text>
        <View style={styles.MainDiv}>
          <View style={styles.idName}>
            <Text>Diet</Text>
            <View
              style={{
                flexDirection: "row",
                width: deviceWidth / 1.3,
                justifyContent: "space-around",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton value="first" />
                <Text>Vegetarion</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton value="second" />
                <Text>Non Vegetarion</Text>
              </View>
            </View>
          </View>
          <View style={styles.idName}>
            <Text>Diet</Text>
            <View
              style={{
                flexDirection: "row",
                width: deviceWidth / 1.3,
                justifyContent: "space-around",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton value="first" />
                <Text>Smoker</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton value="second" />
                <Text>Non Smoker</Text>
              </View>
            </View>
          </View>
          <View style={styles.idName}>
            <Text>Drug Reaction</Text>
            <View
              style={{
                flexDirection: "row",
                width: deviceWidth / 1.5,
                justifyContent: "space-around",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton value="first" />
                <Text>No</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton value="second" />
                <Text>Yes</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: "gray",
              paddingVertical: 5,
            }}
          >
            <Text style={{ fontSize: 14 }}>History of present illness</Text>
          </View>
        </View>
      </RadioButton.Group>
    </View>
  );
};
export default InformationHistoryCard;
