import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
} from "react-native";
import AppHeader from "../../../../Components/AppHeader/index";
import { styles } from "./style";
import baseColors from "../../../../Constant/color";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AddDrugData } from "../../../../Config";
import { AvatarPerson1 } from "../../../../Assets/images";
import { MaterialIcons } from "@expo/vector-icons";
import DarkGradient from "../../../../Components/Gradient/DarkGradient";
import SearchField from "../../../../Components/SearchField/index";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

let colors = [baseColors.lightColor, baseColors.LightSecondaryColor];

function AvailableDrugsPharmacy() {
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
                Available Drugs
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
        }}
      >
        <View style={styles.screenMiddle}>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              width: deviceWidth / 1 - 10,
              height: deviceHeight / 1.2 - 20,
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
            }}
          >
            <SearchField
              style={{
                height: 50,
                borderColor: baseColors.lightColor,
                borderWidth: 1,
                borderRadius: 50,
              }}
            />
            <View
              style={{
                height: 55,
                width: deviceWidth / 1 - 20,
                borderTopRightRadius: 25,
                borderTopLeftRadius: 25,
                backgroundColor: baseColors.primaryColor,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: deviceWidth / 1.1,
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
                  Select
                </Text>
                <Text
                  style={{
                    color: baseColors.lightTextColor,
                  }}
                >
                  Medicine Name
                </Text>
                <Text
                  style={{
                    color: baseColors.lightTextColor,
                  }}
                >
                  Catogery
                </Text>
                <Text
                  style={{
                    color: baseColors.lightTextColor,
                  }}
                >
                  Dosage
                </Text>
                <Text
                  style={{
                    color: baseColors.lightTextColor,
                  }}
                >
                  Action
                </Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => {
                Navigation.navigate("AvailableDrugsDetail");
              }}
            >
              <FlatList
                data={AddDrugData}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => (
                  <View
                    style={{
                      width: deviceWidth / 1 - 25,
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
                    <Text>{item?.formula}</Text>
                    <Text>{item?.Quantity}</Text>
                    <Ionicons
                      name="ios-trash-bin-sharp"
                      size={20}
                      color="red"
                    />
                  </View>
                )}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              width: deviceWidth / 1 - 30,
            }}
          >
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
              }}
            >
              <MaterialIcons
                name="add"
                size={40}
                color="white"
                onPress={() => {
                  Navigation.navigate("AddDrugsDetailPharmacy");
                }}
              />
            </DarkGradient>
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

export default AvailableDrugsPharmacy;
