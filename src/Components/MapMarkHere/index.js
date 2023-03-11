import React from "react";
import {
  View,
  Image,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import baseColors from "../../Constant/color";
import { Entypo } from "@expo/vector-icons";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function MapMarkHere() {
  return (
    <>
      <View style={styles.lightTextView}>
        <Text style={styles.lightText}>--MARK HERE--</Text>
      </View>
      <View style={styles.locationView}>
        <Text style={{ fontWeight: "bold" }}>
          <Entypo
            name="location-pin"
            size={20}
            style={{ color: baseColors.sucessColor }}
          />
          2 Rue Charles Vigurie, 31300 Toulous, France
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <TouchableOpacity
            style={{
              elevation: 8,
              backgroundColor: baseColors.primaryColor,
              borderRadius: 5,
              width: 100,
              justifyContent: "center",
              alignItems: "center",
              height: 22,
              marginVertical: 20,
            }}
          >
            <Text
              style={{
                color: baseColors.lightTextColor,
                flexDirection: "column",
                textAlign: "center",
                fontSize: 12,
              }}
            >
              Get Direction
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <TouchableOpacity
            style={{
              elevation: 8,
              backgroundColor: baseColors.primaryColor,
              borderRadius: 5,
              width: 100,
              justifyContent: "center",
              alignItems: "center",
              height: 22,
              marginVertical: 20,
            }}
          >
            <Text
              style={{
                color: baseColors.lightTextColor,
                flexDirection: "column",
                textAlign: "center",
                fontSize: 12,
              }}
            >
              Share Location
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  lightTextView: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: deviceWidth / 1 - 80,
    marginVertical: 2,
  },
  lightText: {
    paddingLeft: 20,
    color: baseColors.secondaryTextColor,
    textAlign: "center",
    fontWeight: "bold",
  },

  locationView: {
    flexDirection: "row",
    // width:deviceWidth / 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MapMarkHere;
