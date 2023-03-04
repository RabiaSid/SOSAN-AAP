import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { Logo, AvatarPerson1, AvatarPerson2 } from "../../../Assets/images";
import AppHeader from "../../../Components/AppHeader/index";
import { styles } from "./style";
import baseColors from "../../../Constant/color";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import SearchField from "../../../Components/SearchField/index";
import BookAnAppointment from "../../../Components/Cards/BookAnAppointment/index";
import { MedicineDoctorData, ForgeinDoctorData } from "../../../Config";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function NearByDoctor() {
  const Navigation = useNavigation();
  return (
    <View style={styles.screenContainer}>
      <AppHeader styles={styles.headerContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 10,
          }}
        >
          <View
            style={{
              width: deviceWidth / 3,
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={() => Navigation.goBack("Epargne")}>
              <Ionicons
                name="chevron-back-sharp"
                size={30}
                style={{ color: baseColors.darkTextColor }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Image source={Logo} style={{ height: 30, width: 120 }} />
          </View>
        </View>
      </AppHeader>

      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: deviceHeight / 1,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.screenMiddle}>
            <View
              style={{
                width: deviceWidth / 1.2,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <SearchField
                styles={{
                  width: deviceWidth / 1.2,
                  height: 37,
                  borderRadius: 20,
                  elevation: 2,
                }}
              />
            </View>
            <View
              style={{
                width: deviceWidth / 1.1,
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                }}
              >
                Doctor Nearby
              </Text>
              <Entypo name="dots-three-vertical" size={24} color="black" />
            </View>

            <FlatList
              data={MedicineDoctorData}
              renderItem={({ item }) => <BookAnAppointment data={item} />}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                width: deviceWidth / 1.1,
                paddingVertical: 5,
              }}
            >
              <Text
                style={{ fontSize: 16, fontWeight: "bold", textAlign: "left" }}
              >
                Forgein Doctor
              </Text>
            </View>
            <FlatList
              data={ForgeinDoctorData}
              renderItem={({ item }) => <BookAnAppointment data={item} />}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default NearByDoctor;
