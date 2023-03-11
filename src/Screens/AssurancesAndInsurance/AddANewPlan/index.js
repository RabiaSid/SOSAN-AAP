import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TouchableOpacity, Dimensions, Text } from "react-native";
import AppHeader from "../../../Components/AppHeader";
import { styles } from "./style";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import baseColors from "../../../Constant/color";
import Button from "../../../Components/Buttons";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default function AssuranceAddANewPlan() {
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
              // borderWidth:1
            }}
          >
            <View
              style={{
                width: deviceWidth / 5,
                flexDirection: "row",
                justifyContent: "flex-start",
                // borderWidth:1
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
                    color: "black",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: deviceWidth / 2 + 40,
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Text style={styles.textHeading}>Add New Plan</Text>
            </View>
          </View>
        </AppHeader>
      </View>
      <View style={styles.screenMiddle}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            width: deviceWidth / 1 - 30,
            alignItems: "center",
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              paddingEnd: 5,
              color: baseColors.primaryColor,
            }}
            onPress={() => {
              navigation.navigate("AssurancesAndInsuranceAppHome");
            }}
          >
            Skip
          </Text>
          <AntDesign
            name="doubleright"
            size={20}
            style={{ color: baseColors.primaryColor }}
            onPress={() => {
              navigation.navigate("AssurancesAndInsuranceAppHome");
            }}
          />
        </View>
        <View
          style={{
            height: deviceHeight / 2,
            justifyContent: "space-around",
            paddingTop: 90,
          }}
        >
          <View
            style={{
              borderWidth: 2,
              height: 250,
              marginVertical: 25,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              borderColor: baseColors.lightGreyColor,
              width: deviceWidth / 1 - 30,
              marginHorizontal: 10,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    marginBottom: 5,
                    fontWeight: "bold",
                    color: baseColors.lightGreyColor,
                    textAlign: "center",
                  }}
                >
                  You have no plan added
                </Text>
                <View />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    width: deviceWidth / 1 - 99,
                    textAlign: "center",
                  }}
                >
                  <AntDesign name="pluscircle" size={20} color="gray" />
                  <Text
                    onPress={() => {
                      navigation.navigate("AssuranceAddplanDetail");
                    }}
                    style={{ fontSize: 16, color: "gray" }}
                  >
                    Add Your Insurence Details
                  </Text>
                  <View />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.BottomBtn}>
          <Button
            styles={styles.LoginBtn}
            onPress={() => {
              navigation.navigate("AssurancesAndInsuranceAppHome");
            }}
          >
            <Text style={styles.LoginBtnTextSty}>Continue</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}
