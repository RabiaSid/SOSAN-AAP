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
import DarkGradient from "../../../../Components/Gradient/DarkGradient"
import { styles } from "./style";
import { Ionicons,MaterialIcons } from "@expo/vector-icons";
import baseColors from "../../../../Constant/color";
// import AvaialbleEditCard from "../../../../Components/Cards/AvaialableEditCard";
import YourPlanCard from "../../../../Components/Cards/YourPlanCard";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

function AssuranceYourPlans() {
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
                      navigation.goBack(" ");
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
                <Text style={styles.textHeading}>Your Plans</Text>
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
                  // borderWidth:1,
                  height:deviceHeight / 1.3
                }}
              >
              <YourPlanCard/>
              </View>
              <View style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                width: deviceWidth / 1 - 30,
  
              }}>
  
                <DarkGradient
                  styles={{
                    elevation: 8,
                    backgroundColor: baseColors.sucessColor,
                    borderRadius: 50,
                    padding: 10,
                    // paddingHorizontal: 12,
                    width: 60,
                    justifyContent: "center",
                    alignItems: "center",
                    height: 60,
                    // marginVertical: 20,
                  }}>
                  <MaterialIcons name="add" size={40} color="white" onPress={() => {
                    navigation.navigate("AssuranceAddplanDetail");
                  }} />
                </DarkGradient>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
}

export default AssuranceYourPlans