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
import {  ListOfSchedule } from "../../../../Config/index";
import Button from "../../../../Components/Buttons/index";
import { styles } from "./style";
import baseColors from "../../../../Constant/color";
import { Ionicons } from "@expo/vector-icons";

import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Calender from "../../../../Components/Calender";


const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const Agenda = () => {
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
           <ScrollView>
            <View style={styles.screenMiddle}>
              <Calender />
            {/* <FlatList
        data={ListOfSchedule}
        renderItem={({ item }) => (
          <View style={styles.CardStyling}>
            <View style={styles.item} key={item.key}>
            {item?.image ? (
                      <Image source={item?.image} style={styles.img} />
                      ) : null} 
              
              <View style={styles.TitleHead}>
                <Text style={styles.title}>{item?.title}</Text>
                <View style={styles.ItemDisc}>
                  <Entypo
                    name="location"
                    size={14}
                    style={{ color: baseColors.dangerTextColor , paddingRight:6 }}
                  />
                  <Text style={styles.discp}>{item?.location}</Text>
                </View>
                <View style={styles.ItemDisc}>
                  <FontAwesome5
                    name="calendar-week"
                    size={14}
                    style={{ color: baseColors.primaryColor , paddingRight:6  }}
                  />
                  <Text style={styles.discp}>{item?.dateDay}</Text>
                </View>
                <View style={styles.ItemDisc}>
                  <Ionicons
                    name="time"
                    size={14}
                    style={{ color: baseColors.sucessColor , paddingRight:6 }}
                  />
                  <Text style={styles.discp}>{item?.time}</Text>
                </View>
              </View>
              <View>
                <Ionicons
                  name="settings"
                  size={24}
                  style={{ color: baseColors.primaryColor }}
                />
              </View>
            </View>
            <View style={styles.ButtonView}>
            {item?.Sucess ? (
                      <Button styles={styles.ButtonSucess}>
                      <Text style={styles.ButtonText}>{item?.Sucess}</Text>
                    </Button>
                      ) : null}
              {item?.Reject ? (
                      <Button styles={styles.ButtonReject}>
                      <Text style={styles.ButtonText}>{item?.Reject}</Text>
                    </Button>
                      ) : null}
              
            </View>
          </View>
        )}
      /> */}
            </View>
            </ScrollView> 
          </View>
          {/* </ScrollView> */}
        </View>
    );
}



export default Agenda;


