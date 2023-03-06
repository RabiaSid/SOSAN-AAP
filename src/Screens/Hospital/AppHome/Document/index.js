import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from "react-native";
import AppHeader from "../../../../Components/AppHeader/index";
import { styles } from "./style";
import baseColors from "../../../../Constant/color";
import { Ionicons } from "@expo/vector-icons";


const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function Documents() {
  return (
    <View style={styles.screenContainer}>
      <View>
        <AppHeader styles={styles.headerContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 5,
             
            }}
          >
            <View
              style={{
                width: deviceWidth / 3,
                flexDirection: "row",
                justifyContent: "flex-start",
               
              }}
            >
              <TouchableOpacity>
                <Ionicons
                  name="chevron-back-sharp"
                  size={30}
                  style={{ color: baseColors.lightTextColor }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: deviceWidth / 3,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text
                style={{ fontWeight: "bold", color: baseColors.lightTextColor }}
              >
                Appointments
              </Text>
            </View>
          </View>
        </AppHeader>
      </View>
      {/* <ScrollView> */}
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal:10
        }}
      >
        <View style={styles.screenMiddle}>
          <ScrollView showsVerticalScrollIndicator={false}>
         
          </ScrollView>
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

export default Documents;
