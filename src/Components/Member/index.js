import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, Dimensions, Image, StyleSheet } from "react-native";
import DarkGradient from "../Gradient/DarkGradient";
import {
  AvatarPerson1,
  AvatarPerson2,
  AvatarPerson3,
  AvatarPerson4,
} from "../../Assets/images";
import baseColors from "../../Constant/color";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function StuffMember() {
  return (
    <View style={styles.View}>
      <View style={styles.Card}>
        <View style={styles.CardImageView}>
          <DarkGradient styles={styles.ImageView}>
            <Image source={AvatarPerson2} style={styles.Image} />
          </DarkGradient>

          <Text style={styles.CardImageText}>Owner Degree</Text>
        </View>
        <View style={styles.CardItemsView}>
          <Text style={{ fontSize: 16, fontWeight: "700" }}>Hellow</Text>
          <Text
            style={{ textAlign: "auto", paddingLeft: 3, paddingVertical: 5 }}
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.It is a
            long established fact that a reader will be distracted by the
            readable{" "}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: deviceWidth / 1 - 10,
          paddingVertical: 10,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "left" }}>
          Stuff Member
        </Text>
      </View>
      <View style={styles.StuffCard}>
        <View style={styles.StuffCardItem}>
          <View style={styles.StuffView}>
            <DarkGradient styles={styles.StuffImageView}>
              <Image source={AvatarPerson1} style={styles.StuffImage} />
            </DarkGradient>
          </View>
          <View style={styles.StuffViewText}>
            <Text style={styles.StaffCardHeading}>Jhon</Text>
            <Text style={styles.StaffCardText}>Manager</Text>
            <Text style={styles.StaffCardText}>Degree</Text>
          </View>
        </View>

        <View style={styles.StuffCardItem}>
          <View style={styles.StuffView}>
            <DarkGradient styles={styles.StuffImageView}>
              <Image source={AvatarPerson3} style={styles.StuffImage} />
            </DarkGradient>
          </View>
          <View style={styles.StuffViewText}>
            <Text style={styles.StaffCardHeading}>David</Text>
            <Text style={styles.StaffCardText}>Exicutive</Text>
            <Text style={styles.StaffCardText}>Degree</Text>
          </View>
        </View>

        <View style={styles.StuffCardItem}>
          <View style={styles.StuffView}>
            <DarkGradient styles={styles.StuffImageView}>
              <Image source={AvatarPerson4} style={styles.StuffImage} />
            </DarkGradient>
          </View>
          <View style={styles.StuffViewText}>
            <Text style={styles.StaffCardHeading}>Jenny</Text>
            <Text style={styles.StaffCardText}>Head Nurse</Text>
            <Text style={styles.StaffCardText}>Degree</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  View: {
    flexDirection: "column",
    width: deviceWidth / 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Card: {
    flexDirection: "row",

    width: deviceWidth / 1 - 20,
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderRadius: 7,
    backgroundColor: baseColors.lightColor,
    elevation: 6,
    marginVertical: 10,
  },
  CardImageView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: deviceWidth / 3.1,
  },

  ImageView: {
    height: 105,
    width: 105,
    borderRadius: 100,
    padding: 2.5,
  },
  Image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  CardImageText: {
    color: baseColors.secondaryTextColor,
    fontWeight: "700",
    textAlign: "center",
    width: 70,
  },
  CardItemsView: {
    flexDirection: "column",
    width: deviceWidth / 1.7,
  },
  StuffCard: {
    flexDirection: "row",
    width: deviceWidth / 1 - 10,
    justifyContent: "space-between",
  },
  StuffCardItem: {
    flexDirection: "column",
    marginVertical: 10,
    paddingVertical: 5,
    width: deviceWidth / 3.2,
    backgroundColor: baseColors.lightColor,
    elevation: 6,
    borderRadius: 10,
  },
  StuffImageView: {
    height: 95,
    width: 95,
    borderRadius: 100,
    padding: 2.5,
  },
  StuffImage: {
    height: 90,
    width: 90,
    borderRadius: 50,
  },
  StuffView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  StuffViewText: {
    paddingLeft: 8,
    paddingVertical: 5,
  },
  StaffCardHeading: {
    color: baseColors.secondaryTextColor,
    fontSize: 15,
    fontWeight: "700",
  },
  StaffCardText: {
    color: baseColors.secondaryTextColor,
  },
});
export default StuffMember;
