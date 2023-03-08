import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import GradientBackground from "../../../../Components/Gradient/DarkGradient/index";
import AppHeader from "../../../../Components/AppHeader/index";
import SearchField from "../../../../Components/SearchField/index";
import { styles } from "./style";
import { Ionicons, EvilIcons,MaterialIcons } from "@expo/vector-icons";
import baseColors from "../../../../Constant/color";
import { useNavigation } from "@react-navigation/native";
import { CurrentChampaignDataPharmacy } from "../../../../Config";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function UltraSoundHospital() {
  const navigation = useNavigation();
  return (
    <View style={styles.screenContainer}>
      <View>
        <AppHeader styles={styles.headerContainer}>
          <GradientBackground styles={styles.LinearGradient}>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  width: deviceWidth / 8,
                  flexDirection: "row",
                  alignItems: "flex-end",
                  height: 70,
                }}
              >
                <TouchableOpacity>
                  <Ionicons
                    name="chevron-back-sharp"
                    size={30}
                    style={{ color: baseColors.lightTextColor }}
                    onPress={() => {
                      navigation.goBack("");
                    }}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.HeadingText}>Dentist</Text>
            </View>
            <View>
              <SearchField placeholder="Search" styles={styles.SearchField} />
            </View>
          </GradientBackground>
        </AppHeader>
      </View>
      {/* <ScrollView> */}
      <View style={styles.middle}>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            width: deviceWidth / 1 - 10,
            height: deviceHeight / 1.3,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            paddingTop: 10,
          }}
        >
          <View
            style={{
              height: 40,
              width: deviceWidth / 1 - 40,
              borderRadius: 15,
              backgroundColor: baseColors.sucessColorTransparent,
              borderColor: baseColors.primaryColor,
              borderWidth: 0.5,
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
                  color: baseColors.darkTextColor,
                }}
              >
                Test Name
              </Text>

              <Text
                style={{
                  color: baseColors.darkTextColor,
                }}
              >
                Price
              </Text>

              <Text
                style={{
                  color: baseColors.darkTextColor,
                }}
              >
                Action
              </Text>
            </View>
          </View>

          <TouchableOpacity
          // onPress={()=>{Navigation.navigate('SetCampaignPharmacy') }}
          >
            <FlatList
              data={CurrentChampaignDataPharmacy}
              keyExtractor={(item, index) => index}
              renderItem={({ item, index }) => (
                <View
                  style={{
                    width: deviceWidth / 1 - 50,
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    height: 35,
                  }}
                >
                  <Text>Lower Abdomen</Text>

                  <Text>$ 50</Text>
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
                      //    onPress={()=>{Navigation.navigate('SetCampaignPharmacy') }}
                    />
                    <View
                      style={{
                        width: 25,
                        height: 25,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius:50,
                        backgroundColor:baseColors.sucessColor
                      }}
                    >
                      <MaterialIcons name="delete-outline" size={18} color="white" />
                    </View>
                  </View>
                </View>
              )}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

export default UltraSoundHospital;
