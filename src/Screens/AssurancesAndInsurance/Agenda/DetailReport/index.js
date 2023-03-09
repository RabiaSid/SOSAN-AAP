import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  TouchableOpacity,
  Dimensions,
  Text,
  ScrollView,
} from "react-native";
import AppHeader from "../../../../Components/AppHeader";
import { styles } from "./style";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import baseColors from "../../../../Constant/color";
import AppointmentAccountID from "../../../../Components/Cards/AppointmentID";
import { Entypo } from '@expo/vector-icons';
import PreciptionList from "../../../../Components/List/PrecriptionList";

const deviceWidth = Dimensions.get("window").width;

export default function AssuranceReportDetail() {

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
                  onPress={() => {
                    navigation.goBack("");
                  }}
                  name="chevron-back-sharp"
                  size={37}
                  style={{
                    color: baseColors.darkColor,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
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
              <Text style={styles.textHeading}> Detail Report</Text>
            </View>
            <View
              style={{
                width: deviceWidth / 5,
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            ></View>
          </View>
        </AppHeader>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          <View style={styles.screenMiddle}>
            <View
              style={{
                flexDirection: "column",
              }}
            >
              <AppointmentAccountID />
              <View style={{ flexDirection: 'column', justifyContent: 'space-around', }}>
                <Text style={styles.title}>Plan Subcribe</Text>
                <Text style={styles.BlueText}>ASCOMA</Text>
                <View style={{ flexDirection: 'column', justifyContent: 'space-around', marginHorizontal: 45, marginBottom: 6, }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <AntDesign name="heart" size={12} color="green" />
                    <Text style={styles.IconText}>Coverage 60%</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Entypo name="lock" size={12} color="blue" />
                    <Text style={styles.IconText}>15 years</Text>
                  </View>
                </View>
              </View>
              <View>
                <Text style={styles.title}>Claims</Text>
              </View>
              <View>
              <PreciptionList/>
              </View>
              <View>
              <PreciptionList/>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}