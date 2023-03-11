import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import AppHeader from "../../../../Components/AppHeader/index";
import { styles } from "./style";
import baseColors from "../../../../Constant/color";
import { Ionicons } from "@expo/vector-icons";
import Calender from "../../../../Components/Calender";
import { AvatarPerson3 } from "../../../../Assets/images";
import AppointmentsAndTest from "../../../../Components/SwitchSelector/AppointmentsAndTest";
import SearchField from "../../../../Components/SearchField";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function AgendaAppointmentHospital() {
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
                width: deviceWidth / 4,
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
                width: deviceWidth / 2,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: baseColors.lightTextColor,
                  fontSize: 16,
                }}
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
        }}
      >
        <View style={styles.screenMiddle}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
          >
            <View
              style={{
                flexDirection: "row",
                width: deviceWidth / 1.1,
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: 5,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  paddingLeft: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    paddingHorizontal: 5,
                  }}
                >
                  August, 2022
                </Text>
                <Calender />
              </View>
              <Image
                source={AvatarPerson3}
                style={{ width: 60, height: 60, borderRadius: 50 }}
              />
            </View>
            <View style={{ height: deviceHeight / 1 }}>
              <AppointmentsAndTest>
                <View
                  style={{
                    flexDirection: "row",
                    width: deviceWidth / 1,
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    paddingVertical: 15,
                  }}
                >
                  <SearchField
                    styles={{
                      width: deviceWidth / 1.3,
                      borderRadius: 50,
                      height: 40,
                    }}
                  />
                  <Ionicons
                    name="funnel-outline"
                    size={35}
                    style={{ color: baseColors.sucessTextColor }}
                  />
                </View>
                {/* <Image
                source={AvatarPerson3}
                style={{ width: 60, height: 60, borderRadius: 50 }}
              /> */}
              </AppointmentsAndTest>
            </View>
          </ScrollView>
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

export default AgendaAppointmentHospital;
