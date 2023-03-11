import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { styles } from "./style.js";
import { AvatarPerson1 } from "../../../Assets/images";
import { Text } from "react-native";
import baseColors from "../../../Constant/color";

const DoctorAccountID = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.item}>
        <View style={styles.imgDiv}>
          <Image source={AvatarPerson1} style={styles.imageSty} />
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.title}>Kinna Levin</Text>
            <Text style={styles.id}>Your gynachologist</Text>
          </View>
        </View>
        <View style={styles.DivTwo}>
          <Text style={styles.titleTwo}>Visisted 25 Mach 2022</Text>
          <TouchableOpacity
            style={{
              elevation: 8,
              backgroundColor: baseColors.sucessColor,
              width: 130,
              justifyContent: "space-evenly",
              alignItems: "center",
              marginTop: 10,
              height: 30,
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                color: baseColors.lightTextColor,
                flexDirection: "column",
                textAlign: "center",
                fontSize: 16,
              }}
            >
              Laparoscopic
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DoctorAccountID;
