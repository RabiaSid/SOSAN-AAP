import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  TouchableOpacity,
  Dimensions,
  Text,
  ScrollView,
} from "react-native";
import AppHeader from "../../../Components/AppHeader";
import { styles } from "./style";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import MedicalHistoryID from "../../../Components/Cards/MedicalHistory";
import baseColors from "../../../Constant/color";
import InformationDetailCard from "../../../Components/Cards/InformationCards/InformationDetailCard";
import InformationHistoryCard from "../../../Components/Cards/InformationCards/InformationHistoryCard";
import DarkGradient from "../../../Components/Gradient/DarkGradient";
import BasicHistoryCard from "../../../Components/Cards/InformationCards/BasicHistoryCard";

const deviceWidth = Dimensions.get("window").width;

export default function MedicalHistory() {
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
                    navigation.goBack("AssurancesAbout");
                  }}
                  name="chevron-back-sharp"
                  size={37}
                  style={{
                    color: baseColors.lightTextColor,
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
              <Text style={styles.textHeading}>Put Medical History</Text>
            </View>
            <View
              style={{
                width: deviceWidth / 5,
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <AntDesign
                name="exclamationcircleo"
                size={20}
                style={{ fontWeight: "bold", color: baseColors.lightTextColor }}
              />
            </View>
          </View>
        </AppHeader>
      </View>
      <ScrollView>
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
              <View
                style={{
                  marginTop: 10,
                  backgroundColor: baseColors.lightColor,
                }}
              >
                <View>
                  <MedicalHistoryID />
                </View>
              </View>
              <View
                style={{
                  marginTop: 30,
                  backgroundColor: baseColors.lightColor,
                }}
              >
                <InformationDetailCard />
              </View>
              <View
                style={{
                  marginTop: 10,
                  backgroundColor: baseColors.lightColor,
                }}
              >
                <InformationHistoryCard />
              </View>
              <View
                style={{
                  marginTop: 10,
                  backgroundColor: baseColors.lightColor,
                }}
              >
                <BasicHistoryCard />
              </View>
              <View
                style={{
                  marginVertical: 8,
                  width: deviceWidth / 1,
                  backgroundColor: baseColors.lightColor,
                }}
              >
                <DarkGradient
                  styles={{
                    elevation: 8,
                    backgroundColor: baseColors.primaryColor,
                    borderRadius: 50,
                    paddingVertical: 10,
                    marginVertical: 10,
                    width: deviceWidth / 1 - 60,
                    marginHorizontal: 15,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    onPress={() => {
                      navigation.navigate("PaymentDone");
                    }}
                    style={{
                      color: baseColors.lightColor,
                      fontSize: 20,
                    }}
                  >
                    Done
                  </Text>
                </DarkGradient>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
