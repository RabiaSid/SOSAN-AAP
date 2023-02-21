import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from "react-native";
import AppHeader from "../../../../Components/AppHeader/index";
import { NotificationData } from "../../../../Config/index";
import { styles } from "./style";
import baseColors from "../../../../Constant/color";
import { Ionicons } from "@expo/vector-icons";
import NotificationListCard from "../../../../Components/List/NotificationListCard/index"


const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function Notification() {
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
                Notification
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
          <FlatList
            data={NotificationData}
            renderItem={({ item }) => (
              <NotificationListCard data={item}/>
            )}
          />
          </ScrollView>
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

export default Notification;
