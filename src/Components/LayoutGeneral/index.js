import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import AppHeader from "../AppHeader/index";
import baseColors from "../../Constant/color";
import { Ionicons } from "@expo/vector-icons";
import SearchField from "../SearchField/index";
import Description from "../Description";
import StaffMember from "../Member";
import ReviewGallery from "../ReviewGallery";
import Map from "../Map";
import { useNavigation } from "@react-navigation/native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function LayoutGeneral(props) {
  const Navigation = useNavigation();
  return (
    <View style={styles.screenContainer}>
      <AppHeader styles={styles.headerContainer}>
        <View
          style={{
            width: deviceWidth / 1 - 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginVertical: 7,
          }}
        >
          <View
            style={{
              width: deviceWidth / 8,
              flexDirection: "row",
            }}
          >
            <TouchableOpacity onPress={() => Navigation.goBack("")}>
              <Ionicons
                name="chevron-back-sharp"
                size={40}
                style={{ color: baseColors.sucessTextColor }}
              />
            </TouchableOpacity>
          </View>
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
        </View>
      </AppHeader>

      <View style={styles.screen}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {props.top}
          {props.children}
          <View style={{ paddingVertical: 10 }}>
            <Description>About</Description>
          </View>
          {props.center}
          <View style={{ paddingVertical: 10 }}>
            <StaffMember />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Map />
          </View>
          <View>
            <ReviewGallery />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    height: deviceHeight / 1,
    width: deviceWidth / 1,
    flexDirection: "column",
    backgroundColor: baseColors.lightColor,

    zIndex: 0,
  },
  headerContainer: {
    backgroundColor: baseColors.lightColor,
    height: 70,
    marginTop: 35,
    width: deviceWidth / 1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomColor: baseColors.LightSecondaryColor,
    borderBottomWidth: 0.5,
    paddingVertical: 5,
    elevation: 4,
    zIndex: 1,
  },

  screen: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: deviceWidth / 1,
    top: -10,
    paddingBottom: 100,
  },
  textColor: {
    color: baseColors.lightTextColor,
    fontWeight: "bold",
  },
  textColorSuccess: {
    color: baseColors.sucessTextColor,
  },
  textColorDanger: {
    color: baseColors.dangerTextColor,
  },
});

export default LayoutGeneral;
