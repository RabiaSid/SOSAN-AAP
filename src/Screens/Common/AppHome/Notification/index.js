import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import AppHeader from "../../../../Components/AppHeader/index";
import { NotificationData } from "../../../../Config/index";
import Button from "../../../../Components/Buttons/index";
import { styles } from "./style";
import baseColors from "../../../../Constant/color";
import { Ionicons } from "@expo/vector-icons";

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
          <FlatList
            data={NotificationData}
            renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent:'flex-start',
                  alignItems: "center",
                  padding: 5,
                }}
                key={item?.key}
              >
                <Image
                  source={item?.image}
                  style={{ height: 45, width: 45, borderRadius: 50,  marginHorizontal:20}}
                ></Image>

                <View style={{ flexDirection: "column" }}>
                  <Text>
                    {item?.message}
                    <Text style={{ color: baseColors.sucessColor, }}>
                      {item?.ConfirmSucess}
                    </Text>
                    <Text style={{ color: baseColors.dangerTextColor, }}>
                      {item?.ConfirmReject}
                    </Text>
                  </Text>

                  <View style={{ flexDirection: "row" }}>
                    {item?.Sucess ? (
                      <Button
                        styles={{
                          elevation: 0,
                          backgroundColor: baseColors.sucessColor,
                          width: 70,
                          height: 27,
                          borderRadius: 5,
                          margin:5,
                          justifyContent: "center",
                          alignItems: "center",
                          color: baseColors.lightColor,
                          
                        }}
                      >
                        <Text
                        style={{
                          color: baseColors.lightColor,
                          
                          
                        }}
                        >{item?.Sucess}</Text>
                      </Button>
                    ) : null}

                    {item?.Reject ? (
                      <Button
                        styles={{
                          elevation: 0,
                          backgroundColor: baseColors.dangerTextColor,
                          width: 70,
                          height: 27,
                          borderRadius: 5,
                          margin:5,
                          justifyContent: "center",
                          alignItems: "center",
                          color: baseColors.lightColor,
                        }}
                      >
                        <Text
                        style={{
                          color: baseColors.lightColor,
                          
                          
                        }}
                        >{item?.Reject}</Text>
                      </Button>
                    ) : null}
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

export default Notification;
