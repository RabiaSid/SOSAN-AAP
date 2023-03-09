import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { styles } from "./style.js";
import { AvatarPerson1 } from "../../../Assets/images";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const ReportCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(data?.goto);
        }}
      >
        <View style={styles.Container}>
          <View style={styles.item}>
            <View style={styles.imgDiv}>
              <Image source={data?.image} style={styles.imageSty} />
              <View style={{ flexDirection: "column" }}>
                <Text style={styles.title}>{data?.title}</Text>
                <Text style={styles.id}>{data?.year}</Text>
              </View>
            </View>
            <View style={styles.DivTwo}>
              <Ionicons
                onPress={() => {
                  navigation.navigate(data?.goToChat);
                }}
                name="chatbubble-ellipses"
                size={39}
                color="green"
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ReportCard;
