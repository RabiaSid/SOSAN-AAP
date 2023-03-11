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
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AddDrugData } from "../../../../Config";
import { AvatarPerson1 } from "../../../../Assets/images";
import SearchField from "../../../../Components/SearchField";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

let colors = [baseColors.lightColor, baseColors.LightSecondaryColor];

function RegisteredClientsAssurance() {
  const Navigation = useNavigation();
  return (
    <View style={styles.screenContainer}>
      <View>
        <AppHeader styles={styles.headerContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 20,
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
                  style={{ color: baseColors.darkColor }}
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
                  color: baseColors.darkColor,
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
              height: deviceHeight / 1.2,
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
                width: deviceWidth / 1 - 15,
                borderTopRightRadius: 25,
                borderTopLeftRadius: 25,
                backgroundColor: baseColors.primaryColor,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: deviceWidth / 1 - 10,
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
                  Reg Date
                </Text>
                <Text
                  style={{
                    color: baseColors.lightTextColor,
                  }}
                >
                  Exp Date
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
                Navigation.navigate("IssuranceEditDetail");
              }}
            >
              <FlatList
                data={AddDrugData}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => (
                  <View
                    style={{
                      width: deviceWidth / 1 - 15,
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                      height: 55,

                      backgroundColor: colors[index % colors.length],
                    }}
                  >
                    <Image
                      source={AvatarPerson1}
                      style={{ height: 35, width: 35, borderRadius: 50 }}
                    />
                    <Text>{item?.title}</Text>
                    <Text>12-08-2022</Text>
                    <Text>12-08-2022</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                      }}
                    >
                      <EvilIcons
                        name="pencil"
                        size={28}
                        color="grey"
                        onPress={() => {
                          Navigation.navigate("TrackingIssuranceEditDetail");
                        }}
                      />
                      <Ionicons
                        name="ios-trash-bin-sharp"
                        size={20}
                        color="red"
                      />
                    </View>
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

export default RegisteredClientsAssurance;
