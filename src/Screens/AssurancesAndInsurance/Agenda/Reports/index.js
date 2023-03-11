import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  TouchableOpacity,
  Dimensions,
  Text,
  ScrollView,
  Image,
} from "react-native";
import AppHeader from "../../../../Components/AppHeader";
import { styles } from "./styles";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import baseColors from "../../../../Constant/color";
import Calender from "../../../../Components/Calender";
import SearchField from "../../../../Components/SearchField";
import { AvatarPerson3 } from "../../../../Assets/images";
import ClearedAndPending from "../../../../Components/SwitchSelector/ClearedAndPending";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function AssuranceAgendaReports() {
  const navigation = useNavigation();

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
                  fontSize: 18,
                }}
              >
                Reports
              </Text>
            </View>
          </View>
        </AppHeader>
      </View>
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
                width: deviceWidth / 1,
                justifyContent: "space-between",
                paddingHorizontal: 10,
                alignItems: "center",
                paddingVertical: 5,
                borderBottomWidth: 0.5,
                borderColor: baseColors.secondaryTextColor,
                paddingVertical: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: "bold",
                    paddingHorizontal: 5,
                  }}
                >
                  SOSAN ID: 15151815
                </Text>
                <View
                  style={{
                    flexDirection: "row",
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
              </View>
              <Image
                source={AvatarPerson3}
                style={{ width: 60, height: 60, borderRadius: 50 }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                width: deviceWidth / 1 - 20,
                justifyContent: "flex-start",
                alignItems: "center",
                paddingVertical: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "600",
                  paddingHorizontal: 5,
                }}
              >
                List Of Client
              </Text>
            </View>
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
                  width: deviceWidth / 1.2,
                  borderRadius: 50,
                  height: 40,
                }}
              />
            </View>
            <View style={{ height: deviceHeight / 1 }}>
              <ClearedAndPending />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

export default AssuranceAgendaReports;
