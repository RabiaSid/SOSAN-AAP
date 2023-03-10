import React from "react";
import {
  View,
  TouchableOpacity,
  Dimensions,
  Text,
  ImageBackground,
} from "react-native";
import { bluebtn } from "../../../Assets/images";
// import DarkGradient from "../../../Components/Gradient/DarkGradient";
import baseColors from "../../../Constant/color";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const deviceWidth = Dimensions.get("window").width;

export default function YourPlanCard(props) {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={()=>{
        navigation.navigate("AssuranceTermsAndCondition")
      }}>
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
            // borderWidth:1
          }}
        >
          <ImageBackground
            resizeMode="cover"
            source={bluebtn}
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
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: deviceWidth / 1 - 20,
                marginHorizontal:5
              }}
            >
              <Text style={{ fontSize: 13.5, paddingStart: 5, color: "gray" }}>
                Health Coverage of 80%
              </Text>
              <Text style={{ fontSize: 12, color: "gray" }}>
                Remain 20 years{" "}
              </Text>
            </View>
          </View>
          <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
               width:deviceWidth / 1 - 30,
               paddingVertical:5
              }}
            >
              <Ionicons
              name="trash-bin-sharp" size={20} color="red" />
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
              onPress={()=>{
                navigation.navigate("AssuranceEditPlanDetail")
              }}  
            >
              View Details
            </Text>
            <Ionicons name="chevron-forward" size={30} color="gray"
             onPress={()=>{
              navigation.navigate("AssuranceEditPlanDetail")
            }} 
            />
          </View>
          {props.children}
        </View>
      </View>
      </TouchableOpacity>
    </View>
  );
}