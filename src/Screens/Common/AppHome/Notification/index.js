import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import AppHeader from "../../../../Components/AppHeader/index";
import { NotificationData } from "../../../../Config/index";
import { styles } from "./style";
import baseColors from "../../../../Constant/color";
import { Ionicons } from "@expo/vector-icons";
import NotificationListCard from "../../../../Components/List/NotificationListCard/index";
import { useNavigation } from "@react-navigation/native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function Notification() {
  const Navigation = useNavigation();
  
  return (
    <View style={styles.screenContainer}>
      <View>
        <AppHeader styles={styles.headerContainer}>
          <View style={styles.HeaderRow}>
            <View style={styles.HeaderRowitems}>
              <TouchableOpacity>
                <Ionicons
                  name="chevron-back-sharp"
                  size={30}
                  style={{ color: baseColors.lightTextColor }}
                  onPress={() => {
                    Navigation.goBack("");
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.HeaderRowTextView}>
              <Text style={styles.HeaderRowText}>Notification</Text>
            </View>
          </View>
        </AppHeader>
      </View>
      {/* <ScrollView> */}
      <View style={styles.MiddleViewMain}>
        <View style={styles.screenMiddle}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <FlatList
              data={NotificationData}
              renderItem={({ item }) => <NotificationListCard data={item} />}
            />
          </ScrollView>
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

export default Notification;
