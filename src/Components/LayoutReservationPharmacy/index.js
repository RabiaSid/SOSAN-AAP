import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
} from "react-native";
import AppHeader from "../../Components/AppHeader/index";
import { styles } from "./style";
import baseColors from "../../Constant/color";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { AddDrugData } from "../../Config";
import { AvatarPerson1 } from "../../Assets/images";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

let colors = [baseColors.lightColor, baseColors.LightSecondaryColor];

function index(props) {
  const Navigation = useNavigation();
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
                width: deviceWidth / 5,
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  Navigation.goBack("");
                }}
              >
                <Ionicons
                  name="chevron-back-sharp"
                  size={30}
                  style={{ color: baseColors.lightTextColor }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: deviceWidth / 1.6,
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
                title="Reversation"
              >
                {props.title}
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
          paddingHorizontal: 10,
        }}
      >
        <View style={styles.screenMiddle}>
          {props.children}
          <View
            style={{
              width: deviceWidth / 1.1,
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              paddingTop: 10,
            }}
          >
            <View
              style={{
                height: 55,
                width: deviceWidth / 1.1 - 7,
                borderTopRightRadius: 25,
                borderTopLeftRadius: 25,
                backgroundColor: baseColors.primaryColor,
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <View
                style={{
                  width: deviceWidth / 1.15,
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: baseColors.lightTextColor,
                  }}
                >
                  Profile
                </Text>
                <Text
                  style={{
                    color: baseColors.lightTextColor,
                  }}
                >
                  Name
                </Text>
                <Text
                  style={{
                    color: baseColors.lightTextColor,
                  }}
                >
                  Reservation Date
                </Text>
              </View>
            </View>
            <TouchableOpacity onPress={props.onPress}>
              <FlatList
                data={AddDrugData}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => (
                  <View
                    style={{
                      width: deviceWidth / 1 - 40,
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                      height: 55,

                      backgroundColor: colors[index % colors.length],
                    }}
                  >
                    <Image
                      source={AvatarPerson1}
                      style={{ height: 40, width: 40, borderRadius: 50 }}
                    />
                    <Text>{item?.title}</Text>
                    <Text>12-.8-2022</Text>
                  </View>
                )}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

export default index;
