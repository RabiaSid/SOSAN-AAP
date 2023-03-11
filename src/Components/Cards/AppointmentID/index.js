import React from "react";
import { View, Image } from "react-native";
import { styles } from "./style.js";
import { AvatarPerson1 } from "../../../Assets/images/index";
import { Text } from "react-native";
const AppointmentID = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.item}>
        <View style={styles.imgView}>
          <Image source={AvatarPerson1} style={styles.imageSty} />
        </View>
        <View style={styles.listItem}>
          <Text style={styles.title}>Alfonso Vetrovs</Text>
          <View style={styles.idView}>
            <Text style={styles.idName}>SOSAN ID:</Text>
            <Text style={styles.id}>25ln55</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AppointmentID;
