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
import { ChatData } from "../../../../Config/index";
import { styles } from "./style";
import { AvatarPerson1 } from "../../../../Assets/images";
import { Entypo, Ionicons, FontAwesome } from "@expo/vector-icons";
import baseColors from "../../../../Constant/color";
import { useNavigation } from "@react-navigation/native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function DentistsHospital() {
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
        <View style={styles.screenMiddle}>
          <FlatList
            data={ChatData}
            renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 5,
                }}
              >
                <Image
                  source={AvatarPerson1}
                  style={{ height: 50, width: 50, borderRadius: 50 }}
                ></Image>
                <View
                  style={{ flexDirection: "column", width: deviceWidth / 2.5 }}
                >
                  <Text>Dr Umair Rana</Text>

                  <View style={{ flexDirection: "row" }}>
                    <Entypo
                      name="lock"
                      size={17}
                      style={{ color: baseColors.primaryColor }}
                    />
                    <Text>3 year</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-end",
                    height: 40,
                  }}
                >
                  <FontAwesome
                    name="star"
                    size={15}
                    style={{ color: baseColors.limeColor }}
                  />
                  <FontAwesome
                    name="star"
                    size={15}
                    style={{ color: baseColors.limeColor }}
                  />
                  <FontAwesome
                    name="star"
                    size={15}
                    style={{ color: baseColors.limeColor }}
                  />
                  <FontAwesome
                    name="star"
                    size={15}
                    style={{ color: baseColors.secondaryTextColor }}
                  />
                  <FontAwesome
                    name="star"
                    size={15}
                    style={{ color: baseColors.secondaryTextColor }}
                  />
                </View>
              </View>
            )}
          />
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

export default DentistsHospital;
