import React from "react";
import { View, TouchableOpacity, Dimensions, Text } from "react-native";
import AppHeader from "../../../Components/AppHeader";
import { styles } from "./style";
import baseColors from "../../../Constant/color";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const Assurances = () => {
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
              // justifyContent:'center'
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
                  onPress={() => {
                    navigation.goBack("SignIn");
                  }}
                  name="chevron-back-sharp"
                  size={45}
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
                // width: deviceWidth / 3,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text style={styles.textHeading}>Assurances</Text>
            </View>
          </View>
        </AppHeader>
      </View>
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
          ></View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                paddingHorizontal: 30,
                marginTop: 20,
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Your Plan
            </Text>
          </View>
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
                    fontSize: 16,
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
                  <AntDesign name="pluscircle" size={24} color="black" />
                  <Text
                    onPress={() => {
                      navigation.navigate("AvaialblePlan");
                    }}
                    style={{ fontSize: 16 }}
                  >
                    Add Your Insurence Details
                  </Text>
                  <View />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Assurances;
