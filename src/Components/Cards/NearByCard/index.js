import React, { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import baseColors from "../../../Constant/color";
import { useNavigation } from "@react-navigation/native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function index({ data }) {
  const Navigation = useNavigation();

  var [isPress, setIsPress] = useState("");

  return (
    <TouchableOpacity
      onPress={() => {
        Navigation.navigate(data?.goTo);
      }}
    >
      <View
        style={{
          flexDirection: "column",
          width: deviceWidth / 1 - 60,
          marginVertical: 10,
          backgroundColor: baseColors.lightColor,
          borderRadius: 10,
          elevation: 4,
        }}
        // onPress={() =>{this.props.Navigation.navigate('NearbyPharmacy');}}
      >
        <ImageBackground
          source={data?.image}
          resizeMode={"cover"}
          style={{
            height: 170,
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
          imageStyle={{
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          }}
        >
          <TouchableOpacity>
            <AntDesign
              name="heart"
              size={30}
              style={{
                paddingRight: 10,
                paddingTop: 10,
                color:
                  isPress === "Press"
                    ? baseColors.dangerTextColor
                    : baseColors.lightTextColor,
              }}
              onPress={() => setIsPress("Press")}
            />
          </TouchableOpacity>
        </ImageBackground>
        <View style={{ flexDirection: "column", paddingVertical: 5 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
            }}
          >
            <Text>{data?.title}</Text>
            <View style={{ flexDirection: "row" }}>
              <FontAwesome
                name="circle"
                size={15}
                style={{
                  color: baseColors.sucessTextColor,
                  paddingTop: 2,
                  paddingHorizontal: 4,
                }}
              />
              <Text>{data?.status}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingRight: 10,
              paddingLeft: 3,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Entypo
                name="location-pin"
                size={20}
                style={{
                  color: baseColors.secondaryTextColor,
                }}
              />
              <Text>{data?.location}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <AntDesign
                name="star"
                size={17}
                style={{
                  color: baseColors.sucessTextColor,
                }}
              />
              <Text>{data?.rating}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default index;
