import React from "react";
import {
  View,
  TouchableOpacity,
  Dimensions,
  Text,
  ImageBackground,
} from "react-native";
import { BannerBlue } from "../../../Assets/images/index";
import baseColors from "../../../Constant/color";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const deviceWidth = Dimensions.get("window").width;

export default function AvaialblePlanCard({ children }) {
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          borderWidth: 2,
          marginTop: 15,
          borderRadius: 10,
          borderColor: baseColors.lightGreyColor,
          elevation: 6,
          backgroundColor: baseColors.LightSecondaryColor,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 55,
            width: deviceWidth / 1 - 20,
          }}
        >
          <ImageBackground
            resizeMode="cover"
            source={BannerBlue}
            style={{ height: 30, width: 120 }}
          >
            <Text
              style={{
                color: baseColors.lightColor,
                fontSize: 14,
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}
            >
              25 years
            </Text>
          </ImageBackground>
          <TouchableOpacity
            style={{
              elevation: 8,
              backgroundColor: baseColors.sucessColor,
              borderRadius: 5,
              width: 140,
              justifyContent: "center",
              alignItems: "center",
              height: 30,
              marginVertical: 20,
            }}
          >
            <Text
              style={{
                color: baseColors.lightTextColor,
                flexDirection: "column",
                textAlign: "center",
                fontSize: 14,
              }}
            >
              Per month $50
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 18, paddingHorizontal: 15 }}>
              Plan Name
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              // height: 40,
              paddingBottom: 5,
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{ fontSize: 13.5, paddingHorizontal: 10, color: "gray" }}
              >
                Health Coverage of 80%
              </Text>
            </View>
            <View style={{ flexDirection: "column", paddingHorizontal: 15 }}>
              <Text style={{ fontSize: 12, color: "gray" }}>
                For all your personal
              </Text>
              <Text style={{ fontSize: 12, color: "gray", paddingLeft: 10 }}>
                medical expenses
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                paddingHorizontal: 5,
              }}
            >
              <Text
                style={{ fontSize: 16, color: "gray" }}
                onPress={() => {
                  navigation.navigate("AssurancesAbout");
                }}
              >
                View Details
              </Text>
              <Ionicons name="chevron-forward" size={30} color="gray" />
            </View>
            {children}
            {/* <View style={{height: 80,}}>
                      <DarkGradient
                          styles={{ elevation: 8,
                            backgroundColor: baseColors.primaryColor,
                            borderRadius: 50,
                            paddingVertical: 10,
                            marginVertical: 10,
                            width: deviceWidth / 1 - 60,
                            marginHorizontal: 15,
                            justifyContent: "center",
                            alignItems: "center"}}
                      >
                          <Text 
                            onPress={()=> {
                                navigation.navigate("MedicalHistory")
                              }}
                        
                          style={{
                              color: baseColors.lightColor,
                              fontSize: 20
                          }}>Subscribe Now</Text>
                      </DarkGradient>
                  </View> */}
          </View>
        </View>
      </View>
    </View>
  );
}
